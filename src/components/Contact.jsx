import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Collab / Workshop Inquiry');
    const body = encodeURIComponent(`Hi Alief,\n\nMy name is ${name}.\n\n${message}\n\nReach me at: ${email}`);
    window.location.href = `mailto:hello@aliefkaka.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <h2 className="bg-gradient-to-br from-white to-slate-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            Let’s Collaborate
          </h2>
          <p className="mt-4 text-white/70">
            Speaking gigs, workshops, content collaborations, or product builds — I’d love to hear from you.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="mx-auto grid max-w-2xl gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/20"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/20"
            />
          </div>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your idea or event"
            rows={5}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/20"
          />

          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
          >
            <Mail className="h-4 w-4" />
            Send Message
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-white/50">
          Or email directly: hello@aliefkaka.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
