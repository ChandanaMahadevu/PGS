"use client";

import { useState } from "react";
import { siteConfig, whatsappUrl } from "@/data/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = [
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      "",
      message.trim(),
    ].join("\n");
    const url = whatsappUrl(
      `Hi ${siteConfig.name},\n\nI'd like to get in touch.\n\n${text}`
    );
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-6 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm shadow-stone-900/5 sm:p-10"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-stone-800">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-xl border border-stone-200 bg-[#faf9f7] px-4 py-3 text-stone-900 outline-none ring-stone-900/10 transition focus:border-stone-400 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-stone-800">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-2 w-full rounded-xl border border-stone-200 bg-[#faf9f7] px-4 py-3 text-stone-900 outline-none ring-stone-900/10 transition focus:border-stone-400 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full resize-y rounded-xl border border-stone-200 bg-[#faf9f7] px-4 py-3 text-stone-900 outline-none ring-stone-900/10 transition focus:border-stone-400 focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-stone-900 py-3.5 text-sm font-semibold text-white transition hover:bg-stone-800"
      >
        Send via WhatsApp
      </button>
      {sent ? (
        <p className="text-center text-sm text-stone-600" role="status">
          If WhatsApp did not open, check your popup blocker or use the button
          below.
        </p>
      ) : null}
    </form>
  );
}
