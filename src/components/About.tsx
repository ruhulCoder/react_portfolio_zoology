import React from 'react';

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
              I'm a passionate zoology student with a deep fascination for wildlife and ecosystem conservation. My journey in the field of zoology began during childhood with countless hours spent observing local wildlife and reading books about animals from around the world.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Currently pursuing my Bachelor's degree in Zoology with a focus on conservation biology and animal behavior. I'm particularly interested in how animals adapt to changing environments and the crucial role of biodiversity in maintaining healthy ecosystems.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Outside of academics, I volunteer at the local wildlife rehabilitation center and participate in citizen science projects tracking migratory species in our region. I believe that understanding animal behavior and biology is key to addressing the conservation challenges we face today.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              My goal is to contribute to the field through rigorous research and public education, helping to create a world where humans and wildlife can thrive together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
