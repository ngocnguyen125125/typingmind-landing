import React, { useState, useEffect } from "react";

const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" fill="none" className="text-accent" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" className="fill-accent/20"/>
        <path d="M9 14h10m-5-5v10" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
      </svg>
    ),
    title: "Organized Chat Management",
    desc: "Folders, pinning, custom names & bulk actions—for powerful conversation control.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" className="text-accent" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" className="fill-accent/20"/>
        <path d="M10 18v-8l8 4-8 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Prompt Library",
    desc: "Save, share, and organize your best prompts. Never write the same prompt twice!",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" className="text-accent" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" className="fill-accent/20"/>
        <path d="M14 6v16M6 14h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Personal AI Agents",
    desc: "Train agents using your data—unlock custom workflows and knowledge.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" className="text-accent" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" className="fill-accent/20"/>
        <path d="M7 21l7-7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="19" cy="14" r="2.5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Internet Access & News",
    desc: "Pull in real-time information and stay current inside your chat workflow.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" className="text-accent" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" className="fill-accent/20"/>
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 8v2m0 8v2m6-6h-2M8 14H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Image Generation",
    desc: "Create, edit, and enhance visuals with cutting-edge AI models natively.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" className="text-accent" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" className="fill-accent/20"/>
        <path d="M7 21L21 7M14 21v-8M7 14h8" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Interactive Artifact Creation",
    desc: "Sketch web UIs, draft docs, or build integrations—right in chat.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" className="text-accent" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" className="fill-accent/20"/>
        <path d="M10 10h8v8h-8z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Multi-Model Support",
    desc: "Switch between ChatGPT, Claude, Gemini, and more—bring your own API keys.",
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Pick Your Model",
    desc: "Instantly switch between GPT-4, Claude, Gemini (and more) using your own API keys.",
    icon: (
      <svg width="40" height="40" fill="none" className="text-accent" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="currentColor" className="opacity-10"/>
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Chat, Create, Organize",
    desc: "Converse with AI, generate images or artifacts, and sort chats using folders or tags.",
    icon: (
      <svg width="40" height="40" fill="none" className="text-accent" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="20" fill="currentColor" className="opacity-10"/>
        <rect x="12" y="18" width="16" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="20" cy="15" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Save Prompts & Agents",
    desc: "Reuse your best ideas and custom agents, accessible anytime.",
    icon: (
      <svg width="40" height="40" fill="none" className="text-accent" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="20" fill="currentColor" className="opacity-10"/>
        <path d="M14 16h12v8a2 2 0 01-2 2H16a2 2 0 01-2-2v-8z" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 16v-4h4v4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Unlock More with Integrations",
    desc: "Combine model powers—pull knowledge, news, and automate your workflow.",
    icon: (
      <svg width="40" height="40" fill="none" className="text-accent" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="20" fill="currentColor" className="opacity-10"/>
        <path d="M26 14h-8s-2 0-2 2 2 2 2 2h4s2 0 2 2-2 2-2 2h-8" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

const INTEGRATIONS = [
  { name: "OpenAI", icon: "/logos/openai.svg" },
  { name: "Anthropic", icon: "/logos/anthropic.svg" },
  { name: "Google Gemini", icon: "/logos/gemini.svg" },
  { name: "Azure OpenAI", icon: "/logos/azure.svg" },
  { name: "Ollama", icon: "/logos/ollama.svg" },
];

const TESTIMONIALS = [
  {
    quote: "TypingMind has completely changed the way I use AI—so much faster and more flexible than ChatGPT's native UI.",
    name: "Sarah L.",
    avatar: "/avatars/avatar1.png",
  },
  {
    quote: "Saved me hours every week. The chat organization and prompt library are game-changers.",
    name: "David K.",
    avatar: "/avatars/avatar2.png",
  },
  {
    quote: "Using my own API keys and switching models instantly is exactly the power-user flow I wanted.",
    name: "Alex P.",
    avatar: "/avatars/avatar3.png",
  },
];

function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Check system preference on initial load
    if (typeof window !== 'undefined') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDark(true);
      }
    }
    
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      aria-label="Toggle dark mode"
      className="p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-700 border"
      onClick={() => setDark((v) => !v)}
    >
      {dark ? (
        // Sun (light mode)
        <svg width="20" height="20" fill="none" className="text-yellow-400" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="4" fill="currentColor" />
          <g stroke="currentColor" strokeWidth={2}>
            <path d="M10 2v2" />
            <path d="M10 16v2" />
            <path d="M18 10h-2" />
            <path d="M4 10H2" />
            <path d="M15.66 15.66l-1.41-1.41" />
            <path d="M6.34 6.34L4.93 4.93" />
            <path d="M15.66 4.34l-1.41 1.41" />
            <path d="M6.34 15.66l-1.41-1.41" />
          </g>
        </svg>
      ) : (
        // Moon (dark mode)
        <svg width="20" height="20" fill="none" className="text-accent" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 10A4 4 0 1 1 10 6a6 6 0 1 0 4 4z" fill="currentColor" />
        </svg>
      )}
    </button>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 text-gray-900 dark:text-gray-100">
      {/* NAVIGATION */}
      <header className="fixed top-0 w-full z-40 bg-white/60 dark:bg-black/40 backdrop-blur supports-backdrop-blur:backdrop-blur border-b border-gray-100 dark:border-gray-900 transition">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* Swap for actual logo SVG */}
            <span className="font-extrabold text-2xl text-accent tracking-tight">TypingMind</span>
          </div>
          <nav className="hidden md:flex gap-8 ml-12 font-medium text-sm items-center">
            <a href="#features" className="hover:text-accent transition-colors">Features</a>
            <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
            <a href="#docs" className="hover:text-accent transition-colors">Docs</a>
            <a href="#signin" className="hover:text-accent transition-colors">Sign In</a>
          </nav>
          <div className="flex items-center gap-3">
            <DarkModeToggle />
            {/* Mobile menu omitted for brevity—add if needed */}
            <a href="#get-started" className="ml-4 bg-accent hover:bg-accent/80 text-white px-4 py-2 font-bold rounded-xl transition shadow-lg shadow-accent/10 hidden md:inline-block">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] pt-36 text-center px-4 overflow-hidden">
        {/* Subtle animated gradient/svg background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/10 via-transparent to-transparent animate-gradient-fade pointer-events-none" />
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Unlock the <span className="text-accent">Full Power of AI Chat</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-200 mx-auto max-w-2xl mb-6 font-medium">
          TypingMind gives you total control and a premium UI to maximize the power of ChatGPT, Claude, Gemini, and more. Organize, customize, and create with speed and flexibility.
        </p>
        <div className="flex flex-col md:flex-row gap-3 justify-center mb-8">
          <a
            href="#get-started"
            className="bg-accent hover:bg-accent/80 transition text-white rounded-xl font-bold shadow-lg shadow-accent/20 py-3 px-8 text-lg"
          >
            Try TypingMind
          </a>
          <a
            href="#demo"
            className="bg-white dark:bg-gray-900/60 border border-accent text-accent dark:text-accent px-8 py-3 rounded-xl font-bold transition hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white shadow"
          >
            See Demo
          </a>
        </div>
        {/* Hero Illustration or Screenshot—swap for animated snippet/UI preview */}
        <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden ring-2 ring-accent ring-opacity-20 shadow-xl shadow-accent/10 mt-6 animate-fade-in">
          <div className="bg-gray-200 dark:bg-gray-800 h-[350px] flex items-center justify-center text-3xl font-semibold text-gray-400 dark:text-gray-700">
            {/* Replace with SVG/animated screenshot */}
            [Product UI Screenshot/Animation Here]
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-extrabold mb-4 text-center">Everything You Need To Master AI Chat</h2>
        <p className="text-lg text-gray-500 dark:text-gray-300 text-center mb-12 max-w-xl mx-auto">
          From smart chat management to custom agents, TypingMind's toolbox makes you more productive, creative, and in control.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-950 rounded-2xl p-7 shadow-lg shadow-accent/5 border border-gray-100 dark:border-gray-900 hover:scale-[1.025] hover:shadow-accent/20 active:scale-[.995] transition group"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-gray-50 dark:bg-gray-950/65 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-8">How TypingMind Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {WORKFLOW_STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-4">{step.icon}</div>
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-base">{step.desc}</p>
                {i < WORKFLOW_STEPS.length - 1 && (
                  <div className="hidden md:block absolute right-0 mt-10 w-8 h-1 bg-accent/20 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS SECTION */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-extrabold mb-6 text-center">All Your Favorite Models—One Powerful UI</h2>
        <p className="mb-8 text-center text-gray-500 dark:text-gray-300">
          Instantly connect to leading AI models and providers.
        </p>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {INTEGRATIONS.map((int, idx) => (
            <div key={idx} className="flex items-center p-3 rounded-xl bg-white dark:bg-gray-900/70 shadow hover:scale-105 transition cursor-pointer">
              {/* Swap for real assets */}
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                {int.name.charAt(0)}
              </div>
              <span className="ml-3 text-lg font-medium">{int.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-b from-accent/10 via-transparent to-transparent py-20 px-4">
        <h2 className="text-3xl font-extrabold text-center mb-8">Loved by Power Users</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center max-w-4xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white dark:bg-gray-900/90 rounded-2xl px-8 py-7 shadow-lg border border-gray-100 dark:border-gray-900 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border-2 border-accent mb-3 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                {t.name.charAt(0)}
              </div>
              <blockquote className="text-lg font-medium italic mb-2 text-gray-700 dark:text-gray-200">
                "{t.quote}"
              </blockquote>
              <span className="text-accent font-bold">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECONDARY CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto bg-accent rounded-2xl p-10 flex flex-col items-center text-white text-center shadow-lg shadow-accent/10">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Supercharge Your AI Workflow?</h2>
          <p className="mb-6 text-lg">Experience TypingMind free. Start organizing, creating, and unlocking more from AI chat—today.</p>
          <a
            href="#get-started"
            className="bg-white hover:bg-gray-200 text-accent px-7 py-3 rounded-xl font-bold shadow-lg text-lg transition"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <span className="font-extrabold text-xl text-accent tracking-tight">TypingMind</span>
            <span className="ml-3 text-gray-400 text-sm">© {new Date().getFullYear()} TypingMind. All rights reserved.</span>
          </div>
          <nav className="flex gap-10 text-sm text-gray-500">
            <a href="#features" className="hover:text-accent transition">Features</a>
            <a href="#pricing" className="hover:text-accent transition">Pricing</a>
            <a href="#docs" className="hover:text-accent transition">Docs</a>
            <a href="#privacy" className="hover:text-accent transition">Privacy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}