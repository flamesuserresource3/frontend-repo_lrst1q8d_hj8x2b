import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <span className="text-xs tracking-wide text-white/80">Innovative AI Storytelling</span>
            <span className="text-xs text-white/40">•</span>
            <span className="text-xs tracking-wide text-white/80">Education & Dev</span>
          </div>

          <h1 className="font-display bg-gradient-to-br from-white via-white to-slate-300 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-6xl">
            Alief Kaka
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-200/80 sm:text-lg">
            AI Content Creator • AI Educator • Full‑Stack Developer. I blend technology and narrative to craft immersive learning experiences and interactive stories.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
            >
              <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Watch Stories
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              <GraduationCap className="h-4 w-4" />
              Book a Workshop
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
