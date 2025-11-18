export default function About(){
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-white">About</h2>
            <p className="mt-2 text-blue-200/80">A little background, strengths, and what I enjoy.</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-medium">Biography</h3>
              <p className="mt-2 text-blue-200/80 text-sm leading-relaxed">
                I'm Joshua, a developer who loves creating clean, intuitive, and performant user experiences. I focus on modern web tech and ship with care.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-medium">Skills</h3>
              <ul className="mt-2 text-blue-200/80 text-sm grid grid-cols-2 gap-2">
                <li>React</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>FastAPI</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-medium">Education</h3>
              <p className="mt-2 text-blue-200/80 text-sm">B.S. in Computer Science — Relevant coursework in algorithms, databases, and UI/UX.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-medium">Hobbies</h3>
              <p className="mt-2 text-blue-200/80 text-sm">Photography, tinkering with 3D scenes, and weekend biking.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
