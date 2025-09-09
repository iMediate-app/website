import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Apple, PlayCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function NewPageModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl rounded-3xl bg-neutral-50 p-8 shadow-2xl border border-neutral-200"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-700 focus:outline-none"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
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
      </motion.div>
    </div>
  );
}
