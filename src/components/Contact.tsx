import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-emerald-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-300">
          Get In Touch
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <a href="#" className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center hover:bg-amber-500 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  {/* <a href="#" className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center hover:bg-amber-500 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center hover:bg-amber-500 transition-colors">
                    <Github className="w-5 h-5" />
                  </a> */}
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              {/* <form> */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-emerald-600 focus:outline-none focus:ring-2 focus:ring-amber-300 text-white placeholder-emerald-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-emerald-600 focus:outline-none focus:ring-2 focus:ring-amber-300 text-white placeholder-emerald-200"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-emerald-600 focus:outline-none focus:ring-2 focus:ring-amber-300 text-white placeholder-emerald-200"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-emerald-600 focus:outline-none focus:ring-2 focus:ring-amber-300 text-white placeholder-emerald-200"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  // type="submit"
                  className="w-full py-3 px-6 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors shadow-md"
                >
                  Send Message
                </button>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
