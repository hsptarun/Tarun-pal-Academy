import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                TP
              </div>
              <span className="text-xl font-extrabold tracking-tight">Tarun Pal Academy</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Punjab's premier academy for holistic growth, academic mastery, and career readiness. Join a community where success is a standard.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-indigo transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-indigo transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-indigo transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-brand-indigo font-bold mb-6 uppercase text-[10px] tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><NavLink to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</NavLink></li>
              <li><NavLink to="/courses" className="text-slate-400 hover:text-white transition-colors">Programs</NavLink></li>
              <li><NavLink to="/admissions" className="text-slate-400 hover:text-white transition-colors">Admissions</NavLink></li>
              <li><NavLink to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-indigo font-bold mb-6 uppercase text-[10px] tracking-widest">Specializations</h4>
            <ul className="space-y-4 text-sm">
              <li><NavLink to="/courses" className="text-slate-400 hover:text-white transition-colors">Advanced Science</NavLink></li>
              <li><NavLink to="/courses" className="text-slate-400 hover:text-white transition-colors">Logical Mathematics</NavLink></li>
              <li><NavLink to="/courses" className="text-slate-400 hover:text-white transition-colors">Communication Arts</NavLink></li>
              <li><NavLink to="/courses" className="text-slate-400 hover:text-white transition-colors">Creative Design</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-indigo font-bold mb-6 uppercase text-[10px] tracking-widest">Contact Information</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-indigo shrink-0" />
                <span className="text-slate-400">123 Education Street, Punjab, IN</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-indigo shrink-0" />
                <span className="text-slate-400 font-mono">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-indigo shrink-0" />
                <span className="text-slate-400 font-mono">info@tarunpal.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Stat Bar - Integrated from design */}
        <div className="border-t border-slate-800 py-8 flex flex-col md:row items-center justify-between gap-8">
          <div className="flex space-x-12">
            <div className="flex flex-col">
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Enrollment</span>
              <span className="text-xl font-bold">1,200+</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Success Rate</span>
              <span className="text-xl font-bold">98.4%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Experts</span>
              <span className="text-xl font-bold">45+</span>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            <p>© {currentYear} Tarun Pal Excellence. All rights reserved.</p>
            <p className="text-brand-indigo">Mentored by Tarun Pal</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

