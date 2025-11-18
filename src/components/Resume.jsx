export default function Resume(){
  const items = [
    { label: 'Role', value: 'Frontend Engineer' },
    { label: 'Location', value: 'Remote / Open to relocate' },
    { label: 'Experience', value: '3+ years' },
  ];

  const experience = [
    {
      role: 'Frontend Engineer',
      company: 'Tech Co.',
      period: '2022 — Present',
      bullets: [
        'Built and shipped interactive dashboards used by 5k+ users',
        'Led component library migration to Tailwind and Radix',
        'Collaborated with backend to integrate real-time features'
      ]
    },
    {
      role: 'Web Developer',
      company: 'Studio',
      period: '2020 — 2022',
      bullets: [
        'Delivered marketing sites with 90+ Lighthouse scores',
        'Set up CI and automated visual regression tests',
        'Mentored junior devs on modern React patterns'
      ]
    }
  ];

  return (
    <section id="resume" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white">Resume</h2>
          <p className="mt-2 text-blue-200/80">A concise overview of experience and strengths. Downloadable PDF coming soon.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-medium">Summary</h3>
            <ul className="mt-3 grid gap-2 text-sm text-blue-200/80">
              {items.map((i, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span className="text-blue-300/80">{i.label}</span>
                  <span className="text-white">{i.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-medium">Experience</h3>
            <div className="mt-4 grid gap-6">
              {experience.map((e, i) => (
                <div key={i} className="">
                  <div className="flex flex-wrap items-end gap-3">
                    <h4 className="text-white font-semibold tracking-tight">{e.role}</h4>
                    <span className="text-blue-200/70">— {e.company}</span>
                    <span className="ml-auto text-sm text-blue-300/60">{e.period}</span>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-blue-200/80 space-y-1">
                    {e.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
