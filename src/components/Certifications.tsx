const Certifications = () => {
  const certificationData = [
    {
      title: "Certificate of Completion",
      organization: "ICMR-National Institute of Nutrition",
      period: "Issued May 2020",
      logo: "icmr.jpg"
    },
    {
      title: "Certificate of Completion of WASH",
      organization: "UNICEF",
      period: "Issued Apr 2020",
      logo: "unicef.jpg"
    },
    {
      title: "Record of Achievement",
      organization: "World Health Organization",
      period: "Issued Apr 2020",
      logo: "world_health_organization_logo.jpg"
    },
    {
      title: "International & National",
      organization: "Aligarh Muslim University",
      period: "Issued May 2018",
      logo: "amu.jpg"
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">
          Licenses & Certifications
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationData.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-600 bg-white flex items-center justify-center">
                    <img 
                      src={`/assets/${item.logo}`} 
                      alt={item.organization} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-emerald-700">{item.title}</h3>
                  <p className="text-gray-800 font-medium">{item.organization}</p>
                  <p className="text-amber-600 text-sm">{item.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;