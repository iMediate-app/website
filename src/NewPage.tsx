import React from "react";
import { motion } from "framer-motion";
import { Apple, PlayCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function NewPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Background Illustration */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden
          className="absolute left-1/2 top-[-10%] h-[120vh] w-[120vw] -translate-x-1/2 opacity-50"
          viewBox="0 0 1200 1200"
          fill="none"
        >
          <defs>
            <radialGradient id="g1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600 400) rotate(90) scale(400 600)">
              <stop stopColor="#D9F2EE" />
              <stop offset="1" stopColor="#D9F2EE" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="g2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 800) rotate(90) scale(300 500)">
              <stop stopColor="#E5F0FF" />
              <stop offset="1" stopColor="#E5F0FF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="1200" height="1200" fill="url(#g1)" />
          <rect x="0" y="0" width="1200" height="1200" fill="url(#g2)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2 md:py-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to the New Page
          </h1>
          <p className="mt-4 max-w-xl text-lg text-neutral-700">
            This is a new page styled to match the rest of the site. Add your content here!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center gap-3 w-full">
            <a
              href="#"
              className="w-full sm:w-auto rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-md flex items-center gap-2 justify-center"
            >
              <Apple className="h-5 w-5" /> App Store
            </a>
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium shadow-sm transition hover:shadow-md justify-center"
            >
              <PlayCircle className="h-5 w-5" /> Google Play
            </a>
          </div>
        </motion.div>
        <div className="flex justify-center items-center">
          <img
            src="https://imediate-app.github.io/website/family/images/HIW_10.jpg"
            alt="Preview"
            className="rounded-3xl border border-neutral-200 bg-white shadow-xl max-w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}
