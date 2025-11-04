import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Neural Narratives',
    tag: 'Interactive Story',
    desc: 'A branching storyline driven by LLMs where the audience guides the plot in real-time.',
    link: '#',
    accent: 'from-indigo-500/30 to-cyan-500/30',
  },
  {
    title: 'AI Classroom Live',
    tag: 'Workshop Series',
    desc: 'Hands-on sessions where students build AI tools and deploy them in under an hour.',
    link: '#',
    accent: 'from-emerald-500/30 to-lime-500/30',
  },
  {
    title: 'Creator Toolkit',
    tag: 'Open Source',
    desc: 'Utilities for content creators: captioning, audio cleanup, and script ideation powered by AI.',
    link: '#',
    accent: 'from-fuchsia-500/30 to-rose-500/30',
  },
];

const Card = ({ item, index }) => (
  <motion.a
    href={item.link}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20`}
  >
    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 transition-opacity group-hover:opacity-100`} />
    <div className="relative z-10 flex h-full flex-col">
      <div className="mb-2 inline-flex items-center gap-2">
        <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">{item.tag}</span>
        <Sparkles className="h-4 w-4 text-white/60" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
      <p className="mb-4 text-sm text-white/70">{item.desc}</p>
      <div className="mt-auto inline-flex items-center gap-2 text-sm text-white/80">
        <span>Explore</span>
        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </div>
    </div>
  </motion.a>
);

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="bg-gradient-to-br from-white to-slate-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            Featured Work
          </h2>
          <p className="mt-4 text-white/70">
            A selection of stories, tools, and learning experiences driven by AI and built with modern web tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Card key={p.title} item={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
