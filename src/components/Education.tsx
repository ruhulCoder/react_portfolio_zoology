import { useStaggerAnimation } from '../hooks/useScrollAnimation';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  courses: string[];
  logo: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'Master of Science in Zoology',
    institution: 'Aligarh Muslim University',
    period: '2017 – 2019',
    location: 'Aligarh, Uttar Pradesh, India',
    description: 'Focusing on conservation biology, animal behavior, and ecological research methods.',
    courses: ['Animal Physiology', 'Evolutionary Biology', 'Wildlife Conservation', 'Field Research Methods'],
    logo: 'amu.jpg',
  },
  {
    degree: 'Bachelor of Science in Zoology',
    institution: 'Aligarh Muslim University',
    period: '2014 – 2017',
    location: 'Aligarh, Uttar Pradesh, India',
    description: 'Focusing on conservation biology, animal behavior, and ecological research methods.',
    courses: ['Animal Physiology', 'Evolutionary Biology', 'Wildlife Conservation', 'Field Research Methods'],
    logo: 'amu.jpg',
  },
];

const Education = () => {
  const { setRef, visibleSet } = useStaggerAnimation(educationData.length);

  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 10% 80%, rgba(74,186,126,0.1) 0%, transparent 50%)',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">Academic Background</p>
          <h2 className="section-title">Education &amp; Qualifications</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {educationData.map((item, index) => (
              <div
                key={index}
                ref={setRef(index) as React.RefCallback<HTMLDivElement>}
                className={`timeline-item group transition-all duration-700 ${
                  visibleSet.has(index)
                    ? 'animate-fadeInUp opacity-100'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="flex items-start gap-5 bg-stone-50 hover:bg-white p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-0.5 border border-transparent hover:border-emerald-100">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-emerald-200 bg-white shadow-sm flex items-center justify-center group-hover:border-emerald-400 transition-colors">
                      <img
                        src={`/assets/${item.logo}`}
                        alt={item.institution}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-lg font-bold text-emerald-700 font-display">{item.degree}</h3>
                      <span className="flex-shrink-0 text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-800 font-semibold">{item.institution}</p>
                    <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                      <span>📍</span> {item.location}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>

                    {item.courses.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Key Courses</p>
                        <div className="flex flex-wrap gap-2">
                          {item.courses.map((course, ci) => (
                            <span
                              key={ci}
                              className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-medium hover:bg-emerald-100 transition-colors"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
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

export default Education;