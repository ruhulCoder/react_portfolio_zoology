const Experience = () => {
  const experienceData = [
    {
      title: "Member",
      organization: "British Neuro-Oncology Society (BNOS)",
      period: "Apr 2024 - Present · 2 yrs 1 mo",
      location: "Remote",
      description: "",
      logo: "bnos.jpg"
    },
    {
      title: "Member",
      organization: "American Cancer Society",
      period: "Jun 2022 - Present · 3 yrs 11 mos",
      location: "Remote",
      description: "ResearcHERS: Women Fighting Cancer of Washington",
      logo: "american_cancer_society_logo.jpg",
      link: "https://secure.acsevents.org/site/STR?fr_id=103129&pg=personal&px=58001050"
    },
    {
      title: "Subject Expert in Biology",
      organization: "Course Hero",
      period: "Nov 2021 - Jul 2024 · 2 yrs 9 mos",
      location: "International",
      description: "Teaching and Public Speaking",
      logo: "coursehero_logo.jpg"
    },
    {
      title: "Senior Membership",
      organization: "International Oncology Association",
      period: "Aug 2020 - Jul 2024 · 4 yrs",
      location: "India",
      description: "",
      logo: "international_oncology_association_logo.jpg"
    },
    {
      title: "Brand Ambassador",
      organization: "Tutedude",
      period: "Mar 2021 - Jun 2022 · 1 yr 4 mos",
      location: "IIT Delhi",
      description: "",
      logo: "tude-dude.jpg"
    },
    {
      title: "Secretary (TWOD Social)",
      organization: "The Wings Of Desire (NGO)",
      period: "Sep 2020 - Mar 2021 · 7 mos",
      location: "Aligarh, Uttar Pradesh, India",
      description: "",
      logo: "the_wings_of_desire_ngo_logo.jpg"
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <div key={index} className="flex items-start gap-6 bg-stone-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-600 bg-white flex items-center justify-center">
                    <img 
                      src={`/assets/${item.logo}`} 
                      alt={item.organization} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-emerald-700">{item.title}</h3>
                  <p className="text-gray-800 font-semibold">{item.organization}</p>
                  <p className="text-amber-600 font-medium text-sm mb-2">{item.period}</p>
                  <p className="text-gray-600 text-sm mb-2">{item.location}</p>
                  {item.description && (
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  )}
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-800 text-sm underline mt-1 inline-block"
                    >
                      Visit Profile
                    </a>
                  )}
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