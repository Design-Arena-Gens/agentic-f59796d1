import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
        <div className="container-prose py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-white/[0.03] px-3 py-1 text-xs text-slate-600 dark:text-slate-300 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Admissions Open 2025 — Limited seats
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Indian Institute of Future Skills
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl">
                A new model for Indian education. Industry-aligned, project-first programs in AI, Robotics, and Emerging Tech — designed with leaders from top companies.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/apply" className="btn-primary">Apply Now</Link>
                <Link href="/programs" className="btn-ghost">Explore Programs</Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 text-center">
                <div className="card p-5">
                  <div className="text-2xl font-semibold">95%</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Placement-ready learners</div>
                </div>
                <div className="card p-5">
                  <div className="text-2xl font-semibold">50+ </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Industry partners</div>
                </div>
                <div className="card p-5">
                  <div className="text-2xl font-semibold">Project-first</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Learning approach</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 bg-gradient-to-tr from-primary-200/60 to-emerald-200/60 blur-3xl rounded-full" />
              <div className="card p-4">
                <div className="grid grid-cols-2 gap-4">
                  {['AI Studio', 'Robotics Lab', 'XR Lab', 'Makerspace'].map((label) => (
                    <div key={label} className="rounded-xl bg-gradient-to-br from-white/80 to-white/40 dark:from-white/[0.07] dark:to-white/[0.03] p-6 border border-white/40 dark:border-white/[0.08]">
                      <div className="h-24 w-full rounded-lg bg-slate-200 dark:bg-slate-800 mb-3" />
                      <div className="text-sm font-medium">{label}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">State-of-the-art facility</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-prose py-20">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Programs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            title: 'B.Tech in AI & Data Science',
            desc: 'A 4-year program focused on AI, ML, data engineering, and MLOps.'
          }, {
            title: 'Diploma in Robotics & Automation',
            desc: 'Hands-on robotics, embedded systems, control theory, and industrial automation.'
          }, {
            title: 'PG Certificate in Generative AI',
            desc: '6-month intensive on LLMs, prompt engineering, RAG, and deployments.'
          }].map((p) => (
            <div key={p.title} className="card p-6 flex flex-col">
              <div className="text-lg font-semibold mb-2">{p.title}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300 flex-1">{p.desc}</div>
              <Link href="/programs" className="btn-ghost mt-6 w-fit">View curriculum</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary-50 to-emerald-50 dark:from-slate-900 dark:to-slate-900 py-20">
        <div className="container-prose grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Built with industry</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">Curricula co-created with engineers and researchers from top Indian and global companies. Students work on real datasets and ship projects end-to-end.</p>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {['Capstone every term', 'Internships built-in', 'Mentors from industry', 'Hackathons & labs'].map(i => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <div className="aspect-[16/10] w-full rounded-xl bg-slate-200 dark:bg-slate-800" />
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-3">A glimpse into student projects and labs</div>
          </div>
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="card p-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Admissions 2025 now open</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6">Applications are reviewed on a rolling basis. Scholarships available for meritorious students.</p>
          <Link href="/apply" className="btn-primary">Start your application</Link>
        </div>
      </section>
    </div>
  );
}
