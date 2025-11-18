import { Menu, Mail, FileText, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => scrollTo('home')} className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 ring-1 ring-white/20 shadow-lg" />
              <span className="text-white font-semibold tracking-tight">Joshua P Deregla</span>
            </button>

            <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/80">
              <button onClick={() => scrollTo('about')} className="hover:text-white transition">About</button>
              <button onClick={() => scrollTo('projects')} className="hover:text-white transition">Projects</button>
              <button onClick={() => scrollTo('contact')} className="hover:text-white transition flex items-center gap-2"><Mail className="h-4 w-4"/>Contact</button>
              <button onClick={() => scrollTo('resume')} className="hover:text-white transition flex items-center gap-2"><FileText className="h-4 w-4"/>Resume</button>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white transition"><Github className="h-5 w-5"/></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white transition"><Linkedin className="h-5 w-5"/></a>
            </nav>

            <button className="md:hidden text-blue-100" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">
              <Menu className="h-6 w-6"/>
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 grid gap-3 text-blue-100/90">
              <button onClick={() => scrollTo('about')} className="text-left hover:text-white">About</button>
              <button onClick={() => scrollTo('projects')} className="text-left hover:text-white">Projects</button>
              <button onClick={() => scrollTo('contact')} className="text-left hover:text-white">Contact</button>
              <button onClick={() => scrollTo('resume')} className="text-left hover:text-white">Resume</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
