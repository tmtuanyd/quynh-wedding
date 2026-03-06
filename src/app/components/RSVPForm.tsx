"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function RSVPForm() {
  const [form, setForm] = useState({
    name: "",
    guests: 1,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-wedding py-16 px-4">
      <motion.h2
        className="text-3xl font-great text-wedding-accent text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Xác nhận tham dự
      </motion.h2>
      <div className="max-w-md mx-auto">
        {submitted ? (
          <motion.div
            className="text-center text-wedding-accent text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Cảm ơn bạn đã xác nhận! 💌
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.input
              type="text"
              name="name"
              placeholder="Tên của bạn"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-wedding rounded-lg px-4 py-2.5 text-wedding focus:outline-none focus:ring-2 focus:ring-[var(--wedding-accent)] focus:border-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.input
              type="number"
              name="guests"
              placeholder="Số người tham dự"
              min={1}
              required
              value={form.guests}
              onChange={handleChange}
              className="w-full border border-wedding rounded-lg px-4 py-2.5 text-wedding focus:outline-none focus:ring-2 focus:ring-[var(--wedding-accent)] focus:border-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.textarea
              name="message"
              placeholder="Lời nhắn (tuỳ chọn)"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-wedding rounded-lg px-4 py-2.5 text-wedding focus:outline-none focus:ring-2 focus:ring-[var(--wedding-accent)] focus:border-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.button
              type="submit"
              className="w-full bg-[var(--wedding-accent)] text-white py-3 rounded-lg mt-4 font-medium hover:opacity-90 transition-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Xác nhận
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
}
