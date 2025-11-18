import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact(){
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white">Contact</h2>
          <p className="mt-2 text-blue-200/80">Let's connect — reach out for collaborations, opportunities, or just to say hi.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <form onSubmit={(e)=>e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <input required placeholder="Your name" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-blue-100 placeholder:text-blue-300/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40"/>
              <input type="email" required placeholder="Email" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-blue-100 placeholder:text-blue-300/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40"/>
              <textarea required rows="5" placeholder="Message" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-blue-100 placeholder:text-blue-300/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40"/>
              <button className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/30 ring-1 ring-white/10 hover:bg-blue-500 transition">Send</button>
            </div>
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-medium">Prefer email or socials?</h3>
            <ul className="mt-4 grid gap-3 text-blue-200/80">
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-blue-300"/> joshua@example.com</li>
              <li className="flex items-center gap-3"><Github className="h-5 w-5 text-blue-300"/> github.com/username</li>
              <li className="flex items-center gap-3"><Linkedin className="h-5 w-5 text-blue-300"/> linkedin.com/in/username</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
