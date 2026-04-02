"use client";
import { useState } from "react";

const serviceOptions = [
  "Cloud Architecture Review",
  "AWS Certification Training",
  "Corporate Team Training",
  "FinOps / Cost Optimization",
  "Generative AI on AWS",
  "Other",
];

export default function ConsultingForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", serviceType: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", company: "", serviceType: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">✅</div>
        <p className="text-primary font-semibold text-lg">Message received!</p>
        <p className="text-muted text-sm mt-2">I'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-[#0F172A] block mb-1">Name *</label>
          <input name="name" value={form.name} onChange={handleChange} required
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
        </div>
        <div>
          <label className="text-sm font-medium text-[#0F172A] block mb-1">Email *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-[#0F172A] block mb-1">Company</label>
        <input name="company" value={form.company} onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
      </div>
      <div>
        <label className="text-sm font-medium text-[#0F172A] block mb-1">Service</label>
        <select name="serviceType" value={form.serviceType} onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white">
          <option value="">Select a service...</option>
          {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label className="text-sm font-medium text-[#0F172A] block mb-1">Message *</label>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={4}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
      </div>
      {status === "error" && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
      )}
      <button type="submit" disabled={status === "loading"}
        className="w-full bg-accent text-white font-semibold py-3 rounded-lg hover:bg-primary transition-colors disabled:opacity-60">
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
