import { useStaggerAnimation } from '../hooks/useScrollAnimation';

interface CertItem {
  title: string;
  organization: string;
  period: string;
  logo: string;
}

const certificationData: CertItem[] = [
  {
    title: 'Certificate of Completion',
    organization: 'ICMR-National Institute of Nutrition',
    period: 'Issued May 2020',
    logo: 'icmr.jpg',
  },
  {
    title: 'Certificate of Completion of WASH',
    organization: 'UNICEF',
    period: 'Issued Apr 2020',
    logo: 'unicef.jpg',
  },
  {
    title: 'Record of Achievement',
    organization: 'World Health Organization',
    period: 'Issued Apr 2020',
    logo: 'world_health_organization_logo.jpg',
  },
  {
    title: 'International & National',
    organization: 'Aligarh Muslim University',
    period: 'Issued May 2018',
    logo: 'amu.jpg',
  },
];

const Certifications = () => {
  const { setRef, visibleSet } = useStaggerAnimation(certificationData.length);

  return (
    <section id="certifications" className="py-20 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 90%, rgba(251,191,36,0.08) 0%, transparent 50%)',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">Credentials</p>
          <h2 className="section-title">Licenses &amp; Certifications</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {certificationData.map((item, index) => (
              <div
                key={index}
                ref={setRef(index) as React.RefCallback<HTMLDivElement>}
                className={`group transition-all duration-700 ${
                  visibleSet.has(index)
                    ? 'animate-fadeInUp opacity-100'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 bg-stone-50 hover:bg-white p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 h-full border-l-4 border-transparent hover:border-emerald-400 group-hover:-translate-y-0.5">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-emerald-200 bg-white shadow-sm flex items-center justify-center group-hover:scale-105 group-hover:border-emerald-400 transition-all duration-300">
                      <img
                        src={`/assets/${item.logo}`}
                        alt={item.organization}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 mb-1">
                      <span className="flex-shrink-0 mt-1">🏅</span>
                      <h3 className="text-base font-bold text-emerald-700 font-display leading-tight">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 font-medium text-sm">{item.organization}</p>
                    <span className="inline-block mt-2 text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full">
                      {item.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;