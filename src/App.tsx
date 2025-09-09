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
  Instagram,
  Linkedin,
  MessageSquareText,
  Plug,
  CheckCircle2,
  PlusCircle,
  Shield,
  CalendarPlus,
  Images,
  XCircle,
} from "lucide-react";

// StepCard component for How It Works section
function StepCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-sky-100">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function App() {
  const [showCantSay, setShowCantSay] = React.useState(false);
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


      {/* Hero */}
      <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2 md:py-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Clear. Calm. Connected.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-neutral-700">
            A simple way to organize and share what matters most.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-start gap-3 w-full justify-start">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B31613070691&text=I%27m+saying+hello+to+iMediate%27s+Automagic%21&type=phone_number&app_absent=0"
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-md flex items-center gap-2 justify-start"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor" className="text-white"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.37L4 29l7.824-2.18C13.5 27.606 14.734 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.13 0-2.244-.188-3.293-.558l-.235-.08-4.646 1.294 1.294-4.646-.08-.235C6.188 17.244 6 16.13 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.709c-.293-.146-1.73-.855-1.997-.951-.267-.098-.461-.146-.656.146-.195.293-.752.951-.922 1.146-.17.195-.341.219-.634.073-.293-.146-1.236-.455-2.357-1.451-.87-.776-1.457-1.732-1.63-2.025-.17-.293-.018-.45.128-.595.132-.132.293-.341.439-.512.146-.17.195-.293.293-.488.098-.195.049-.366-.024-.512-.073-.146-.656-1.586-.899-2.172-.237-.57-.478-.492-.656-.5-.17-.007-.366-.009-.561-.009-.195 0-.512.073-.78.366-.267.293-1.02.996-1.02 2.427 0 1.43 1.04 2.812 1.186 3.007.146.195 2.048 3.13 5.07 4.267.709.244 1.262.39 1.694.499.712.181 1.36.156 1.872.095.571-.067 1.73-.707 1.976-1.39.244-.683.244-1.268.171-1.39-.073-.122-.268-.195-.561-.341z"/></svg>
              Say hello to calendar.iM
            </a>
            <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://apps.apple.com/app/imediate/id6744072106"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium shadow-sm transition hover:shadow-md justify-start"
                aria-label="Download on the App Store"
              >
                <Apple className="h-5 w-5" />
                <span>App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.imediate"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium shadow-sm transition hover:shadow-md justify-start"
                aria-label="Get it on Google Play"
              >
                <PlayCircle className="h-5 w-5" />
                <span>Google Play</span>
              </a>
            </div>
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

      {/* About Section */}
  <section id="about" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-4xl font-bold tracking-tight mb-2 mt-16 text-center">About Us</h2>
        <p className="text-xl text-neutral-700 mb-8 text-center">We are an Amsterdam based bootstrapped start-up. We are clear, calm, and connected. We are calendar.iM.</p>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h4 className="text-2xl font-semibold tracking-tight mb-8 mt-8 text-left w-full">Meet the Team</h4>
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Team grid */}
            <div className="flex-1 flex flex-col gap-6 justify-center">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm">
                  <img
                    src="images/thomas.jpg"
                    alt="TD, Founder"
                    className="max-w-[100px] max-h-[100px] w-full h-auto aspect-square object-cover rounded-2xl border border-neutral-200 bg-white shadow"
                  />
                  <div className="flex-1">
                    <div className="font-bold">TD, Founder</div>
                    <div className="text-neutral-700 text-sm">Idea machine. Sees the matrix.</div>
                    <div className="flex gap-2 mt-2">
                      <a href="https://www.instagram.com/tdr1chardson" aria-label="TD Instagram" className="text-neutral-400 hover:text-emerald-600"><Instagram className="h-5 w-5" /></a>
                      <a href="https://www.linkedin.com/in/bringingpeopletogether/" aria-label="TD LinkedIn" className="text-neutral-400 hover:text-emerald-600"><Linkedin className="h-5 w-5" /></a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm">
                  <img
                    src="images/drue.jpg"
                    alt="Drue, Co-Founder"
                    className="max-w-[100px] max-h-[100px] w-full h-auto aspect-square object-cover rounded-2xl border border-neutral-200 bg-white shadow"
                  />
                  <div className="flex-1">
                    <div className="font-bold">Drue, Co-Founder</div>
                    <div className="text-neutral-700 text-sm">In-house hippy. Keeps us grounded.</div>
                    <div className="flex gap-2 mt-2">
                      <a href="https://www.instagram.com/druebird_/" aria-label="Drue Instagram" className="text-neutral-400 hover:text-emerald-600"><Instagram className="h-5 w-5" /></a>
                      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" aria-label="Drue LinkedIn" className="text-neutral-400 hover:text-emerald-600"><Linkedin className="h-5 w-5" /></a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm">
                  <img
                    src="images/cedric.jpg"
                    alt="Cedric, Web Guy"
                    className="max-w-[100px] max-h-[100px] w-full h-auto aspect-square object-cover rounded-2xl border border-neutral-200 bg-white shadow"
                  />
                  <div className="flex-1">
                    <div className="font-bold">Cedric, Web Guy</div>
                    <div className="text-neutral-700 text-sm">Delivering efficiency, changing lives.</div>
                    <div className="flex gap-2 mt-2">
                      <a href="https://www.instagram.com/zaetrik/" aria-label="Cedric Instagram" className="text-neutral-400 hover:text-emerald-600"><Instagram className="h-5 w-5" /></a>
                      <a href="https://www.linkedin.com/in/cedric-dose/" aria-label="Cedric LinkedIn" className="text-neutral-400 hover:text-emerald-600"><Linkedin className="h-5 w-5" /></a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm">
                  <img
                    src="images/rody.jpg"
                    alt="Rody, The App Dev"
                    className="max-w-[100px] max-h-[100px] w-full h-auto aspect-square object-cover rounded-2xl border border-neutral-200 bg-white shadow"
                  />
                  <div className="flex-1">
                    <div className="font-bold">Rody, The App Dev</div>
                    <div className="text-neutral-700 text-sm">Makes it all happen (between breaks).</div>
                    <div className="flex gap-2 mt-2">
                      <a href="https://www.instagram.com/rodyyaacoub/" aria-label="Rody Instagram" className="text-neutral-400 hover:text-emerald-600"><Instagram className="h-5 w-5" /></a>
                      <a href="https://www.linkedin.com/in/rody-yaacoub/" aria-label="Rody LinkedIn" className="text-neutral-400 hover:text-emerald-600"><Linkedin className="h-5 w-5" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* About/mission content */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-neutral-700 mb-4">Our team is a patchwork of passports and personalities: from Lebanon to Arkansas, from Cologne canals to Cambridge cows.</p>

              <p className="text-neutral-700 mb-6 font-semibold">We created a simple way to organize and share what matters most.</p>
              
              <p className="text-neutral-700 mb-4">We are migrants, multilinguals, and multi-talented misfits who believe that communication should build bridges, not walls.</p>

              <p className="text-neutral-700 mb-6 font-semibold">Being Clear. Remaining Calm. Staying Connected.</p>

              <p className="text-neutral-700 mb-4">We’re not just building an app; we’re creating online safe spaces where conversations stay healthy, people stay connected, and potential is unlocked.</p> 
                           
              
              <p className="text-neutral-700 mb-6 font-semibold">You deserve a simple way to organise and share what matters most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howitworks" className="w-full bg-white text-gray-900">
  <div className="mx-auto max-w-7xl px-6 py-16">
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            How it works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mt-2 text-base md:text-lg text-gray-600"
          >
            
          </motion.p>

          {/* 3-step grid */}
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
                  Export <code className="font-mono text-sm">.ics</code> and share events via WhatsApp, Email, AirDrop, Messages, Telegram, Signal, Messenger, and more.
                </>
              }
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center gap-3 w-full">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B31613070691&text=I%27m+saying+hello+to+iMediate%27s+Automagic%21&type=phone_number&app_absent=0"
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-md flex items-center gap-2 justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor" className="text-white"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.37L4 29l7.824-2.18C13.5 27.606 14.734 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.13 0-2.244-.188-3.293-.558l-.235-.08-4.646 1.294 1.294-4.646-.08-.235C6.188 17.244 6 16.13 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.709c-.293-.146-1.73-.855-1.997-.951-.267-.098-.461-.146-.656.146-.195.293-.752.951-.922 1.146-.17.195-.341.219-.634.073-.293-.146-1.236-.455-2.357-1.451-.87-.776-1.457-1.732-1.63-2.025-.17-.293-.018-.45.128-.595.132-.132.293-.341.439-.512.146-.17.195-.293.293-.488.098-.195.049-.366-.024-.512-.073-.146-.656-1.586-.899-2.172-.237-.57-.478-.492-.656-.5-.17-.007-.366-.009-.561-.009-.195 0-.512.073-.78.366-.267.293-1.02.996-1.02 2.427 0 1.43 1.04 2.812 1.186 3.007.146.195 2.048 3.13 5.07 4.267.709.244 1.262.39 1.694.499.712.181 1.36.156 1.872.095.571-.067 1.73-.707 1.976-1.39.244-.683.244-1.268.171-1.39-.073-.122-.268-.195-.561-.341z"/></svg>
              Say hello to calendar.iM
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

          {/* New container */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-xl bg-white p-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-sky-100">
                  <MessageSquareText className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">iM‑ing is back!</h3>
                <p className="text-gray-700">
                  Text like normal (photos/videos too) through the iM network. When you send <span className="font-semibold">“who, what, when”</span>, we draft the event right in chat. Approve it to add to your calendar. You can also use iMediate as a simple notepad for reminders.
                </p>
              </div>
            </div>

            {/* Highlight strip */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <Shield className="mt-0.5 h-5 w-5" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-amber-900">
                All iMs are sent through our <span className="font-semibold">patent‑pending Shield.iM™</span> technology. Keeping your online space focused on our mission: empowering people and simplifying scheduling by remaining clear, calm and connected.
              </p>
            </div>
          </motion.div>

          {/* Examples */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              {/* Toggle Tabs */}
              <div className="mb-4 flex gap-2">
                  <button
                    className={`flex-1 px-3 py-1 rounded-full text-sm font-semibold transition ${!showCantSay ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}
                    onClick={() => setShowCantSay(false)}
                  >
                    Examples to make Automagic! 
                  </button>
                  <button
                    className={`flex-1 px-3 py-1 rounded-full text-sm font-semibold transition ${showCantSay ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500'}`}
                    onClick={() => setShowCantSay(true)}
                  >
                    Shield.iM will help avoid
                  </button>
              </div>
              {/* Tab Content */}
              {!showCantSay ? (
                <>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5" /> <span>Hi Taylor, Luna has dentist Fri 5:30–16:15 at Tandartspraktijk in Jordaan. Can you take her? Dentist office number: +31 6 9876 5432.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5" /> <span>Wana go to the zoo on Thurday? Meeting 09:30 until 15:30 at the Artis, you in? I'd say bring lunch and a sun hat.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5" /> <span>You fancy meeting this Tuesday eveing? There's an event at OBS De Regenboog. Fancy going?</span></li>
                  </ul>
                </>
              ) : (
                <>
                  <ul className="space-y-3 text-gray-500">
                    <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-red-300" /> <span>“You never listen to me.”</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-red-300" /> <span>“You’re overreacting.”</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-red-300" /> <span>“This is all your fault.”</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-red-300" /> <span>“If you loved me, you’d do what I ask.”</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-red-300" /> <span>“You always make everything about you.”</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-red-300" /> <span>“After all I’ve done for you…”</span></li>
                  </ul>
                </>
              )}
            </motion.div>

            {/* Why people love it */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-2">
                <CalendarPlus className="h-5 w-5" aria-hidden="true" />
                <h3 className="text-lg font-semibold">Why people love it</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2"><PlusCircle className="h-5 w-5" /> <span>No new workflow! Stay in WhatsApp.</span></li>
                <li className="flex items-start gap-2"><PlusCircle className="h-5 w-5" /> <span>One shared source of truth in your calendar.</span></li>
                <li className="flex items-start gap-2"><PlusCircle className="h-5 w-5" /> <span>Calm and organized, connected correctly.</span></li>
                <li className="flex items-start gap-2"><PlusCircle className="h-5 w-5" /> <span>Turns WhatsApp messages into complete calendar events.</span></li>
                <li className="flex items-start gap-2"><PlusCircle className="h-5 w-5" /> <span>Private by default; your data stays on-device, always.</span></li>
                <li className="flex items-start gap-2"><PlusCircle className="h-5 w-5" /> <span>Always secure, encrypted and anonomised.</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

          {/* Pricing Section */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Pricing & Plans</h2>
          <p className="mt-3 text-neutral-700">
            Simple, transparent pricing for everyone. Choose the plan that fits your needs and unlock all features.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ValueCard
            Icon={Shield}
            title="Free Forever"
            text="All core features. No credit card required. Perfect for individuals and families starting out."
          />
          <ValueCard
            Icon={PlusCircle}
            title="Pro Plan"
            text="Advanced features for power users and professionals. Priority support and more. Coming soon!"
          />
          <ValueCard
            Icon={Users}
            title="Teams & Groups"
            text="Collaborate with larger groups, manage permissions, and get custom onboarding. Contact us for details."
          />
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">What's included (Free):</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Unlimited events & reminders</li>
              <li>WhatsApp, Email, and Calendar integration</li>
              <li>Secure, private storage</li>
              <li>All platforms: iOS, Android, Web</li>
              <li>Basic support</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Pro Features (Coming soon):</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Advanced automations</li>
              <li>Custom reminders & templates</li>
              <li>Priority support</li>
              <li>Early access to new features</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Teams & Groups:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Group management tools</li>
              <li>Shared calendars & permissions</li>
              <li>Custom onboarding & support</li>
              <li>Contact us for pricing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 rounded-3xl bg-white p-8 shadow-sm">
            <h4 className="text-2xl font-semibold tracking-tight mb-4 text-center">Careers at Calendar.iM</h4>
            <p className="text-neutral-700 mb-4 text-center">Our Mission: Empowering people, simplifying scheduling.</p>
            <p className="text-neutral-700 mb-4 text-center">With us, you’ll get hands-on experience, real responsibility, and the chance to help shape the future of how people communicate.</p>
            <p className="text-neutral-700 mb-4 text-center">Think you can bring some fresh energy to the team?</p>
            <div className="flex justify-center mb-8">
              <a
                href="mailto:info@imediate.foundation?subject=I%E2%80%99d%20like%20to%20help"
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 text-base font-medium text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-md"
              >
                <span role="img" aria-label="envelope">📧</span> Drop us a line
              </a>
            </div>
          </div>
          {/* Duplicated container */}
          <div className="flex-1 rounded-3xl bg-white p-8 shadow-sm">
            <h4 className="text-2xl font-semibold tracking-tight mb-4 text-center">Contact Us</h4>
            <div className="mb-4 text-center">
              <p className="text-neutral-700 text-lg ">
                <a href="tel:+31622267448" className="hover:text-emerald-600 underline">+31 6 222 67 448</a>
              </p>
              <p className="text-neutral-700 text-lg ">
                dm on Instagram - <a href="https://www.instagram.com/imediate.im" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 underline">@iMediate,iM</a>
              </p>
            </div>
              <div className="mb-4 flex justify-center">
                <iframe
                  title="Herengracht 449A, 1017 BR Amsterdam"
                  src="https://www.google.com/maps?q=Herengracht+449A,+1017+BR+Amsterdam&output=embed"
                  className="w-full rounded-xl border-0"
                  height="160"
                  allowFullScreen
                ></iframe>
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
              <PlayCircle className="h-5 w-5" /> Free for everyone
            </a>
          </div>
          <div className="mt-6">
            <span className="block text-lg font-semibold">Download today for a better tomorrow.</span>
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
  { icon: Bell, title: "Reminders", desc: "Gentle nudges that help, at the right moment for you." },
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
