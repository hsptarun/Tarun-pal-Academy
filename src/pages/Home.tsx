import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, Award, CheckCircle2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-10 overflow-hidden bg-brand-bg">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-3/5">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-indigo-100 text-brand-indigo text-xs font-bold rounded-full mb-6 uppercase tracking-widest shadow-sm"
            >
              Enrollment Open for 2026
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8"
            >
              Master Your Future <br/>
              <span className="text-brand-indigo">With Tarun Pal.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-xl mb-10 leading-relaxed font-medium"
            >
              Punjab's premier academy for holistic growth, academic mastery, and career readiness. Join a community where success is binary.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <NavLink 
                to="/courses" 
                className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl hover:bg-slate-800 transition-all text-center"
              >
                Explore Courses
              </NavLink>
              <NavLink 
                to="/admissions" 
                className="px-10 py-5 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold shadow-sm hover:border-brand-indigo transition-all text-center"
              >
                Apply Now
              </NavLink>
            </motion.div>
          </div>

          <div className="lg:w-2/5 h-full relative">
            <div className="relative aspect-square w-full bg-indigo-50 rounded-[3rem] overflow-hidden border border-indigo-100 shadow-inner flex items-center justify-center">
              {/* Abstract Design Elements from Theme */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply opacity-50 blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply opacity-50 blur-2xl" />
              
              <div className="z-20 p-10 bg-white/80 backdrop-blur-md border border-white rounded-3xl shadow-2xl text-center max-w-[320px]">
                <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-brand-indigo overflow-hidden shadow-inner font-black text-brand-indigo text-2xl">
                   TP
                </div>
                <h4 className="font-black text-slate-900 text-lg mb-2">Director's Message</h4>
                <p className="text-sm italic text-slate-600 leading-relaxed">
                  "Education is not just about learning facts, but training the mind to think."
                </p>
                <p className="text-[10px] font-black text-brand-indigo mt-4 uppercase tracking-[0.2em] italic">
                  — Tarun Pal
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </section>

      {/* Feature Grid Section */}
      <section className="px-10 py-24 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">Built for Excellence</h2>
            </div>
            <p className="text-slate-500 font-medium">Modern infrastructure meeting global standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🧪', title: 'Science Lab', color: 'bg-indigo-50', text: 'text-indigo-600', desc: 'State-of-the-art facilities for research and experimentation.' },
              { icon: '📈', title: 'Mathematics', color: 'bg-sky-50', text: 'text-sky-600', desc: 'Advanced logic and analytical training modules for students.' },
              { icon: '🗣️', title: 'Communication', color: 'bg-amber-50', text: 'text-amber-600', desc: 'Public speaking and language mastery programs for all levels.' },
              { icon: '🎨', title: 'Creative Arts', color: 'bg-rose-50', text: 'text-rose-600', desc: 'Developing the artist within every scholar through guidance.' },
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group transition-all hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <span className={`text-2xl font-bold ${f.text}`}>{f.icon}</span>
                </div>
                <h5 className="font-extrabold text-slate-900 text-xl mb-3">{f.title}</h5>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{f.desc}</p>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-brand-indigo transition-colors cursor-pointer inline-flex items-center gap-2">
                    Learn More <ArrowRight size={12} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="container mx-auto px-10">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative">
            <div className="max-w-3xl relative z-10">
              <span className="text-brand-indigo uppercase tracking-[0.4em] text-[10px] font-black block mb-6">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Founded on a Vision of <br/><span className="text-indigo-400">Holistic Growth.</span></h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
                Under the visionary leadership of Tarun Pal, we prioritize the development of clear thinking over rote memorization.
              </p>
              <NavLink to="/about" className="px-8 py-4 bg-brand-indigo text-white rounded-xl font-bold inline-block hover:bg-white hover:text-slate-900 transition-all">
                Read our full Story
              </NavLink>
            </div>
            
            {/* Background Shape */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-indigo/10 transform skew-x-12 translate-x-1/4" />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-white text-center px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-brand-indigo mb-10 opacity-20">
             <BookOpen size={80} className="mx-auto" />
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-12">
            "We build architects of the future, not just workers for industry."
          </h3>
          <div className="flex items-center justify-center gap-4">
             <div className="h-[2px] w-12 bg-slate-200" />
             <div className="text-sm font-black uppercase tracking-[0.3em]">Tarun Pal</div>
             <div className="h-[2px] w-12 bg-slate-200" />
          </div>
        </div>
      </section>
    </div>
  );
}
