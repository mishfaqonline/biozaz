import { NextResponse } from "next/server";
import { createSupabaseServiceClient } from "../../../utils/supabaseServer";
import { generateSEO } from "../../../lib/generateSEO";
import { fromDbProduct, toDbProduct } from "../../../utils/productMap";

const isAdmin = async (supabase, token) => {
  if (!token) return false;
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user?.email) return false;
  const allowed = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  if (allowed.length === 0) return true;
  return allowed.includes(data.user.email.toLowerCase());
};

export async function GET() {
  const supabase = createSupabaseServiceClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ data: (data || []).map(fromDbProduct) });
}

export async function POST(request) {
  const supabase = createSupabaseServiceClient();
  const auth = request.headers.get("authorization") || "";
  const token = auth.replace("Bearer ", "");
  const ok = await isAdmin(supabase, token);
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const dbProduct = toDbProduct(body);
  const seo = generateSEO(dbProduct);
  const payload = { ...dbProduct, ...seo };

  const { data, error } = await supabase.from("products").insert(payload).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data: fromDbProduct(data) });
}

export async function PUT(request) {
  const supabase = createSupabaseServiceClient();
  const auth = request.headers.get("authorization") || "";
  const token = auth.replace("Bearer ", "");
  const ok = await isAdmin(supabase, token);
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const { id, ...rest } = body || {};
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const dbProduct = toDbProduct(rest);
  const seo = generateSEO({ ...dbProduct, id });
  const updates = { ...dbProduct, ...seo };

  const { data, error } = await supabase
    .from("products")
    .update(updates)
    .eq("id", id)
    .select("*")
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data: fromDbProduct(data) });
}

export async function DELETE(request) {
  const supabase = createSupabaseServiceClient();
  const auth = request.headers.get("authorization") || "";
  const token = auth.replace("Bearer ", "");
  const ok = await isAdmin(supabase, token);
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
