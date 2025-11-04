import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code, Video } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
  >
    <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
      <Icon className="h-5 w-5 text-indigo-400" />
    </div>
    <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
    <p className="text-sm leading-relaxed text-white/70">{desc}</p>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="bg-gradient-to-br from-white to-slate-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            About Alief Kaka
          </h2>
          <p className="mt-4 text-white/70">
            I tell stories with algorithms. From interactive AI narratives to practical classroom demos, my work bridges creativity and code to make complex ideas feel simple and exciting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Feature
            icon={BrainCircuit}
            title="AI Storytelling"
            desc="Designing interactive narratives that respond to your input and evolve in real time."
          />
          <Feature
            icon={Video}
            title="Content & Education"
            desc="Crafting courses, talks, and short-form content that demystifies AI for everyone."
          />
          <Feature
            icon={Code}
            title="Full‑Stack Builds"
            desc="Shipping production-ready experiences with robust APIs and scalable frontends."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
