import { useStaggerAnimation } from '../hooks/useScrollAnimation';

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  logo: string;
  link?: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: 'Member',
    organization: 'British Neuro-Oncology Society (BNOS)',
    period: 'Apr 2024 – Present',
    location: 'Remote',
    description: '',
    logo: 'bnos.jpg',
  },
  {
    title: 'Member',
    organization: 'American Cancer Society',
    period: 'Jun 2022 – Present',
    location: 'Remote',
    description: 'ResearcHERS: Women Fighting Cancer of Washington',
    logo: 'american_cancer_society_logo.jpg',
    link: 'https://secure.acsevents.org/site/STR?fr_id=103129&pg=personal&px=58001050',
  },
  {
    title: 'Subject Expert in Biology',
    organization: 'Course Hero',
    period: 'Nov 2021 – Jul 2024',
    location: 'International',
    description: 'Teaching and Public Speaking',
    logo: 'coursehero_logo.jpg',
  },
  {
    title: 'Senior Membership',
    organization: 'International Oncology Association',
    period: 'Aug 2020 – Jul 2024',
    location: 'India',
    description: '',
    logo: 'international_oncology_association_logo.jpg',
  },
  {
    title: 'Brand Ambassador',
    organization: 'Tutedude',
    period: 'Mar 2021 – Jun 2022',
    location: 'IIT Delhi',
    description: '',
    logo: 'tude-dude.jpg',
  },
  {
    title: 'Secretary (TWOD Social)',
    organization: 'The Wings Of Desire (NGO)',
    period: 'Sep 2020 – Mar 2021',
    location: 'Aligarh, Uttar Pradesh, India',
    description: '',
    logo: 'the_wings_of_desire_ngo_logo.jpg',
  },
];

const Experience = () => {
  const { setRef, visibleSet } = useStaggerAnimation(experienceData.length);

  return (
    <section id="experience" className="py-20 bg-earth-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 90% 20%, rgba(74,186,126,0.1) 0%, transparent 50%)',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">Career &amp; Affiliations</p>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {experienceData.map((item, index) => (
              <div
                key={index}
                ref={setRef(index) as React.RefCallback<HTMLDivElement>}
                className={`timeline-item group transition-all duration-700 ${
                  visibleSet.has(index)
                    ? 'animate-fadeInUp opacity-100'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5 bg-white hover:bg-stone-50 p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-0.5 border border-transparent hover:border-emerald-100">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-emerald-200 bg-white shadow-sm flex items-center justify-center group-hover:scale-105 group-hover:border-emerald-400 transition-all duration-300">
                      <img
                        src={`/assets/${item.logo}`}
                        alt={item.organization}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-lg font-bold text-emerald-700 font-display">{item.title}</h3>
                      <span className="flex-shrink-0 text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-800 font-semibold">{item.organization}</p>
                    <p className="text-gray-500 text-sm flex items-center gap-1 mb-2">
                      <span>📍</span> {item.location}
                    </p>
                    {item.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-sm text-emerald-600 hover:text-emerald-800 font-medium group/link"
                      >
                        Visit Profile
                        <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
                      </a>
                    )}
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

export default Experience;