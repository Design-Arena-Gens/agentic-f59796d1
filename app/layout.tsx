import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IIFS — Indian Institute of Future Skills',
  description:
    'IIFS is reimagining Indian education with industry-aligned, project-first learning in AI, Robotics, and Emerging Tech.',
  openGraph: {
    title: 'IIFS — Indian Institute of Future Skills',
    description:
      'Reimagining Indian education with industry-aligned, project-first learning in AI, Robotics, and Emerging Tech.',
    url: 'https://agentic-f59796d1.vercel.app',
    siteName: 'IIFS',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IIFS — Indian Institute of Future Skills',
    description:
      'Reimagining Indian education with industry-aligned, project-first learning in AI, Robotics, and Emerging Tech.'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

function ThemeToggle() {
  return (
    <button
      className="btn-ghost text-sm"
      onClick={() => {
        const root = document.documentElement;
        const isDark = root.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }}
    >
      Toggle theme
    </button>
  );
}

function ClientThemeScript() {
  const script = `(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.documentElement.classList.add('dark');
  })();`;
  // eslint-disable-next-line @next/next/no-sync-scripts
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ClientThemeScript />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
          <nav className="container-prose flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">I</span>
              <span>IIFS</span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/programs" className="hover:text-primary-700 dark:hover:text-primary-300">Programs</Link>
              <Link href="/admissions" className="hover:text-primary-700 dark:hover:text-primary-300">Admissions</Link>
              <Link href="/resources" className="hover:text-primary-700 dark:hover:text-primary-300">Resources</Link>
              <Link href="/about" className="hover:text-primary-700 dark:hover:text-primary-300">About</Link>
              <Link href="/contact" className="hover:text-primary-700 dark:hover:text-primary-300">Contact</Link>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/apply" className="btn-primary hidden md:inline-flex">Apply Now</Link>
              {/* @ts-expect-error Server Component boundary with inline client */}
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 dark:border-slate-800">
          <div className="container-prose py-10 text-sm text-slate-600 dark:text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} IIFS — Indian Institute of Future Skills</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-primary-700 dark:hover:text-primary-300">Privacy</Link>
              <Link href="/terms" className="hover:text-primary-700 dark:hover:text-primary-300">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
