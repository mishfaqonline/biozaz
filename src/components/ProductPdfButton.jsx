"use client";

import React from "react";
import { jsPDF } from "jspdf";
import logo from "../images/logotm3.png";

const ProductPdfButton = ({ product }) => {
  const loadImageAsDataUrl = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) return null;
      const blob = await res.blob();
      return await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(blob);
      });
    } catch (e) {
      return null;
    }
  };

  const loadImageViaCanvas = (url) =>
    new Promise((resolve) => {
      try {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL("image/jpeg", 0.9));
        };
        img.onerror = () => resolve(null);
        img.src = url;
      } catch {
        resolve(null);
      }
    });

  const resolveUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    const origin = typeof window !== "undefined" ? window.location.origin : "https://biozaz.com";
    if (url.startsWith("/")) return `${origin}${url}`;
    return `${origin}/${url}`;
  };

  const getImageType = (dataUrl) => {
    if (!dataUrl) return "JPEG";
    if (dataUrl.startsWith("data:image/png")) return "PNG";
    if (dataUrl.startsWith("data:image/webp")) return "WEBP";
    return "JPEG";
  };

  const handleDownload = async () => {
    if (!product) return;
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const marginX = 14;
    const bottomMargin = 40;
    const contentTop = 48;
    const lineHeight = 5;

    const drawHeader = () => {
      doc.setFillColor(...deepBlue);
      doc.rect(0, 0, pageWidth, 34, "F");
      doc.setFillColor(...teal);
      doc.rect(0, 34, pageWidth, 4, "F");

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(16);
      doc.text("BIOZAZ Product Brochure", marginX, 20);
      doc.setFontSize(10);
      doc.text("Medical Imaging • PACS • Ultrasound • Skincare", marginX, 27);
    };

    const drawFooter = () => {
      const footerY = pageHeight - 18;
      doc.setDrawColor(200, 210, 225);
      doc.line(marginX, footerY - 6, pageWidth - marginX, footerY - 6);
      doc.setFontSize(9);
      doc.setTextColor(90, 105, 125);
      doc.text(
        "Biozaz | info@biozaz.com | +92 336 4446339 | https://biozaz.com",
        marginX,
        footerY
      );
      doc.text(
        "G2, 13A, Sindhi Muslim Cooperative Housing Society Block A, SMCHS, Karachi 75400",
        marginX,
        footerY + 5
      );
      doc.setTextColor(120, 130, 145);
      doc.text("© 2026 Biozaz. All rights reserved.", marginX, footerY + 10);
    };

    const ensureSpace = (y, needed) => {
      if (y + needed < pageHeight - bottomMargin) return y;
      return null;
    };

    // Color palette
    const deepBlue = [7, 43, 91];
    const teal = [14, 165, 164];
    const sky = [14, 165, 233];
    const slate = [60, 75, 95];

    // Header band
    drawHeader();

    // Watermark
    doc.setFont("helvetica", "bold");
    doc.setFontSize(42);
    doc.setTextColor(230, 236, 244);
    doc.text("BIOZAZ", pageWidth / 2, pageHeight / 2, {
      angle: 35,
      align: "center"
    });

    // Logo
    const logoUrl = resolveUrl(logo?.src || logo);
    const logoDataUrl =
      logoUrl ? await loadImageAsDataUrl(logoUrl) || await loadImageViaCanvas(logoUrl) : null;
    if (logoDataUrl) {
      const logoType = getImageType(logoDataUrl);
      doc.addImage(logoDataUrl, logoType, pageWidth - 42, 8, 30, 20);
    }

    let cursorY = contentTop;

    // Hero card
    doc.setFillColor(246, 248, 252);
    doc.roundedRect(12, cursorY, pageWidth - 24, 70, 4, 4, "F");
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(12, cursorY, pageWidth - 24, 70, 4, 4, "S");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(...deepBlue);
    doc.text(product.name, 18, cursorY + 14);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(...slate);
    doc.text(`${product.category}`, 18, cursorY + 22);

    // Short specs under name
    if (product.shortSpecs?.length) {
      doc.setFontSize(10);
      doc.setTextColor(90, 105, 125);
      const shortList = product.shortSpecs.slice(0, 3).map((item) => `• ${item}`);
      const shortLines = doc.splitTextToSize(shortList.join("\n"), 96);
      doc.text(shortLines, 18, cursorY + 30);
    }

    const productUrl = resolveUrl(`/products/${product.slug || `product-${product.id}`}`);

    // QR code (header, centered)
    try {
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(
        productUrl
      )}`;
      const qrDataUrl =
        (await loadImageAsDataUrl(qrUrl)) || (await loadImageViaCanvas(qrUrl));
      if (qrDataUrl) {
        const qrType = getImageType(qrDataUrl);
        const qrSize = 22;
        const qrX = pageWidth / 2 - qrSize / 2;
        doc.addImage(qrDataUrl, qrType, qrX, 6, qrSize, qrSize);
      }
    } catch {}

    // Product image
    const rawImage = product.images?.[0]?.src || product.images?.[0];
    const imageUrl = resolveUrl(rawImage);
    const imageDataUrl =
      imageUrl ? await loadImageAsDataUrl(imageUrl) || await loadImageViaCanvas(imageUrl) : null;
    if (imageDataUrl) {
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(pageWidth - 86, cursorY + 6, 68, 56, 3, 3, "F");
      const imgType = getImageType(imageDataUrl);
      doc.addImage(imageDataUrl, imgType, pageWidth - 84, cursorY + 8, 64, 52);
    } else {
      doc.setFontSize(9);
      doc.setTextColor(120, 130, 145);
      doc.text("Image unavailable", pageWidth - 78, cursorY + 38);
    }

    const addSection = (title, content, accent = sky) => {
      if (!content || (Array.isArray(content) && content.length === 0)) return;
      const nextY = ensureSpace(cursorY + 8, 12);
      if (nextY === null) return;
      cursorY = nextY;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(...deepBlue);
      doc.text(title, marginX, cursorY);
      doc.setDrawColor(...accent);
      doc.line(marginX, cursorY + 2, marginX + 34, cursorY + 2);
      cursorY += 8;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(...slate);

      const text =
        Array.isArray(content)
          ? content.map((line) => (line.startsWith("•") ? line : `• ${line}`)).join("\n")
          : content;

      const lines = doc.splitTextToSize(text, pageWidth - marginX * 2);
      for (let i = 0; i < lines.length; i += 1) {
        const space = ensureSpace(cursorY, lineHeight);
        if (space === null) {
          doc.text("…", marginX, cursorY);
          return;
        }
        cursorY = space;
        doc.text(lines[i], marginX, cursorY);
        cursorY += lineHeight;
      }
    };

    if (product.metaDescription) {
      cursorY = cursorY + 80;
      addSection("Overview", product.metaDescription, sky);
    } else {
      cursorY = cursorY + 80;
    }

    if (product.shortSpecs?.length) {
      addSection("Short Specs", product.shortSpecs, teal);
    }

    if (product.features?.length) {
      addSection("Features", product.features, teal);
    }

    if (product.specs && Object.keys(product.specs).length) {
      const specsLines = Object.entries(product.specs).map(
        ([key, value]) => `${key}: ${value}`
      );
      addSection("Technical Specs", specsLines, sky);
    }

    const detailsText = product.fullDetails || product.full_details || "";
    if (detailsText) {
      addSection("Full Details", detailsText, teal);
    }
    drawFooter();

    const filename = `${product.slug || `product-${product.id}`}-biozaz.pdf`;
    doc.save(filename);
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-3 inline-flex items-center justify-center bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white px-6 py-3 rounded-xl font-semibold shadow-sm transition"
    >
      Download Product PDF
    </button>
  );
};

export default ProductPdfButton;
