const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Zoology",
      institution: "Aligarh Muslim University",
      period: "2017 - 2019",
      location: "Aligarh, Uttar Pradesh, India",
      description: "Focusing on conservation biology, animal behavior, and ecological research methods.",
      courses: ["Animal Physiology", "Evolutionary Biology", "Wildlife Conservation", "Field Research Methods"],
      logo: "amu.jpg"
    },
    {
      degree: "Bachelor of Science in Zoology",
      institution: "Aligarh Muslim University",
      period: "2014 - 2017",
      location: "Aligarh, Uttar Pradesh, India",
      description: "Focusing on conservation biology, animal behavior, and ecological research methods.",
      courses: ["Animal Physiology", "Evolutionary Biology", "Wildlife Conservation", "Field Research Methods"],
      logo: "amu.jpg"
    }
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">
          Education & Qualifications
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div key={index} className="flex items-start gap-6 bg-stone-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-600 bg-white flex items-center justify-center">
                    <img 
                      src={`/assets/${item.logo}`} 
                      alt={item.institution} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-emerald-700">{item.degree}</h3>
                  <p className="text-gray-800 font-semibold">{item.institution}</p>
                  <p className="text-amber-600 font-medium text-sm mb-2">{item.period}</p>
                  <p className="text-gray-600 text-sm mb-2">{item.location}</p>
                  <p className="text-gray-700 text-sm mb-3">{item.description}</p>
                  
                  {item.courses.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course, courseIndex) => (
                          <span key={courseIndex} className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Education;