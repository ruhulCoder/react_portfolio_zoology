import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Research Skills",
      skills: [
        { name: "Field Research", level: 85 },
        { name: "Data Collection", level: 90 },
        { name: "Scientific Writing", level: 80 },
        { name: "Statistical Analysis", level: 75 },
        { name: "Literature Review", level: 85 }
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "R Programming", level: 70 },
        { name: "GIS Mapping", level: 65 },
        { name: "Microscopy", level: 80 },
        { name: "DNA Extraction", level: 60 },
        { name: "PCR Techniques", level: 55 }
      ]
    },
    {
      title: "Field Skills",
      skills: [
        { name: "Animal Tracking", level: 85 },
        { name: "Species Identification", level: 90 },
        { name: "Wildlife Photography", level: 75 },
        { name: "Habitat Assessment", level: 80 },
        { name: "GPS Navigation", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">
          Skills & Expertise
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-stone-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-emerald-700 mb-6 text-center">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-emerald-600 to-teal-500 h-2.5 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* <div className="mt-12 bg-emerald-50 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-emerald-700 mb-4">Languages</h3>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-lg shadow-sm p-4 flex-1 min-w-[200px]">
                <div className="text-center">
                  <div className="inline-block w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                    <span className="text-2xl">🇺🇸</span>
                  </div>
                  <h4 className="font-semibold text-gray-800">English</h4>
                  <p className="text-gray-600">Native</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4 flex-1 min-w-[200px]">
                <div className="text-center">
                  <div className="inline-block w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                    <span className="text-2xl">🇪🇸</span>
                  </div>
                  <h4 className="font-semibold text-gray-800">Spanish</h4>
                  <p className="text-gray-600">Intermediate</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4 flex-1 min-w-[200px]">
                <div className="text-center">
                  <div className="inline-block w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                    <span className="text-2xl">🇫🇷</span>
                  </div>
                  <h4 className="font-semibold text-gray-800">French</h4>
                  <p className="text-gray-600">Basic</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
