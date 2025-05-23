import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  MapPin,
  Clock,
  Phone,
  Globe,
  ChevronRight,
  Star,
  X,
  Filter,
  Building2,
  Grid,
  List,
} from "lucide-react";
import { Link } from "react-router-dom";

// Constants for filtering
const businessTypes = [
  "All Types",
  "Shopping",
  "Services",
  "Dining",
  "Entertainment",
  "Health & Wellness",
  "Lodging",
];

const neighborhoods = [
  "All Neighborhoods",
  "Downtown",
  "State Street",
  "Main Street",
  "Buckingham Green",
  "South Main",
  "North Main",
];

// Mock data for businesses
const mockBusinesses = [
  {
    id: 1,
    name: "Doylestown Bookshop",
    type: "Shopping",
    rating: 4.8,
    neighborhood: "Downtown",
    address: "16 S Main St, Doylestown, PA 18901",
    phone: "(215) 230-7610",
    website: "https://doylestownbookshop.com",
    hours: "Mon-Sat: 9am-9pm, Sun: 11am-6pm",
    description:
      "Independent bookstore offering a carefully curated selection of books, gifts, and hosting regular community events.",
    features: [
      "Events Space",
      "Children's Section",
      "Local Authors",
      "Book Club",
    ],
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Honey Restaurant",
    type: "Dining",
    rating: 4.7,
    neighborhood: "State Street",
    address: "42 Shewell Ave, Doylestown, PA 18901",
    phone: "(215) 489-4200",
    website: "https://honeyrestaurant.com",
    hours: "Tue-Sun: 5pm-10pm",
    description:
      "Farm-to-table restaurant offering seasonal American cuisine in an intimate setting.",
    features: ["BYOB", "Outdoor Seating", "Private Events", "Seasonal Menu"],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Doylestown Health",
    type: "Health & Wellness",
    rating: 4.6,
    neighborhood: "West End",
    address: "595 W State St, Doylestown, PA 18901",
    phone: "(215) 345-2200",
    website: "https://doylestownhealth.org",
    hours: "24/7",
    description:
      "Comprehensive healthcare facility offering a wide range of medical services and wellness programs.",
    features: [
      "Emergency Care",
      "Specialty Care",
      "Wellness Programs",
      "Research",
    ],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
  },
];

interface Business {
  id: number;
  name: string;
  type: string;
  rating: number;
  neighborhood: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  description: string;
  features: string[];
  image: string;
}

const BusinessDirectoryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedNeighborhood, setSelectedNeighborhood] =
    useState("All Neighborhoods");
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(
    null,
  );
  const [isSubmitFormOpen, setIsSubmitFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    type: 'Shopping',
    address: '',
    phone: '',
    email: '',
    website: '',
    hours: '',
    description: '',
    features: '',
    image: null as File | null
  });
  const [viewMode, setViewMode] = useState('grid'); // Added state for view mode
  const modalRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitFormOpen(false);
    setFormData({
      businessName: '',
      type: 'Shopping',
      address: '',
      phone: '',
      email: '',
      website: '',
      hours: '',
      description: '',
      features: '',
      image: null
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectedBusiness &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setSelectedBusiness(null);
      }
      if (
        isSubmitFormOpen &&
        formRef.current &&
        !formRef.current.contains(event.target as Node)
      ) {
        setIsSubmitFormOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedBusiness, isSubmitFormOpen]);

  const BusinessDetailModal = ({
    business,
    onClose,
  }: {
    business: Business;
    onClose: () => void;
  }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div
        ref={modalRef}
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-cardinal-red">
                {business.type}
              </span>
              <span className="text-gray-400">•</span>
              <div className="flex items-center">
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium">
                  {business.rating}
                </span>
              </div>
            </div>

            <h2 className="font-playfair text-3xl font-bold mb-4">
              {business.name}
            </h2>
            <p className="text-gray-600 mb-6">{business.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">{business.address}</p>
                    <p className="text-gray-600">{business.neighborhood}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-gray-600">{business.hours}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Contact</p>
                    <p className="text-gray-600">{business.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a
                      href={business.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cardinal-red hover:text-forest-green transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-4">Features</h3>
              <div className="flex flex-wrap gap-2">
                {business.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cardinal-red/10 text-cardinal-red rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      <div className="pt-32">
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setIsSubmitFormOpen(true)}
            className="bg-forest-green text-white px-8 rounded-lg font-semibold hover:bg-cardinal-red transition-colors flex items-center justify-center gap-2 h-[42px]"
          >
            <Building2 size={20} />
            Submit Your Business
          </button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-charcoal-gray font-medium">View:</span>
              <div className="flex gap-2 bg-white rounded-lg p-1 border border-[#333333] h-[42px]">
                <button onClick={() => setViewMode('grid')} className={`px-4 rounded-md flex items-center gap-2 ${viewMode === 'grid' ? 'bg-forest-green text-white' : 'hover:bg-gray-100'}`}>
                  <Grid size={16} /> Grid
                </button>
                <button onClick={() => setViewMode('list')} className={`px-4 rounded-md flex items-center gap-2 ${viewMode === 'list' ? 'bg-forest-green text-white' : 'hover:bg-gray-100'}`}>
                  <List size={16} /> List
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-charcoal-gray font-medium">Sort:</span>
              <div className="flex gap-2 bg-white rounded-lg p-1 border border-[#333333] h-[42px]">
                <button className="px-4 bg-forest-green text-white rounded-md">
                  Recommended
                </button>
                <button className="px-4 hover:bg-gray-100 rounded-md">
                  Near Me
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="lg:w-1/4">
            <div className="border border-[#333333] rounded-lg p-6 sticky top-24">
              <div className="mb-6">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search businesses..."
                    className="w-full pl-10 pr-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-playfair text-lg font-bold mb-3">
                  Business Type
                </h3>
                <div className="space-y-2">
                  {businessTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedType === type
                          ? "bg-cardinal-red text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-playfair text-lg font-bold mb-3">
                  Neighborhood
                </h3>
                <div className="space-y-2">
                  {neighborhoods.map((neighborhood) => (
                    <button
                      key={neighborhood}
                      onClick={() => setSelectedNeighborhood(neighborhood)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedNeighborhood === neighborhood
                          ? "bg-cardinal-red text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {neighborhood}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Business Grid/List */}
          <div className="lg:w-3/4">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockBusinesses.map((business) => (
                  <div
                    key={business.id}
                    className="border border-[#333333] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    onClick={() => setSelectedBusiness(business)}
                  >
                    <div className="relative h-48">
                      <img
                        src={business.image}
                        alt={business.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 px-2 py-1 bg-white/90 rounded-full">
                          <Star
                            size={14}
                            className="text-yellow-400 fill-current"
                          />
                          <span className="text-sm font-medium">
                            {business.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-cardinal-red">
                          {business.type}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm">{business.neighborhood}</span>
                      </div>
                      <h3 className="font-playfair text-lg font-bold mb-2 hover:text-cardinal-red transition-colors">
                        {business.name}
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{business.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          <span>{business.hours}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building2 size={14} />
                          <span className="line-clamp-1">
                            {business.features.join(", ")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {mockBusinesses.map((business) => (
                  <div
                    key={business.id}
                    onClick={() => setSelectedBusiness(business)}
                    className="flex items-center border border-[#333333] rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <img
                      src={business.image}
                      alt={business.name}
                      className="w-24 h-24 object-cover mr-4 rounded-lg"
                    />
                    <div>
                      <h3 className="font-playfair text-lg font-bold mb-1 hover:text-cardinal-red transition-colors">
                        {business.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {business.type} - {business.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Submit Business Form Modal */}
      {isSubmitFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div ref={formRef} className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-playfair text-2xl font-bold">Submit Your Business</h2>
              <button
                onClick={() => setIsSubmitFormOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium">Business Name</label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    className="w-full p-1.5 border border-[#333333] rounded-lg text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium">Business Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full p-1.5 border border-[#333333] rounded-lg text-sm"
                    required
                  >
                    {businessTypes.slice(1).map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-3 sm:col-span-1">
                  <label className="block text-xs font-medium">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-1.5 border border-[#333333] rounded-lg text-sm"
                    required
                  />
                </div>
                <div className="col-span-3 sm:col-span-1">
                  <label className="block text-xs font-medium">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-1.5 border border-[#333333] rounded-lg text-sm"
                    required
                  />
                </div>
                <div className="col-span-3 sm:col-span-1">
                  <label className="block text-xs font-medium">Website</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    className="w-full p-1.5 border border-[#333333] rounded-lg text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium">Address</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full p-1.5 border border-[#333333] rounded-lg text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium">Business Hours</label>
                  <input
                    type="text"
                    value={formData.hours}
                    onChange={(e) => setFormData({...formData, hours: e.target.value})}
                    className="w-full p-1.5 border border-[#333333] rounded-lg text-sm"
                    placeholder="Mon-Fri: 9am-5pm, Sat: 10am-4pm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full p-1.5 border border-[#333333] rounded-lg text-sm"
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium">Features</label>
                  <input
                    type="text"
                    value={formData.features}
                    onChange={(e) => setFormData({...formData, features: e.target.value})}
                    className="w-full p-1.5 border border-[#333333] rounded-lg text-sm"
                    placeholder="Free Parking, WiFi, Outdoor Seating"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium">Business Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFormData({...formData, image: e.target.files?.[0] || null})}
                    className="w-full p-1.5 border border-[#333333] rounded-lg text-sm"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsSubmitFormOpen(false)}
                  className="px-6 py-2 border border-[#333333] rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90"
                >
                  Submit Business
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Business Detail Modal */}
      {selectedBusiness && (
        <BusinessDetailModal
          business={selectedBusiness}
          onClose={() => setSelectedBusiness(null)}
        />
      )}
    </div>
  );
};

export default BusinessDirectoryPage;