import Link from 'next/link';

const programs = [
  {
    title: 'B.Tech in AI & Data Science',
    duration: '4 years',
    overview:
      'Foundations of CS, machine learning, data engineering, MLOps, and responsible AI. Project-centric with a capstone every term.'
  },
  {
    title: 'Diploma in Robotics & Automation',
    duration: '2 years',
    overview:
      'Robotics fundamentals, embedded systems, control theory, ROS, and industrial automation with lab-heavy coursework.'
  },
  {
    title: 'PG Certificate in Generative AI',
    duration: '6 months',
    overview:
      'LLMs, prompt engineering, retrieval augmented generation, evaluation, and deployment on modern stacks.'
  }
];

export default function ProgramsPage() {
  return (
    <div className="container-prose py-16">
      <h1 className="text-3xl font-bold mb-6">Programs</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((p) => (
          <div key={p.title} className="card p-6 flex flex-col">
            <div className="text-lg font-semibold mb-1">{p.title}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-3">{p.duration}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300 flex-1">{p.overview}</div>
            <Link href="/contact" className="btn-ghost mt-6 w-fit">Request syllabus</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
