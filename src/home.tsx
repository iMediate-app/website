import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Feather,
  Share2,
  Users,
  Bell,
  FileText,
  Lock,
  Home as HomeIcon,
  PawPrint,
  Lightbulb,
  Heart,
  PlayCircle,
  Plug,
} from "lucide-react";

// Animation
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Shared section wrapper
function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-16 ${className}`}>
      {children}
    </section>
  );
}

// Small icon background pill
function IconPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-sky-100">
      {children}
    </div>
  );
}

// Value card (Clear / Calm / Connected)
function ValueCard({
  Icon,
  title,
  text,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <IconPill>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </IconPill>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-neutral-700">{text}</p>
    </motion.div>
  );
}

// Feature list (data-driven)
function FeatureList() {
  const items: { icon: React.ComponentType<any>; title: string; desc: string }[] = [
    { icon: Users, title: "Shared scheduling", desc: "Plan together with a person who matters." },
    { icon: Bell, title: "Reminders", desc: "Gentle nudges that help, right when you need them." },
    { icon: FileText, title: "Notes", desc: "Keep details, lists, and agreements in one place." },
    { icon: Lock, title: "Secure storage", desc: "Private by default. You stay in control." },
  ];
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Ico, title, desc }) => (
        <li
          key={title}
          className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-50">
            <Ico className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-sm text-neutral-700">{desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Use case card
function UseCaseCard({
  title,
  bullets,
  icon,
}: {
  title: string;
  bullets: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <IconPill>{icon}</IconPill>
        <h4 className="text-base font-semibold">{title}</h4>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

// How it works step card
function StepCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-4 flex items-center gap-3">
        <IconPill>{icon}</IconPill>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Value props: Clear / Calm / Connected */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ValueCard Icon={Sparkles} title="Clear" text="Simple plans. Easy scheduling. No clutter." />
          <ValueCard Icon={Feather} title="Calm" text="Stress-free communication. Balanced days." />
          <ValueCard Icon={Share2} title="Connected" text="One trusted space for people, pets, or projects." />
        </div>
      </Section>

      {/* Chatting is Synchronising (features) */}
      <Section>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight">Chatting is Synchronising</h2>
          <p className="mt-3 text-neutral-700">
            Automagically extract plans, set gentle reminders, keep notes, and store the details you care about.
            All together in one calm place.
          </p>
        </motion.div>
        <div className="mt-10">
          <FeatureList />
        </div>
      </Section>

      {/* Use cases */}
      <Section>
        <h3 className="text-2xl font-semibold tracking-tight">One space. Many ways to feel organized.</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <UseCaseCard
            title="For families"
            bullets={["Kids, pets, home life", "Carpools & activities", "Share updates with ease"]}
            icon={
              <div className="flex items-center gap-2">
                <HomeIcon className="h-5 w-5" aria-hidden="true" />
                <PawPrint className="h-5 w-5" aria-hidden="true" />
              </div>
            }
          />
          <UseCaseCard
            title="For projects"
            bullets={["Ideas & teamwork", "Lightweight planning", "Clear next steps"]}
            icon={<Lightbulb className="h-5 w-5" aria-hidden="true" />}
          />
          <UseCaseCard
            title="For balance"
            bullets={["Self-care reminders", "Protect focus time", "Gentle nudges, no noise"]}
            icon={<Heart className="h-5 w-5" aria-hidden="true" />}
          />
        </div>
      </Section>

      {/* How it works */}
      <section id="howitworks" className="w-full bg-white text-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            How it works
          </motion.h2>
          <p className="mt-2 text-base md:text-lg text-gray-600">Three simple steps to get going.</p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <StepCard
              icon={<PlayCircle className="h-6 w-6" aria-hidden="true" />}
              title="Contact"
              text="Send a WhatsApp message or download the app for free to get started."
            />
            <StepCard
              icon={<Plug className="h-6 w-6" aria-hidden="true" />}
              title="Connect"
              text="Link the calendar you already use and your WhatsApp number (optionally add another person)."
            />
            <StepCard
              icon={<Share2 className="h-6 w-6" aria-hidden="true" />}
              title="Communicate"
              text={
                <>
                  Share plans, send updates, and stay aligned—without the back‑and‑forth.
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Pricing teaser (layout-ready) */}
      <Section id="pricing">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight">Pricing & Plans</h2>
          <p className="mt-3 text-neutral-700">Simple and transparent. Choose what fits you best.</p>
        </motion.div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ValueCard Icon={Lock} title="Free Forever" text="All core features. No credit card required." />
          <ValueCard Icon={Users} title="Pro (Soon)" text="Advanced features and priority support." />
          <ValueCard Icon={Share2} title="Teams & Groups" text="Collaborate with larger groups." />
        </div>
      </Section>
    </div>
  );
}