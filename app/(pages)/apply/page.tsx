export default function ApplyPage() {
  return (
    <div className="container-prose py-16">
      <div className="card max-w-2xl mx-auto p-8">
        <h1 className="text-2xl font-semibold mb-2">Apply to IIFS</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6">Submit your details and we will reach out with next steps.</p>
        <form className="grid gap-4">
          <div>
            <label className="block text-sm mb-1">Full name</label>
            <input className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-white/[0.06] px-3 py-2 outline-none focus:ring-2 focus:ring-primary-500" placeholder="Your name"/>
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-white/[0.06] px-3 py-2 outline-none focus:ring-2 focus:ring-primary-500" placeholder="you@example.com"/>
          </div>
          <div>
            <label className="block text-sm mb-1">Program</label>
            <select className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-white/[0.06] px-3 py-2 outline-none focus:ring-2 focus:ring-primary-500">
              <option>B.Tech in AI & Data Science</option>
              <option>Diploma in Robotics & Automation</option>
              <option>PG Certificate in Generative AI</option>
            </select>
          </div>
          <button type="button" className="btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
