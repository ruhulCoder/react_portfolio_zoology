const About = () => {
  return (
    <section id="about" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              As a passionate Neuro-oncology researcher, I investigate the intricate biology of brain tumors, with a focus on glioblastoma dynamics, including tumor heterogeneity, plasticity, and the tumor microenvironment to unravel the pathways driving progression and resistance.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              My work bridges neuro-oncology and cognitive neuroscience, exploring biology-to-behavior links in neuro-developmental disorders and tumor-induced cognitive impairments, mediated by cell signaling, to pioneer targeted therapies that mitigate neurological decline, enhance survival, and improve quality of life.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              As a driven, curious, and compassionate research scholar, I'm committed to translating cutting-edge insights into innovative treatments for patients with brain cancer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;