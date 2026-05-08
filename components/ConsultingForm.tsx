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

const inputClass =
  "w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all";

const labelClass = "text-sm font-medium text-slate-700 block mb-1.5";

export default function ConsultingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    serviceType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-[#D1FAE5] rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✓</span>
        </div>
        <p className="text-slate-900 font-semibold text-lg mb-2">Message received!</p>
        <p className="text-slate-600 text-sm">We will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Company</label>
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Your company (optional)"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Service</label>
        <select
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Tell us about your project or training needs..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-60 hover:-translate-y-px"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
