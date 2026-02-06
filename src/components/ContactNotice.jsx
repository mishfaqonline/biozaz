"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const ContactNotice = () => {
  const params = useSearchParams();
  const success = params.get("success");
  if (!success) return null;

  return (
    <div className="mb-6 p-4 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-800">
      Thanks! Your request was sent successfully. We will contact you shortly.
    </div>
  );
};

export default ContactNotice;
