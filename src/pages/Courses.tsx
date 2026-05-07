import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { FlaskConical, Binary, Languages, Palette, ChevronRight, Download } from 'lucide-react';

export function Courses() {
  const programs = [
    {
      id: 'science',
      icon: FlaskConical,
      title: 'Science & Technology',
      subtitle: 'Exploring the frontiers of discovery',
      description: 'Our comprehensive science program covers Physics, Chemistry, and Biology with a focus on experimental learning and modern lab techniques.',
      features: ['Advanced Robotics Lab', 'Scientific Research Methodology', 'Weekly Field Research', 'Competitive Exam Prep'],
      color: 'bg-blue-600',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'maths',
      icon: Binary,
      title: 'Mathematics & Logic',
      subtitle: 'The language of precision',
      description: 'Master the core concepts of mathematics from fundamental arithmetic to advanced calculus. We emphasize logical reasoning and analytical thinking.',
      features: ['Mathematical Olympiad Training', 'Computational Thinking', 'Data Analysis Workshops', 'Personalized Mentorship'],
      color: 'bg-indigo-600',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd48a5791?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'humanities',
      icon: Languages,
      title: 'Languages & Literature',
      subtitle: 'Empowering communication',
      description: 'Deepen your understanding of linguistic structures and literary masterpieces. We focus on enhancing English proficiency and global literature.',
      features: ['Creative Writing Studio', 'Public Speaking & Debates', 'Comparative Literature Study', 'Multilingual Workshops'],
      color: 'bg-amber-600',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'arts',
      icon: Palette,
      title: 'Arts & Creativity',
      subtitle: 'Unleashing the imagination',
      description: 'A vibrant space for students to express themselves through various mediums including digital art, painting, music, and performing arts.',
      features: ['Professional Art Studio', 'Digital Media Lab', 'Annual Performance Festival', 'Portfolio Development'],
      color: 'bg-rose-600',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white border-b-8 border-brand-indigo">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:row justify-between items-end gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-brand-indigo uppercase tracking-[0.3em] text-[10px] font-black block mb-4">Academic Programs</span>
              <h1 className="text-4xl md:text-6xl font-black">Curriculum of <span className="text-brand-indigo italic font-serif">Excellence</span></h1>
            </div>
            <p className="max-w-md text-slate-400 mb-2 font-medium">Designed by experts under the guidance of Tarun Pal, our curriculum meets global standards while staying rooted in results.</p>
          </motion.div>
        </div>
      </section>

      {/* Course List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {programs.map((program, i) => (
              <div 
                key={program.id}
                className={`flex flex-col lg:row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-brand-blue/20 rounded-[40px] transform rotate-3 scale-105 -z-10 group-hover:rotate-1 transition-transform duration-500" />
                    <div className="rounded-[40px] overflow-hidden shadow-2xl">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-1000"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className={`absolute bottom-8 ${i % 2 === 0 ? 'right-8' : 'left-8'} ${program.color} text-white p-6 rounded-3xl shadow-xl`}>
                      <program.icon size={32} />
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl mb-4 font-serif">{program.title}</h2>
                  <h4 className="text-brand-blue/60 italic text-lg mb-6">{program.subtitle}</h4>
                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                    {program.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-700 bg-brand-white px-4 py-3 rounded-xl border border-slate-100">
                        <ChevronRight className="text-brand-gold w-4 h-4 shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <NavLink to="/admissions" className={`px-8 py-4 ${program.color} text-white rounded-xl font-bold hover:brightness-90 transition-all flex items-center gap-2`}>
                      Enroll Now <ChevronRight size={18} />
                    </NavLink>
                    <button className="px-8 py-4 bg-brand-white text-brand-blue border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                       Syllabus <Download size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-white text-3xl md:text-5xl mb-8">Ready to Start Your <span className="text-brand-gold italic">Journey?</span></h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">Join the hundreds of students in Punjab who are redefining excellence at Summer Academy.</p>
          <NavLink to="/admissions" className="bg-brand-gold text-brand-blue px-12 py-5 rounded-full font-black uppercase tracking-tighter text-lg hover:scale-105 transition-transform inline-block">
             Begin Application
          </NavLink>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </section>
    </div>
  );
}
