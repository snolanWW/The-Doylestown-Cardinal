import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  Building2,
  Users,
  Newspaper,
} from "lucide-react";

const departments = [
  {
    name: "Editorial",
    email: "editorial@thecardinal.com",
    description: "For news tips, corrections, and editorial inquiries",
    icon: Newspaper,
  },
  {
    name: "Advertising",
    email: "advertising@thecardinal.com",
    description: "For advertising and sponsorship opportunities",
    icon: Building2,
  },
  {
    name: "Subscriptions",
    email: "subscriptions@thecardinal.com",
    description: "For subscription and delivery inquiries",
    icon: Users,
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message. We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative h-[45vh]">
        <div className="absolute inset-0 bottom-24 overflow-hidden rounded-2xl shadow-lg mx-auto w-[95%] mt-2">
          <img
            src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&q=80"
            alt="Contact Us"
            className="w-full h-[105%] object-cover blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B]/80 to-charcoal-gray/50" />
        </div>
        <div className="relative max-w-7xl mx-auto pl-4 pr-4 sm:pl-6 sm:px-6 lg:pl-8 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-off-white mb-4">
              Contact
            </h1>
            <p className="text-2xl text-off-white mb-8 font-playfair italic max-w-2xl">
              Get in touch with The Cardinal team!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="pt-4 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                <MapPin className="w-8 h-8 text-cardinal-red" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-charcoal-gray/70">123 Main Street</p>
              <p className="text-charcoal-gray/70">Doylestown, PA 18901</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                <Phone className="w-8 h-8 text-cardinal-red" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Call Us</h3>
              <p className="text-charcoal-gray/70">Main: (215) 555-0123</p>
              <p className="text-charcoal-gray/70">Newsroom: (215) 555-0124</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                <Mail className="w-8 h-8 text-cardinal-red" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Email Us</h3>
              <p className="text-charcoal-gray/70">info@thecardinal.com</p>
              <p className="text-charcoal-gray/70">news@thecardinal.com</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                <Globe className="w-8 h-8 text-cardinal-red" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Hours</h3>
              <p className="text-charcoal-gray/70">Monday - Friday</p>
              <p className="text-charcoal-gray/70">9:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Departments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-cardinal-red/10 rounded-lg">
                    <dept.icon className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold">
                    {dept.name}
                  </h3>
                </div>
                <p className="text-charcoal-gray/70 mb-4">{dept.description}</p>
                <a
                  href={`mailto:${dept.email}`}
                  className="text-cardinal-red hover:text-forest-green transition-colors"
                >
                  {dept.email}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-8">
              <h2 className="font-playfair text-3xl font-bold text-charcoal-gray mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Department *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.department}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          department: e.target.value,
                        }))
                      }
                    >
                      <option value="">Select a department</option>
                      {departments.map((dept) => (
                        <option key={dept.name} value={dept.name}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
