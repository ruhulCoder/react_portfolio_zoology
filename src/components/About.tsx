import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-earth-50 relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(74,186,126,0.08) 0%, transparent 50%), ' +
            'radial-gradient(circle at 80% 20%, rgba(251,191,36,0.06) 0%, transparent 40%)',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">Who I Am</p>
          <h2 className="section-title">About Me</h2>
        </div>

        {/* Card */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden">
            {/* Green top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400" />

            <div className="p-8 md:p-10">
              {/* Decorative quote mark */}
              <div className="text-emerald-100 font-display text-8xl leading-none select-none mb-2 -mt-2">❝</div>

              <div className="space-y-5 -mt-6">
                <p className="text-gray-700 leading-loose text-base md:text-lg">
                  As a passionate{' '}
                  <span className="font-semibold text-emerald-700">Neuro-oncology researcher</span>, I investigate the
                  intricate biology of brain tumors, with a focus on glioblastoma dynamics, including tumor
                  heterogeneity, plasticity, and the tumor microenvironment to unravel the pathways driving
                  progression and resistance.
                </p>

                <p className="text-gray-700 leading-loose text-base md:text-lg">
                  My work bridges{' '}
                  <span className="font-semibold text-emerald-700">neuro-oncology and cognitive neuroscience</span>,
                  exploring biology-to-behavior links in neuro-developmental disorders and tumor-induced cognitive
                  impairments, mediated by cell signaling, to pioneer targeted therapies that mitigate neurological
                  decline, enhance survival, and improve quality of life.
                </p>

                <p className="text-gray-700 leading-loose text-base md:text-lg">
                  As a driven, curious, and compassionate research scholar, I'm committed to translating
                  cutting-edge insights into{' '}
                  <span className="font-semibold text-emerald-700">
                    innovative treatments for patients with brain cancer
                  </span>
                  .
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {['Neuro-oncology', 'Glioblastoma', 'Tumor Biology', 'Cognitive Neuroscience', 'Cell Signaling', 'Research'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-sm font-medium hover:bg-emerald-100 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;