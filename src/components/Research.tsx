const Research = () => {
  const researchInterests = [
    {
      title: "Wildlife Conservation",
      description: "Studying effective conservation strategies for endangered species and their habitats.",
      icon: "🦁",
      color: "bg-amber-100 border-amber-400"
    },
    {
      title: "Animal Behavior",
      description: "Analyzing social structures and behavioral adaptations in mammalian species.",
      icon: "🐺",
      color: "bg-blue-100 border-blue-400"
    },
    {
      title: "Ecosystem Dynamics",
      description: "Investigating predator-prey relationships and their impact on ecological balance.",
      icon: "🌿",
      color: "bg-emerald-100 border-emerald-400"
    },
    {
      title: "Wildlife Disease Ecology",
      description: "Examining the spread and impact of diseases in wild animal populations.",
      icon: "🦠",
      color: "bg-red-100 border-red-400"
    }
  ];

  return (
    <section id="research" className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">
          Research Interests
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {researchInterests.map((item, index) => (
            <div 
              key={index} 
              className={`${item.color} border-l-4 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-start">
                <span className="text-4xl mr-4">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-emerald-700 mb-4">Current Research Project</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I'm currently working on a research project examining the impact of urban development on local bird populations. This study combines field observations, citizen science data, and GIS mapping to track changes in species diversity and behavior over time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Preliminary findings suggest that certain adaptable species are thriving in urban environments, while more specialized species are experiencing population declines. This research aims to provide recommendations for urban planning that better accommodates wildlife diversity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
