import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="pt-24 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-brand-blue py-20 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Connect with <span className="text-brand-gold italic">Us</span></h1>
            <p className="text-white/60 text-lg">We're here to answer your questions and help you start your journey with us.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
                <MessageSquare size={16} /> Contact Details
              </div>
              <h2 className="text-4xl mb-6">Let's <span className="text-brand-blue">Talk.</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Whether you're a parent, a prospective student, or an education enthusiast, we welcome your feedback and inquiries.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="bg-brand-white p-4 rounded-2xl group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Campus</h4>
                    <p className="text-slate-500">123 Education Street, Patiala Road, Punjab, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="bg-brand-white p-4 rounded-2xl group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-slate-500">hello@summeracademy.edu<br />admissions@summeracademy.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-brand-white p-4 rounded-2xl group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Support</h4>
                    <p className="text-slate-500">+91 555-123-4567<br />+91 555-000-9999</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-lg border-8 border-brand-white h-72">
              <img 
                src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?auto=format&fit=crop&q=80&w=1000" 
                alt="Map Background" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 h-fit relative">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-12 text-center"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">Message Sent!</h3>
                  <p className="text-slate-500 mb-8">Thank you for reaching out. A representative from Tarun Pal's office will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-blue font-bold underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-blue uppercase tracking-widest pl-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-brand-white border border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-blue uppercase tracking-widest pl-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-brand-white border border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-blue uppercase tracking-widest pl-1">Subject</label>
                    <select 
                      className="w-full px-6 py-4 rounded-2xl bg-brand-white border border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all appearance-none"
                      value={formData.subject}
                      onChange={e => setFormData({...formData, subject: e.target.value})}
                    >
                      <option>General Inquiry</option>
                      <option>Admissions</option>
                      <option>Careers</option>
                      <option>Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-blue uppercase tracking-widest pl-1">How can we help?</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Your message here..."
                      className="w-full px-6 py-4 rounded-2xl bg-brand-white border border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all resize-none"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-blue text-white py-5 rounded-2xl font-black uppercase text-lg shadow-xl hover:bg-brand-blue/90 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                  >
                    Send Message <Send size={20} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
