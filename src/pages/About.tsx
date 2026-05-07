import { motion } from 'motion/react';
import { ArrowRight, History, Target, Eye, UserCheck } from 'lucide-react';

export function About() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6">Our Legacy & <span className="text-brand-indigo italic font-serif">Vision</span></h1>
            <p className="text-slate-400 text-lg md:text-xl">Discover the heart of Tarun Pal Academy and our commitment to educational excellence.</p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-indigo/5 blur-3xl rounded-full translate-x-1/2" />
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-brand-indigo px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                <History size={16} /> Our Foundation
              </div>
              <h2 className="text-4xl mb-8 font-black">The Story of <span className="text-brand-indigo">Tarun Pal Academy</span></h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Established in the heart of Punjab, Tarun Pal Academy was born from a singular vision: to bridge the gap between traditional schooling and the demands of the modern global landscape.
                </p>
                <p>
                  Under the stewardship of <strong className="text-brand-indigo">Tarun Pal</strong>, we have grown from a small community initiative into a premier educational hub.
                </p>
                <p>
                  Our journey has been marked by a relentless pursuit of quality, constantly evolving our methodologies while staying true to our core value of character development.
                </p>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 border-[12px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000" 
                  alt="Students Studying" 
                  className="w-full aspect-video object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-gold p-10 rounded-3xl shadow-xl z-20 hidden md:block">
                <div className="text-brand-blue text-4xl font-serif font-bold mb-1">15+</div>
                <div className="text-white text-xs uppercase tracking-widest font-bold">Years of Excellence</div>
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Target, 
                title: 'Our Mission', 
                desc: 'To provide a transformative educational experience that cultivates critical thinking, creative problem solving, and social responsibility.',
                color: 'text-blue-600'
              },
              { 
                icon: Eye, 
                title: 'Our Vision', 
                desc: 'To be the most respected academy in India, recognized for producing ethical leaders and innovators who thrive in a complex world.',
                color: 'text-amber-600'
              },
              { 
                icon: UserCheck, 
                title: 'Founder\'s Message', 
                desc: '"We believe every student has a unique spark. Our job is to provide the air that turns it into a flame." — Tarun Pal',
                color: 'text-emerald-600'
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-brand-white p-10 rounded-3xl border border-slate-100 hover:border-brand-gold/30 hover:shadow-lg transition-all"
              >
                <div className={`mb-6 ${card.color}`}>
                  <card.icon size={40} />
                </div>
                <h3 className="text-2xl mb-4">{card.title}</h3>
                <p className="text-slate-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-24 bg-brand-blue text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3"
            >
              <div className="relative">
                <div className="bg-brand-gold aspect-square rounded-full flex items-center justify-center overflow-hidden border-8 border-white/10 shadow-2xl">
                   {/* Placeholder for Tarun Pal image */}
                   <img 
                    src="https://kommodo.ai/i/8IUSS6AcfD8nLb5I8Rq5" 
                    alt="Tarun Pal" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                   />
                </div>
                <div className="absolute top-0 right-0 bg-white text-brand-blue p-4 rounded-full shadow-lg transform translate-x-1/4 -translate-y-1/4">
                  <Target size={24} />
                </div>
              </div>
            </motion.div>
            
            <div className="lg:w-2/3">
              <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold block mb-4">The Visionary</span>
              <h2 className="text-4xl md:text-5xl mb-8">Tarun Pal <br /><span className="text-white/60 text-2xl font-serif italic">Founder & Director</span></h2>
              <p className="text-xl text-white/70 italic leading-relaxed mb-8">
                "Our educational system shouldn't just produce workers for the industry; it should nurture architects of the future. At Summer Academy, we foster the courage to question and the skills to create."
              </p>
              <p className="text-white/50 leading-relaxed mb-10 max-w-2xl">
                With over two decades of experience in educational reform and institutional management, Tarun Pal has dedicated his career to ensuring that the students of Punjab have access to world-class learning facilities and mentorship.
              </p>
              <div className="flex gap-4">
                <div className="px-6 py-2 bg-white/10 rounded-full text-sm font-bold border border-white/20">Ed-Tech Pioneer</div>
                <div className="px-6 py-2 bg-white/10 rounded-full text-sm font-bold border border-white/20">Social Activist</div>
                <div className="px-6 py-2 bg-white/10 rounded-full text-sm font-bold border border-white/20">Mentor</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
