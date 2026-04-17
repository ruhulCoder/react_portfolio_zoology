import { useStaggerAnimation } from '../hooks/useScrollAnimation';

interface VolunteerItem {
  title: string;
  organization: string;
  category: string;
  logo: string;
  categoryIcon: string;
}

const volunteeringData: VolunteerItem[] = [
  {
    title: 'Member of Organising Committee',
    organization: 'Aligarh Muslim University',
    category: 'Science and Technology',
    logo: 'amu.jpg',
    categoryIcon: '🔬',
  },
  {
    title: 'Coordinator and Volunteers',
    organization: 'Aligarh Muslim University',
    category: 'Health',
    logo: 'amu.jpg',
    categoryIcon: '🏥',
  },
  {
    title: 'Research Volunteer',
    organization: 'Aligarh Muslim University',
    category: 'Science and Technology',
    logo: 'amu.jpg',
    categoryIcon: '🔬',
  },
  {
    title: 'Senior Volunteer',
    organization: 'Aligarh Muslim University',
    category: 'Environment',
    logo: 'amu.jpg',
    categoryIcon: '🌿',
  },
];

const Volunteering = () => {
  const { setRef, visibleSet } = useStaggerAnimation(volunteeringData.length);

  return (
    <section id="volunteering" className="py-20 bg-earth-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 20% 20%, rgba(74,186,126,0.1) 0%, transparent 50%)',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">Community Impact</p>
          <h2 className="section-title">Volunteering</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {volunteeringData.map((item, index) => (
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
                <div className="flex items-start gap-4 bg-white hover:bg-stone-50 p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 h-full border-l-4 border-transparent hover:border-emerald-400 group-hover:-translate-y-0.5">
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
                    <h3 className="text-base font-bold text-emerald-700 font-display leading-snug mb-1">{item.title}</h3>
                    <p className="text-gray-700 font-medium text-sm mb-3">{item.organization}</p>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-semibold hover:bg-emerald-100 transition-colors">
                      <span>{item.categoryIcon}</span>
                      {item.category}
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

export default Volunteering;