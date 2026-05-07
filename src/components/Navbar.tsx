import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white border-b border-slate-200 py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-10 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-indigo rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200">
            TP
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-slate-900">Tarun Pal Academy</span>
            <span className="text-[10px] uppercase tracking-widest text-brand-indigo font-black">Punjab • Excellence</span>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => cn(
                "text-sm font-semibold transition-all hover:text-brand-indigo relative py-1",
                isActive ? "text-slate-900" : "text-slate-500"
              )}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-indigo"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <NavLink 
            to="/admissions" 
            className="bg-brand-indigo text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-brand-indigo/90 hover:shadow-indigo-200 transition-all active:scale-95"
          >
            Apply Now
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden border-t"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => cn(
                    "text-lg font-medium py-2 border-b border-gray-100",
                    isActive ? "text-brand-gold" : "text-brand-blue"
                  )}
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink 
                to="/admissions" 
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-brand-blue text-white text-center py-4 rounded-xl font-bold"
              >
                Apply Now
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
