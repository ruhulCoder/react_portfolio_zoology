const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Zoology",
      institution: "Aligarh Muslim University",
      period: "2017 - 2019",
      description: "Focusing on conservation biology, animal behavior, and ecological research methods.",
      courses: ["Animal Physiology", "Evolutionary Biology", "Wildlife Conservation", "Field Research Methods"]
    },
    {
      degree: "Research Internship",
      institution: "National Wildlife Research Center",
      period: "Summer 2024",
      description: "Participated in field studies tracking migratory patterns of endangered bird species.",
      courses: []
    },
    {
      degree: "Bachelor of Science in Zoology",
      institution: "Aligarh Muslim University",
      period: "2014 - 2017",
      description: "Focusing on conservation biology, animal behavior, and ecological research methods.",
      courses: ["Animal Physiology", "Evolutionary Biology", "Wildlife Conservation", "Field Research Methods"]
    },
    // {
    //   degree: "Associate's Degree in Biology",
    //   institution: "Greenfield Community College",
    //   period: "2020 - 2022",
    //   description: "Foundation studies in biological sciences with honors. GPA: 3.9/4.0.",
    //   courses: ["General Biology", "Ecology", "Organic Chemistry", "Scientific Writing"]
    // }
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">
          Education & Qualifications
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-emerald-600 ml-6 pl-8 pb-6">
            {educationData.map((item, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-14 mt-1.5 h-6 w-6 rounded-full border-4 border-emerald-600 bg-white"></div>
                <div className="bg-stone-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-emerald-700">{item.degree}</h3>
                  <p className="text-gray-600 font-medium">{item.institution}</p>
                  <p className="text-amber-600 font-medium mb-3">{item.period}</p>
                  <p className="text-gray-700 mb-3">{item.description}</p>
                  
                  {item.courses.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Courses:</h4>
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
