import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { ClipboardCheck, Calendar, UserPlus, GraduationCap, CheckCircle2 } from 'lucide-react';

export function Admissions() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Online Application',
      desc: 'Submit your personal and academic details via our digital portal.'
    },
    {
      icon: ClipboardCheck,
      title: 'Entrance Evaluation',
      desc: 'Assess your logical reasoning and core subject proficiency.'
    },
    {
      icon: Calendar,
      title: 'Personal Interview',
      desc: 'A conversation with our faculty to understand your goals and aspirations.'
    },
    {
      icon: GraduationCap,
      title: 'Admission Offer',
      desc: 'Once approved, complete the enrollment process and join the family.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-brand-bg py-20 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-brand-indigo uppercase tracking-[0.3em] text-[10px] font-black block mb-4">Admissions 2026-27</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-slate-900">
              Your <span className="text-brand-indigo italic font-serif">Future</span> Starts Here.
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl font-medium">
              We seek passionate students who are ready to challenge themselves. Follow the sleek process below for enrollment.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 h-full relative z-10 hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-brand-blue/5 text-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors">
                    <step.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                   <div className="hidden lg:block absolute top-1/2 left-full w-8 h-[2px] bg-brand-gold/30 -translate-y-1/2 z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Call */}
      <section className="container mx-auto px-6">
        <div className="bg-brand-blue rounded-[3rem] p-10 md:p-20 text-white flex flex-col lg:row items-center gap-16 overflow-hidden relative shadow-2xl">
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Ready to join our <span className="text-brand-gold italic">next cohort?</span></h2>
            <div className="space-y-6 mb-10">
              {[
                'Merit-based scholarships available',
                'One-on-one counseling for career paths',
                'Exposure to global learning resources',
                'Mentor leadership from Tarun Pal'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-gold w-6 h-6 shrink-0" />
                  <span className="text-white/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <NavLink to="/contact" className="bg-white text-brand-blue px-10 py-5 rounded-2xl font-black uppercase text-lg shadow-lg hover:scale-105 transition-transform active:scale-95 inline-block">
              Request Admission Form
            </NavLink>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="bg-brand-gold/10 p-10 rounded-[2rem] backdrop-blur-md border border-white/10">
                <blockquote className="text-2xl font-serif italic mb-6">
                  "Excellence is not an act, but a habit. We help students cultivate that habit every single day."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold" />
                  <div>
                    <div className="font-bold">Tarun Pal</div>
                    <div className="text-brand-gold text-xs uppercase tracking-widest font-bold">Founder Director</div>
                  </div>
                </div>
             </div>
             
             {/* Decorative Circles */}
             <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-gold/10 rounded-full blur-3xl -z-10" />
             <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* FAQ Sneak Peek */}
      <section className="py-24 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif mb-12">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { q: 'When do admissions typically open?', a: 'Admissions for the new academic cycle open in February each year.' },
            { q: 'Is there an age limit?', a: 'Requirements vary by program. Please consult our course coordinators.' },
            { q: 'Does Tarun Pal teach directly?', a: 'Yes, Mr. Pal leads advanced leadership workshops and career mentorship sessions.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl text-left border border-slate-100 shadow-sm">
              <h4 className="font-bold mb-2 text-brand-blue">{item.q}</h4>
              <p className="text-slate-500 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
