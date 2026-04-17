import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactItems = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'intezaralisiaz@gmail.com',
    href: 'mailto:intezaralisiaz@gmail.com',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+91 9557415212',
    href: 'tel:+919557415212',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    value: 'Aligarh Muslim University, Aligarh\nUttar Pradesh, India',
    href: null,
  },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-br from-emerald-900 via-forest-800 to-teal-900 text-white">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-10 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: '72px', width: '100%' }}>
          <path d="M0,32 C360,72 1080,0 1440,40 L1440,72 L0,72 Z" fill="#faf8f5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-300/80 mb-2">Let's Connect</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-amber-300">Get In Touch</h2>
          <div className="mx-auto mt-3 w-14 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full" />
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-5 gap-6">
            {/* Contact info card */}
            <div className="md:col-span-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-semibold mb-6 text-amber-200">Contact Information</h3>

              <div className="space-y-5">
                {contactItems.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300 flex-shrink-0 group-hover:bg-amber-400/30 transition-colors">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-white/50 font-semibold">{label}</p>
                      {href ? (
                        <a href={href} className="text-emerald-100 hover:text-amber-200 transition-colors font-medium">
                          {value}
                        </a>
                      ) : (
                        <p className="text-emerald-100 font-medium whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs uppercase tracking-wide text-white/50 font-semibold mb-4">Find Me Online</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/intezar-ali-a69b961b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social w-11 h-11 rounded-full bg-emerald-700/60 border border-white/10 flex items-center justify-center hover:bg-amber-400 hover:border-amber-400 transition-all duration-300 hover:scale-110 hover:shadow-glow-amber"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative panel */}
            <div className="md:col-span-2 flex flex-col items-center justify-center text-center bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="text-6xl mb-4 animate-float">🧬</div>
              <h4 className="font-display text-lg font-semibold text-amber-200 mb-3">Open to Collaboration</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Always interested in discussing research opportunities, collaborations, or just a conversation about science.
              </p>
              <div className="mt-6 flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2 text-sm text-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  Available for research partnerships
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                  Open to academic consultations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
