export default function Projects(){
  const items = [
    {
      title: 'Realtime Chat App',
      desc: 'A full-stack chat platform with WebSocket-powered messaging and auth.',
      tech: ['React','Node','Socket.IO','Tailwind'],
      links: [{ label: 'Live demo', href: '#' }, { label: 'GitHub', href: '#' }]
    },
    {
      title: 'E-commerce Storefront',
      desc: 'Headless commerce UI with product search, cart, and checkout flow.',
      tech: ['Next.js','Stripe','Zustand','Vercel'],
      links: [{ label: 'Case study', href: '#' }]
    },
    {
      title: 'Data Dashboard',
      desc: 'Interactive analytics dashboard with charts and role-based access.',
      tech: ['React','FastAPI','MongoDB','Chart.js'],
      links: [{ label: 'Preview', href: '#' }]
    }
  ];

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white">Projects</h2>
          <p className="mt-2 text-blue-200/80">Selected work showing craft, polish, and real-world problem solving.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <article key={i} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition hover:border-blue-400/30">
              <div className="aspect-video w-full rounded-xl bg-slate-800/60 border border-white/10 mb-4 overflow-hidden">
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.25),transparent_60%)]"/>
              </div>
              <h3 className="text-white font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-blue-200/80 leading-relaxed">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t, j) => (
                  <span key={j} className="text-xs rounded-full bg-white/10 text-blue-100 px-2 py-1 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                {p.links.map((l, k) => (
                  <a key={k} href={l.href} target="_blank" rel="noreferrer" className="text-sm text-blue-300 hover:text-white underline/30 hover:underline">{l.label}</a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
