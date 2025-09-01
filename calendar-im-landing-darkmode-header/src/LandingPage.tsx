  import React, { useEffect, useState } from 'react'
  import { motion } from 'framer-motion'
  import { Users, Heart, ShieldCheck, Calendar, Home, Briefcase, Smile, Menu, X, Lock } from 'lucide-react'
  import { Button } from './components/ui/button'
  import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
  const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
  const sectionFade = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }
  type ThemeMode = 'system'|'light'|'dark'
  function useThemeMode(){ const [mode,setMode]=useState<ThemeMode>(()=> (localStorage.getItem('theme-mode') as ThemeMode)||'system'); useEffect(()=>{ const root=document.documentElement; const apply=(m:ThemeMode)=>{ const dark = m==='dark'||(m==='system'&& window.matchMedia('(prefers-color-scheme: dark)').matches); root.classList.toggle('dark', !!dark) }; apply(mode); const media=window.matchMedia('(prefers-color-scheme: dark)'); const onChange=()=> mode==='system'&&apply('system'); media.addEventListener('change', onChange); return ()=> media.removeEventListener('change', onChange)},[mode]); useEffect(()=>{ localStorage.setItem('theme-mode', mode)},[mode]); return {mode,setMode} }
  export default function LandingPage() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { mode, setMode } = useThemeMode();
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 dark:text-slate-100 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/70 border-b border-slate-100 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <a href="https://imediate.im" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" aria-label="imediate.im home">
            <svg className="h-6 w-6" viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><path transform="translate(0)" d="m0 0h2048v2048h-2048z" fill="#101010"/><path transform="translate(791,652)" d="m0 0h251l2 2 16 84 24 125 25 131 15 77 13 69 8 42 4 25 3 28 1 18v33l-1 14-1 4 4-1 13-37 12-29 8-19 7-15 16-33 193-386 9-19 10-19 15-30 9-19 18-36 6-9h256l2 3 3 30v10l-10 4-94 27-2 1-19 120-16 100-14 88-17 106-9 57-20 126-7 42v3l33 11 41 13 21 7 1 3-12 29-4 10-2 2h-308l-1-2-2-29v-12l7-3 43-13 50-15h3l6-37 15-92 19-118 18-112 20-122 12-65 17-83 1-4-5 2-11 28-15 36-11 25-12 27-15 32-11 24-10 19-23 45-14 27-17 33-10 19-15 29-17 33-10 19-21 41-10 19-18 35-10 19-18 35-10 19-20 39-10 19-12 23-17 33-10 19-5 8h-64l-3-9-22-107-24-116-28-135-24-117-12-58-10-57-8-55-5-39-1-14-4 1-5 42-6 52-10 72-13 81-22 140-15 94-16 102-7 43v5l36 12 53 17 6 3-1 5-15 37-1 1h-258l-2-5-2-38 7-3 70-21 26-8 4-20 10-64 27-169 14-88 13-82 11-70 24-150-11-3-36-12-46-15 1-7 10-27 4-9z" fill="#FFFFFF"/><path transform="translate(447,851)" d="m0 0h33l19 3 15 5 13 7 12 11 6 7 8 16 4 15 2 18v13l-5 38-17 97-14 82-32 184-3 17v6l8 2 10 1h13l17-3 16-6 18-10 14-11 7-6 2-3 5 1 18 18-2 6-7 16-10 17-10 13-11 12-8 8-15 11-16 9-15 6-17 5-17 3-12 1h-21l-21-3-17-5-14-7-9-7-7-7-7-10-7-17-3-13-1-9v-23l4-32 21-122 13-74 28-161 5-29v-3l-16-3h-15l-16 3-13 5-14 7-16 12-10 9-5 4-2-1v-2h-2l-16-16 1-6 7-16 11-18 10-13 19-19 17-12 16-8 12-5 19-5z" fill="#FFFFFF"/><path transform="translate(519,588)" d="m0 0h20l15 3 12 5 11 6 11 9 7 8 9 14 6 16 2 9v26l-5 18-8 16-11 13-8 7-14 8-13 5-13 3h-21l-17-4-16-7-13-10-8-8-7-10-7-14-4-14-1-6v-20l4-17 7-16 10-13 10-10 13-8 12-5z" fill="#FFFFFF"/></svg>
            <span className="font-semibold tracking-tight">calendar.iM</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-slate-700 dark:text-slate-300">
            <a href="#value" className="hover:text-sky-600 dark:hover:text-sky-400">Why calendar.iM</a>
            <a href="#features" className="hover:text-sky-600 dark:hover:text-sky-400">Features</a>
            <a href="#usecases" className="hover:text-sky-600 dark:hover:text-sky-400">Use Cases</a>
            <a href="#security" className="hover:text-sky-600 dark:hover:text-sky-400">Trust & Security</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">Log in</Button>
            <a
              href="https://wa.me/+31613070691?text=I%27m+saying+hello+to+iMediate%27s+Automagic%21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-2xl">Get started</Button>
            </a>
            <div className="ml-2 inline-flex rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <button onClick={() => setMode('system')} className="px-3 py-1.5 text-xs hover:bg-slate-100 dark:hover:bg-slate-800" title="System">🖥️</button>
              <button onClick={() => setMode('light')} className="px-3 py-1.5 text-xs hover:bg-slate-100 dark:hover:bg-slate-800" title="Light">☀️</button>
              <button onClick={() => setMode('dark')} className="px-3 py-1.5 text-xs hover:bg-slate-100 dark:hover:bg-slate-800" title="Dark">🌙</button>
            </div>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
            <nav className="px-4 py-4 grid gap-4 text-slate-700 dark:text-slate-300">
              <a href="#value" onClick={() => setMobileOpen(false)}>Why calendar.iM</a>
              <a href="#features" onClick={() => setMobileOpen(false)}>Features</a>
              <a href="#usecases" onClick={() => setMobileOpen(false)}>Use Cases</a>
              <a href="#security" onClick={() => setMobileOpen(false)}>Trust & Security</a>
              <div className="flex gap-2 pt-2">
                {/* Log in button hidden on mobile */}
                <span className="hidden"></span>
                <a
                  href="https://wa.me/+31613070691?text=I%27m+saying+hello+to+iMediate%27s+Automagic%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="flex-1 rounded-2xl">Get started</Button>
                </a>
              </div>
              <div className="inline-flex rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mt-2">
                <button onClick={() => setMode('system')} className="px-3 py-1.5 text-xs hover:bg-slate-100 dark:hover:bg-slate-800">🖥️ System</button>
                <button onClick={() => setMode('light')} className="px-3 py-1.5 text-xs hover:bg-slate-100 dark:hover:bg-slate-800">☀️ Light</button>
                <button onClick={() => setMode('dark')} className="px-3 py-1.5 text-xs hover:bg-slate-100 dark:hover:bg-slate-800">🌙 Dark</button>
              </div>
            </nav>
          </div>
        )}
      </header>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-sky-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            <h1 className="text-5xl font-bold tracking-tight mb-4">Clear. Calm. Connected.</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-prose mb-6">A simple way to organize and share what matters most.</p>
            <div className="mt-8 flex gap-4">
              <div className="flex flex-col items-start gap-4">
                <a
                  href="https://wa.me/+31613070691?text=I%27m+saying+hello+to+iMediate%27s+Automagic%21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="rounded-2xl">Start with calendar.iM</Button>
                </a>
                <div className="flex space-x-4">
                  {/* App Store */}
                  <a href="https://apps.apple.com/app/imediate/id6744072106" target="_blank" rel="noopener">
                    <img
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="Download on the App Store"
                      className="h-12"
                    />
                  </a>
                  {/* Play Store */}
                  <a href="https://play.google.com/store/apps/details?id=com.imediate" target="_blank" rel="noopener">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Get it on Google Play"
                      className="h-12"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="rounded-3xl bg-gradient-to-tr from-sky-100 to-indigo-100 dark:from-slate-800 dark:to-slate-700 h-80 flex items-center justify-center shadow-inner relative overflow-hidden">
              <img
                src="https://imediate-app.github.io/website/images/HIW_10.jpg"
                alt="People, pets, and projects connected"
                className="object-cover w-full h-full absolute inset-0 opacity-90"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <motion.section id="value" className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionFade}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why calendar.iM?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Calendar className="h-6 w-6 text-sky-500" />Clear</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Simple plans. Easy scheduling. No clutter.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Smile className="h-6 w-6 text-green-500" />Calm</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Stress-free communication. Balanced days.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Users className="h-6 w-6 text-indigo-500" />Connected</CardTitle>
              </CardHeader>
              <CardContent>
                <p>One trusted space for people, pets, and projects.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section id="features" className="py-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 border-t border-slate-100 dark:border-slate-800" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionFade}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center mb-12">
            {/* Calendar Previews (mockups) */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="w-40 h-72 bg-white dark:bg-slate-800 rounded-2xl shadow-lg flex items-center justify-center border border-slate-100 dark:border-slate-700 overflow-hidden">
                <img
                  src="https://imediate-app.github.io/website/images/HIW_7.jpg"
                  alt="Mobile Calendar Preview 1"
                  className="object-cover w-full h-full"
                  style={{ objectPosition: 'top center' }}
                />
              </div>
              <div className="w-40 h-72 bg-white dark:bg-slate-800 rounded-2xl shadow-lg flex items-center justify-center border border-slate-100 dark:border-slate-700 overflow-hidden">
                <img
                  src="https://imediate-app.github.io/website/images/HIW_2.jpg"
                  alt="Mobile Calendar Preview 2"
                  className="object-cover w-full h-full"
                  style={{ objectPosition: 'top center' }}
                />
              </div>
              <div className="w-40 h-72 bg-white dark:bg-slate-800 rounded-2xl shadow-lg flex items-center justify-center border border-slate-100 dark:border-slate-700 overflow-hidden">
                <img
                  src="https://imediate-app.github.io/website/images/HIW_3.jpg"
                  alt="Mobile Calendar Preview 3"
                  className="object-cover w-full h-full"
                  style={{ objectPosition: 'top center' }}
                />
              </div>
            </div>
            <ul className="space-y-6 text-lg">
              <li className="flex items-center gap-3"><Calendar className="h-6 w-6 text-sky-500" />Shared scheduling for everyone</li>
              <li className="flex items-center gap-3"><Heart className="h-6 w-6 text-pink-500" />Reminders & notes for what matters</li>
              <li className="flex items-center gap-3"><Lock className="h-6 w-6 text-green-500" />Secure, private storage</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Horizontally Scrolling Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border-t border-slate-100 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore More</h2>
          <div className="overflow-x-auto">
            <div className="flex gap-8 min-w-[1800px] md:min-w-[2400px] pb-2" style={{scrollbarWidth:'thin'}}>
              <div className="flex-shrink-0 w-80 h-96 rounded-3xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-xl font-semibold mb-2">Quick Note</h3>
                <p className="text-slate-600 dark:text-slate-300">Summary of the event.</p>
              </div>
              <div className="flex-shrink-0 w-80 h-96 rounded-3xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-xl font-semibold mb-2">Emergency Contact</h3>
                <p className="text-slate-600 dark:text-slate-300">Name/number for urgent situations.</p>
              </div>
              <div className="flex-shrink-0 w-80 h-96 rounded-3xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-xl font-semibold mb-2">Costs/Fees</h3>
                <p className="text-slate-600 dark:text-slate-300">Any financial obligations.</p>
              </div>
              <div className="flex-shrink-0 w-80 h-96 rounded-3xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-xl font-semibold mb-2">Attire or Equipment</h3>
                <p className="text-slate-600 dark:text-slate-300">Special clothing, gear, or supplies.</p>
              </div>
              <div className="flex-shrink-0 w-80 h-96 rounded-3xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-xl font-semibold mb-2">Reminders</h3>
                <p className="text-slate-600 dark:text-slate-300">Notifications or instructions for preparation.</p>
              </div>
              <div className="flex-shrink-0 w-80 h-96 rounded-3xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-xl font-semibold mb-2">Event Agenda</h3>
                <p className="text-slate-600 dark:text-slate-300">Step-by-step schedule if needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <motion.section id="usecases" className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionFade}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">For every part of your life</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Home className="h-6 w-6 text-sky-500" />For families</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Kids, pets, home life — keep everyone in sync and on time.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Briefcase className="h-6 w-6 text-indigo-500" />For projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Ideas, teamwork, and planning — all in one trusted space.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Heart className="h-6 w-6 text-pink-500" />For balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Self-care, reminders, and personal focus for a balanced life.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Trust & Security Section */}
      <motion.section id="security" className="py-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 border-t border-slate-100 dark:border-slate-800" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionFade}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Safe. Private. Yours.</h2>
          <p className="text-lg mb-6">Your data is always secure and private. We never sell or share your information. Enjoy peace of mind with user-first privacy and secure storage.</p>
        </div>
      </motion.section>

      {/* Footer Banner CTA */}
      <footer className="mt-16 border-t border-slate-100 dark:border-slate-800 bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-slate-950 dark:to-slate-900 py-12">
        <div className="mx-auto max-w-4xl px-4 flex flex-col items-center text-center gap-6">
          <h2 className="text-2xl md:text-3xl font-bold">Bring clarity, calm, and connection to your life.</h2>
          <Button size="lg" className="rounded-2xl">Get calendar.iM</Button>
          <div className="text-sm text-slate-500 dark:text-slate-400 mt-4">&copy; {new Date().getFullYear()} calendar.iM. All rights reserved. &middot; <a href="mailto:hello@imediate.im" className="hover:text-sky-600 dark:hover:text-sky-400">Contact</a></div>
          <div className="flex space-x-4 mt-4">
            {/* App Store */}
            <a href="https://apps.apple.com/app/imediate/id6744072106" target="_blank" rel="noopener">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
            {/* Play Store */}
            <a href="https://play.google.com/store/apps/details?id=com.imediate" target="_blank" rel="noopener">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

  {/* Features Section */}
  <section id="features" className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Why calendar.iM?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Privacy First</CardTitle>
          </CardHeader>
          <CardContent>
            <ShieldCheck className="h-8 w-8 mb-2 text-sky-500" />
            <p>Your data stays yours. We never sell or share your information.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Everyone</CardTitle>
          </CardHeader>
          <CardContent>
            <Users className="h-8 w-8 mb-2 text-sky-500" />
            <p>Perfect for families, teams, and individuals to stay organized together.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Wellbeing Focused</CardTitle>
          </CardHeader>
          <CardContent>
            <Heart className="h-8 w-8 mb-2 text-sky-500" />
            <p>Designed to help you find balance, not just productivity.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="mt-16 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 py-8">
    <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
      <div>&copy; {new Date().getFullYear()} calendar.iM. All rights reserved.</div>
      <div className="flex gap-4">
        <a href="mailto:hello@imediate.im" className="hover:text-sky-600 dark:hover:text-sky-400">Contact</a>
        <a href="https://imediate.im" target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 dark:hover:text-sky-400">About</a>
      </div>
    </div>
  </footer>
