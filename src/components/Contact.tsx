import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-emerald-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-300">
          Get In Touch
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-emerald-700/50 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mt-1 mr-3 text-amber-300" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-emerald-100">intezaralisiaz@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 mt-1 mr-3 text-amber-300" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-emerald-100">+91 9557415212</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 text-amber-300" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-emerald-100">Aligarh Muslim University, Aligarh</p>
                  <p className="text-emerald-100">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-3">Social Profiles</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/intezar-ali-a69b961b1/" className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center hover:bg-amber-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
