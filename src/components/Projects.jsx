import { motion } from 'framer-motion';
import { Code2, Rocket, Server } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration App',
    description: 'Multiplayer editing with CRDTs, presence, and end-to-end encryption.',
    icon: Rocket,
    tags: ['React', 'WebRTC', 'CRDT'],
    link: '#'
  },
  {
    title: 'Microservices Platform',
    description: 'Distributed services with API gateway, observability, and CI/CD.',
    icon: Server,
    tags: ['FastAPI', 'Kafka', 'Docker'],
    link: '#'
  },
  {
    title: 'Design System',
    description: 'Accessible components with tokens, themes, and documentation site.',
    icon: Code2,
    tags: ['TypeScript', 'Radix', 'Storybook'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, icon: Icon, tags, link }, idx) => (
            <motion.a
              key={title}
              href={link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">{title}</div>
                </div>
              </div>
              <p className="mt-3 text-gray-600 text-sm">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-gray-100 px-2.5 py-1 font-medium text-gray-700">{t}</span>
                ))}
              </div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-blue-200 transition" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
