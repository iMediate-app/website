import React from "react";
import { motion } from "framer-motion";
import {
  Apple,
  PlayCircle,
  Sparkles,
  Feather,
  Share2,
  Users,
  Bell,
  FileText,
  Lock,
  Home,
  PawPrint,
  Lightbulb,
  Heart,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function App() {
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
          {Array.from({ length: 20 }).map((_, i) => {
            const x = 60 + (i * 54) % 1080;
            const y = 80 + ((i * 97) % 900);
            const r = 6 + (i % 5);
            return (
              <circle key={i} cx={x} cy={y} r={r} fill={i % 2 ? "#A7E7DC" : "#BFD8FF"} opacity="0.35" />
            );
          })}
          {Array.from({ length: 14 }).map((_, i) => {
            const x1 = 100 + (i * 70) % 1000;
            const y1 = 120 + ((i * 89) % 800);
            const x2 = (x1 + 140 + (i * 13)) % 1100;
            const y2 = (y1 + 80 + (i * 23)) % 900;
            return (
              <path key={`p-${i}`} d={`M${x1},${y1} C ${(x1 + x2) / 2},${y1 - 60} ${(x1 + x2) / 2},${y2 + 60} ${x2},${y2}`} stroke="#A7C3FF" strokeOpacity="0.25" strokeWidth="2" fill="none" />
            );
          })}
        </svg>
      </div>

      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <a href="https://imediate.im" target="_blank" rel="noopener noreferrer" aria-label="iMediate Home" className="flex items-center">
            <span className="inline-block h-8 w-8 rounded-xl overflow-hidden">
              {/* SVG Logo */}
              <svg version="1.1" viewBox="0 0 2048 2048" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                <path transform="translate(0)" d="m0 0h2048v2048h-2048z" fill="#101010"/>
                <path transform="translate(791,652)" d="m0 0h251l2 2 16 84 24 125 25 131 15 77 13 69 8 42 4 25 3 28 1 18v33l-1 14-1 4 4-1 13-37 12-29 8-19 7-15 16-33 193-386 9-19 10-19 15-30 9-19 18-36 6-9h256l2 3 3 30v10l-10 4-94 27-2 1-19 120-16 100-14 88-17 106-9 57-20 126-7 42v3l33 11 41 13 21 7 1 3-12 29-4 10-2 2h-308l-1-2-2-29v-12l7-3 43-13 50-15h3l6-37 15-92 19-118 18-112 20-122 12-65 17-83 1-4-5 2-11 28-15 36-11 25-12 27-15 32-11 24-10 19-23 45-14 27-17 33-10 19-15 29-17 33-10 19-21 41-10 19-18 35-10 19-18 35-10 19-20 39-10 19-12 23-17 33-10 19-5 8h-64l-3-9-22-107-24-116-28-135-24-117-12-58-10-57-8-55-5-39-1-14-4 1-5 42-6 52-10 72-13 81-22 140-15 94-16 102-7 43v5l36 12 53 17 6 3-1 5-15 37-1 1h-258l-2-5-2-38 7-3 70-21 26-8 4-20 10-64 27-169 14-88 13-82 11-70 24-150-11-3-36-12-46-15 1-7 10-27 4-9z" fill="#FFFFFF"/>
                <path transform="translate(447,851)" d="m0 0h33l19 3 15 5 13 7 12 11 6 7 8 16 4 15 2 18v13l-5 38-17 97-14 82-32 184-3 17v6l8 2 10 1h13l17-3 16-6 18-10 14-11 7-6 2-3 5 1 18 18-2 6-7 16-10 17-10 13-11 12-8 8-15 11-16 9-15 6-17 5-17 3-12 1h-21l-21-3-17-5-14-7-9-7-7-7-7-10-7-17-3-13-1-9v-23l4-32 21-122 13-74 28-161 5-29v-3l-16-3h-15l-16 3-13 5-14 7-16 12-10 9-5 4-2-1v-2h-2l-16-16 1-6 7-16 11-18 10-13 19-19 17-12 16-8 12-5 19-5z" fill="#FFFFFF"/>
                <path transform="translate(519,588)" d="m0 0h20l15 3 12 5 11 6 11 9 7 8 9 14 6 16 2 9v26l-5 18-8 16-11 13-8 7-14 8-13 5-13 3h-21l-17-4-16-7-13-10-8-8-7-10-7-14-4-14-1-6v-20l4-17 7-16 10-13 10-10 13-8 12-5z" fill="#FFFFFF"/>
              </svg>
            </span>
          </a>
          <span className="font-semibold tracking-tight ml-2">calendar.iM</span>
        </div>
        <a
          href="#download"
          className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:shadow-md"
        >
          Get the free app
        </a>
      </header>

      {/* Hero */}
      <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2 md:py-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Clear. Calm. Connected.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-neutral-700">
            A simple way to organize and share what matters most.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center gap-3 w-full">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B31613070691&text=I%27m+saying+hello+to+iMediate%27s+Automagic%21&type=phone_number&app_absent=0"
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-md flex items-center gap-2 justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor" className="text-white"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.37L4 29l7.824-2.18C13.5 27.606 14.734 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.13 0-2.244-.188-3.293-.558l-.235-.08-4.646 1.294 1.294-4.646-.08-.235C6.188 17.244 6 16.13 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.709c-.293-.146-1.73-.855-1.997-.951-.267-.098-.461-.146-.656.146-.195.293-.752.951-.922 1.146-.17.195-.341.219-.634.073-.293-.146-1.236-.455-2.357-1.451-.87-.776-1.457-1.732-1.63-2.025-.17-.293-.018-.45.128-.595.132-.132.293-.341.439-.512.146-.17.195-.293.293-.488.098-.195.049-.366-.024-.512-.073-.146-.656-1.586-.899-2.172-.237-.57-.478-.492-.656-.5-.17-.007-.366-.009-.561-.009-.195 0-.512.073-.78.366-.267.293-1.02.996-1.02 2.427 0 1.43 1.04 2.812 1.186 3.007.146.195 2.048 3.13 5.07 4.267.709.244 1.262.39 1.694.499.712.181 1.36.156 1.872.095.571-.067 1.73-.707 1.976-1.39.244-.683.244-1.268.171-1.39-.073-.122-.268-.195-.561-.341z"/></svg>
              Start with calendar.iM
            </a>
            <a
              href="https://apps.apple.com/app/imediate/id6744072106"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium shadow-sm transition hover:shadow-md justify-center"
              aria-label="Download on the App Store"
            >
              <Apple className="h-5 w-5" />
              <span>App Store</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.imediate"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium shadow-sm transition hover:shadow-md justify-center"
              aria-label="Get it on Google Play"
            >
              <PlayCircle className="h-5 w-5" />
              <span>Google Play</span>
            </a>
          </div>
        </motion.div>
        <div className="flex justify-center items-center">
          <img
            src="https://imediate-app.github.io/website/family/images/HIW_10.jpg"
            alt="How it works preview"
            className="rounded-3xl border border-neutral-200 bg-white shadow-xl max-w-full h-auto"
          />
        </div>
      </section>

      {/* Value Props */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ValueCard
            Icon={Sparkles}
            title="Clear"
            text="Simple plans. Easy scheduling. No clutter."
          />
          <ValueCard
            Icon={Feather}
            title="Calm"
            text="Stress-free communication. Balanced days."
          />
          <ValueCard
            Icon={Share2}
            title="Connected"
            text="One trusted space for people, pets, or projects."
          />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Chatting is Synchronising</h2>
          <p className="mt-3 text-neutral-700">
            Automagically extract plans, set gentle reminders, keep notes, and store the details you care about.<br/>
            All together in one calm place.
          </p>
        </motion.div>

        <div className="mt-10">
          <FeatureList />
        </div>
      </section>

      {/* Use Cases */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h3 className="text-2xl font-semibold tracking-tight">One space. Many ways to feel organized.</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <UseCaseCard
            title="For families"
            bullets={["Kids, pets, home life", "Carpools & activities", "Share updates with ease"]}
            icon={<div className="flex items-center gap-2"><Home className="h-5 w-5" /><PawPrint className="h-5 w-5" /></div>}
          />
          <UseCaseCard
            title="For projects"
            bullets={["Ideas & teamwork", "Lightweight planning", "Clear next steps"]}
            icon={<Lightbulb className="h-5 w-5" />}
          />
          <UseCaseCard
            title="For balance"
            bullets={["Self-care reminders", "Protect focus time", "Gentle nudges, no noise"]}
            icon={<Heart className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* Trust & Security */}
      <section className="mx-auto max-w-7xl rounded-3xl bg-white px-6 py-16 shadow-sm">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Safe. Private. Yours.</h3>
            <p className="mt-3 text-neutral-700">
              Your plans belong to you. Calendar.iM is built with user‑first privacy principles and secure storage so your
              information stays protected and in your control.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><Lock className="h-4 w-4" /> Secure storage for notes & plans</li>
              <li className="flex items-center gap-2"><Users className="h-4 w-4" /> You choose who you can .iM with</li>
              <li className="flex items-center gap-2"><Bell className="h-4 w-4" /> Gentle nudges, constant iMprovent.</li>
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="grid gap-3">
                <Badge text="User‑first privacy" />
                <Badge text="No clutter by design" />
                <Badge text="Share with confidence" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section id="download" className="mx-auto mt-16 max-w-7xl px-6 pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-100 to-sky-100 p-8 text-center md:p-12">
          <h4 className="text-2xl font-semibold tracking-tight">Clear. Calm. Connected.</h4>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://apps.apple.com/app/imediate/id6744072106"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-md"
            >
              <Apple className="h-5 w-5" /> Get calendar.iM
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.imediate"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-medium shadow-sm transition hover:shadow-md"
            >
              <PlayCircle className="h-5 w-5" /> Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-neutral-600 md:flex-row">
          <p>
            <a 
              href="https://imediate-app.github.io/website/family/foundation.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-neutral-800" 
              style={{ fontFamily: 'var(--font-family-main, \"EB Garamond\", serif)' }}
            >
              © 2025 The iMediate Foundation
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a href="https://imediate-app.github.io/website/family/privacy.html" className="hover:text-neutral-800" target="_blank" rel="noopener noreferrer">Privacy</a>
            <a href="https://imediate-app.github.io/website/family/terms.html" className="hover:text-neutral-800" target="_blank" rel="noopener noreferrer">Terms</a>
            <a href="https://imediate-app.github.io/website/family/contact.html" className="hover:text-neutral-800" target="_blank" rel="noopener noreferrer">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Row({ time, title, tag, accent }: { time: string; title: string; tag: string; accent: "emerald" | "sky" | "amber" | "violet"; }) {
  const badgeColors: Record<string, string> = {
    emerald: "bg-emerald-100 text-emerald-700",
    sky: "bg-sky-100 text-sky-700",
    amber: "bg-amber-100 text-amber-700",
    violet: "bg-violet-100 text-violet-700",
  };
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-white p-3 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-50 text-xs font-semibold text-neutral-700">
          {time}
        </span>
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-neutral-500">Shared with 2 people</p>
        </div>
      </div>
      <span className={`rounded-full px-2 py-1 text-[10px] ${badgeColors[accent]}`}>{tag}</span>
    </motion.div>
  );
}

function MiniRow({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="rounded-2xl bg-neutral-50 p-3">
      <p className="text-xs font-medium">{title}</p>
      <p className="text-[10px] text-neutral-500">{sub}</p>
    </div>
  );
}

function ValueCard({ Icon, title, text }: { Icon: any; title: string; text: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-sky-100">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-neutral-700">{text}</p>
    </motion.div>
  );
}

function FeatureList() {
  const items = [
  { icon: Users, title: "Shared scheduling", desc: "Plan together with a person who matters." },
    { icon: Bell, title: "Reminders", desc: "Gentle nudges that help—never overwhelm." },
    { icon: FileText, title: "Notes", desc: "Keep details, lists, and agreements in one place." },
    { icon: Lock, title: "Secure storage", desc: "Your information stays private and in your control." },
  ];
  return (
    <ul className="grid gap-4">
      {items.map((it) => (
        <li key={it.title} className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-50">
            <it.icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold">{it.title}</p>
            <p className="text-sm text-neutral-700">{it.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}



function UseCaseCard({ title, bullets, icon }: { title: string; bullets: string[]; icon: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-sky-100">
          {icon}
        </div>
        <h4 className="text-base font-semibold">{title}</h4>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" /> {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 shadow-sm">
      {text}
    </div>
  );
}
