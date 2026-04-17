const Volunteering = () => {
  const volunteeringData = [
    {
      title: "Member of Organising Committee",
      organization: "Aligarh Muslim University",
      category: "Science and Technology",
      logo: "amu.jpg"
    },
    {
      title: "Coordinator and Volunteers",
      organization: "Aligarh Muslim University",
      category: "Health",
      logo: "amu.jpg"
    },
    {
      title: "Research Volunteer",
      organization: "Aligarh Muslim University",
      category: "Science and Technology",
      logo: "amu.jpg"
    },
    {
      title: "Senior Volunteer",
      organization: "Aligarh Muslim University",
      category: "Environment",
      logo: "amu.jpg"
    }
  ];

  return (
    <section id="volunteering" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">
          Volunteering
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteeringData.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-stone-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
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
                  <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm mt-2">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;