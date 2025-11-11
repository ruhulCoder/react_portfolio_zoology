import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Migratory Bird Tracking Study",
      image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=600",
      description: "Field research project tracking seasonal migration patterns of local bird species using GPS tagging and observation.",
      skills: ["Field Research", "Data Analysis", "GPS Tracking", "Ornithology"],
      year: "2024"
    },
    {
      title: "Urban Wildlife Adaptation Study",
      image: "https://images.unsplash.com/photo-1504006833117-8886a355efbf?q=80&w=600",
      description: "Research on how wildlife adapts to urban environments, focusing on behavioral changes and population dynamics.",
      skills: ["Urban Ecology", "Behavioral Analysis", "Population Studies"],
      year: "2023"
    },
    {
      title: "Freshwater Ecosystem Assessment",
      image: "https://images.unsplash.com/photo-1496962343985-21c5216d4633?q=80&w=600",
      description: "Comprehensive analysis of a local river ecosystem, including water quality testing and aquatic species inventory.",
      skills: ["Aquatic Biology", "Water Testing", "Species Identification"],
      year: "2023"
    },
    {
      title: "Wildlife Conservation Awareness Campaign",
      image: "https://images.unsplash.com/photo-1534567110243-8875d64ca8ff?q=80&w=600",
      description: "Designed and implemented a public education campaign about local endangered species and conservation efforts.",
      skills: ["Public Education", "Conservation", "Community Engagement"],
      year: "2022"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">
          Projects & Field Work
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className={`cursor-pointer p-4 border-l-4 transition-colors ${
                      activeProject === index 
                        ? 'border-emerald-600 bg-emerald-50' 
                        : 'border-transparent hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveProject(index)}
                  >
                    <h3 className={`font-medium ${activeProject === index ? 'text-emerald-800' : 'text-gray-700'}`}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500">{project.year}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500">
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-3">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {projects[activeProject].description}
                  </p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">SKILLS & TECHNIQUES</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject].skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
