import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900"
        >
          Let’s build something great
        </motion.h2>

        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Email</div>
                <a href="mailto:your.email@example.com" className="text-base font-semibold text-gray-900 hover:underline">
                  your.email@example.com
                </a>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">Open to freelance work, contracts, and full-time roles.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Name" />
            <input className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Email" type="email" />
            <input className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 sm:col-span-2" placeholder="Subject" />
            <textarea className="w-full h-32 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 sm:col-span-2" placeholder="Message" />
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-gray-800 sm:col-span-2">
              <Send className="h-4 w-4" /> Send Message
            </button>
          </motion.form>
        </div>

        <p className="mt-10 text-center text-xs text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
}
