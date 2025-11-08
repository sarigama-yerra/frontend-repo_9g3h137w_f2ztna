import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    'React', 'TypeScript', 'Next.js', 'Node.js', 'FastAPI', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-blue-50/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-gray-700 leading-relaxed"
            >
              I’m a software engineer focused on building polished, reliable products. I enjoy solving complex problems, creating modular systems, and delivering intuitive interfaces. I collaborate cross‑functionally and care deeply about craft, testing, and performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {skills.map((s) => (
                <div key={s} className="rounded-lg border bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm">
                  {s}
                </div>
              ))}
            </motion.div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[1,2,3,4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-xl border bg-white p-5 shadow-sm"
              >
                <div className="text-sm font-semibold text-gray-900">Highlight {i}</div>
                <div className="mt-2 text-sm text-gray-600">Impactful achievement or capability that demonstrates value and craftsmanship.</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
