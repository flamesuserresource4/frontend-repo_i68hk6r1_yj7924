import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Available for work
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Joshua P Deregla
            </h1>
            <p className="mt-4 text-blue-200/90 text-lg leading-relaxed">
              Building thoughtful, modern web experiences. I craft interactive, fast, and accessible apps with React, TypeScript, and Python.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/30 ring-1 ring-white/10 hover:bg-blue-500 transition">Contact me</a>
              <a href="#resume" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-blue-100 ring-1 ring-white/10 hover:bg-white/20 transition">View resume</a>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative h-[380px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
