"use client";

import React, { useState } from "react";

const ContactFormClient = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") || "";
    const email = form.get("email") || "";
    const phone = form.get("phone") || "";
    const message = form.get("message") || "";

    const text = `Hello Biozaz,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(
      email
    )}%0APhone: ${encodeURIComponent(phone)}%0A%0ARequirement:%0A${encodeURIComponent(message)}`;

    const whatsappUrl = `https://wa.me/923364446339?text=${text}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="bg-white/70 p-6 rounded-lg border border-white/60 shadow-sm backdrop-blur-lg">
      <h3 className="text-xl font-bold mb-3 text-slate-900">Send Us Your Requirements</h3>
      {sent && (
        <div className="mb-3 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-800">
          Opening WhatsApp with your message…
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border rounded-lg px-3 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border rounded-lg px-3 py-2"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone / WhatsApp"
            className="w-full border rounded-lg px-3 py-2"
          />
          <textarea
            name="message"
            placeholder="Tell us your requirements..."
            className="w-full border rounded-lg px-3 py-2"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-sky-600 text-white py-2 rounded-lg font-semibold hover:from-teal-700 hover:to-sky-700 transition"
          >
            Send Request (WhatsApp)
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormClient;
