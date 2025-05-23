import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Check, Smartphone, Laptop, Archive, Bell, BookOpen, Download, Newspaper, Wifi } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const plans = [
  {
    id: 'basic',
    name: 'Basic Digital',
    price: '$3.99',
    period: 'per month',
    features: [
      'Unlimited article access',
      'Digital edition viewer',
      'Breaking news alerts',
      'Cancel anytime'
    ],
    popular: false
  },
  {
    id: 'premium',
    name: 'Premium Digital',
    price: '$39.99',
    period: 'per year',
    features: [
      'Unlimited article access',
      'Digital edition viewer',
      'Complete archive access',
      'Breaking news alerts',
      'Ad-free reading experience',
      'Exclusive digital content',
      'Save 17% vs monthly'
    ],
    popular: true
  },
  {
    id: 'student',
    name: 'Student Digital',
    price: '$19.99',
    period: 'per year',
    features: [
      'Unlimited article access',
      'Digital edition viewer',
      'Breaking news alerts',
      'Valid student ID required'
    ],
    popular: false
  }
];

const benefits = [
  {
    title: 'Read Anywhere',
    description: 'Access The Cardinal on any device, anytime.',
    icon: Smartphone
  },
  {
    title: 'Digital Edition',
    description: 'Enjoy our newspaper in a beautiful digital format.',
    icon: Laptop
  },
  {
    title: 'Complete Archive',
    description: 'Access our entire digital archive dating back to 1970.',
    icon: Archive
  },
  {
    title: 'Breaking News',
    description: 'Get instant alerts for important local stories.',
    icon: Bell
  }
];

const features = [
  {
    title: 'Digital Edition Viewer',
    description: 'Read The Cardinal exactly as it appears in print, enhanced with digital features.',
    icon: BookOpen,
    details: [
      'Zoom and search capabilities',
      'Article sharing',
      'Mobile-optimized reading',
      'Downloadable PDF editions'
    ]
  },
  {
    title: 'Offline Reading',
    description: 'Download editions to read offline, perfect for travel or areas with limited connectivity.',
    icon: Download,
    details: [
      'Save articles for later',
      'Download full editions',
      'Sync across devices',
      'Bookmark favorite stories'
    ]
  },
  {
    title: 'Premium Content',
    description: 'Access exclusive digital-only content and in-depth coverage.',
    icon: Newspaper,
    details: [
      'Extended coverage',
      'Interactive features',
      'Exclusive interviews',
      'Special digital editions'
    ]
  },
  {
    title: 'Seamless Access',
    description: 'Enjoy a smooth reading experience across all your devices.',
    icon: Wifi,
    details: [
      'No article limits',
      'Ad-free experience',
      'Fast-loading pages',
      'Cross-device sync'
    ]
  }
];

const DigitalSubscriptionsPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative h-[55vh]">
        <div className="absolute inset-0 bottom-24 overflow-hidden rounded-2xl shadow-lg mx-auto w-[95%] mt-2">
          <img 
            src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80"
            alt="Digital Subscription"
            className="w-full h-[105%] object-cover blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B]/80 to-charcoal-gray/50" />
        </div>
        <div className="relative max-w-7xl mx-auto pl-8 pr-4 sm:pl-12 sm:px-6 lg:pl-16 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-off-white mb-4">
              Digital Access
            </h1>
            <p className="hero-subtitle">
              Stay connected with Doylestown's most trusted news source, anytime, anywhere
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#pricing"
                className="hidden md:inline-flex bg-forest-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-cardinal-red transition-colors items-center gap-2"
              >
                View Plans
                <ChevronRight size={20} />
              </a>
              <Link
                to="/print-subscriptions"
                className="bg-white text-cardinal-red px-8 py-3 rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
              >
                Print Subscriptions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="pt-4 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-12">
            Digital Subscription Benefits
          </h2>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                  <benefit.icon className="w-8 h-8 text-cardinal-red" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-charcoal-gray/70">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden w-full">
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {benefits.map((benefit, index) => (
                  <CarouselItem key={index}>
                    <div className="text-center p-4">
                      <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                        <benefit.icon className="w-8 h-8 text-cardinal-red" />
                      </div>
                      <h3 className="font-playfair text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-charcoal-gray/70">{benefit.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-12">
            Digital Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#F2F0EF] rounded-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-cardinal-red/10 rounded-lg">
                    <feature.icon className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold">{feature.title}</h3>
                    <p className="text-charcoal-gray/70">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-forest-green" />
                      <span className="text-charcoal-gray/80">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-12">
            Digital Subscription Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map(plan => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-lg p-8 flex flex-col h-full ${
                  plan.popular ? 'ring-2 ring-cardinal-red shadow-xl' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cardinal-red text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="font-playfair text-4xl font-bold">{plan.price}</span>
                    <span className="text-charcoal-gray/60 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors">
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-[#F2F0EF] rounded-lg p-6">
              <h3 className="font-bold mb-2">How do I access my digital subscription?</h3>
              <p className="text-charcoal-gray/70">
                After subscribing, you'll receive login credentials via email. You can access 
                your subscription immediately on any device through our website or mobile app.
              </p>
            </div>
            <div className="bg-[#F2F0EF] rounded-lg p-6">
              <h3 className="font-bold mb-2">Can I share my subscription?</h3>
              <p className="text-charcoal-gray/70">
                Digital subscriptions are for individual use only. However, you can read on 
                multiple devices using the same account.
              </p>
            </div>
            <div className="bg-[#F2F0EF] rounded-lg p-6">
              <h3 className="font-bold mb-2">What's included in the archive access?</h3>
              <p className="text-charcoal-gray/70">
                Premium subscribers get access to our complete digital archive dating back to 1970, 
                including all articles, special editions, and historical coverage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalSubscriptionsPage;