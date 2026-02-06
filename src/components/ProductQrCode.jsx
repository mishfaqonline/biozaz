"use client";

import React from "react";

const ProductQrCode = ({ url }) => {
  if (!url) return null;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
    url
  )}`;

  return (
    <div className="mt-6 flex items-center gap-4 bg-white/70 backdrop-blur-lg border border-white/60 rounded-xl p-4">
      <img src={qrUrl} alt="Product QR code" className="w-20 h-20" />
      <div>
        <p className="text-sm text-slate-600">Scan for product page</p>
        <p className="text-xs text-slate-500 break-all">{url}</p>
      </div>
    </div>
  );
};

export default ProductQrCode;
