import { useState } from 'react';
import { MapPin, Clock, DollarSign, X } from 'lucide-react';
import { travelPackages, TravelPackage } from '../data/packages';

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);

  return (
    <div className="min-h-screen bg-parchment pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display text-navy mb-4">
            Exclusive Travel Collections
          </h1>
          <p className="text-navy/70 text-lg max-w-2xl mx-auto font-lora">
            Handpicked destinations, bespoke experiences, and unparalleled luxury await you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-display text-gold mb-1">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-2 text-parchment/90 text-sm">
                    <MapPin size={14} />
                    <span>{pkg.destination}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4 text-navy/70 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gold font-medium text-lg">
                    <DollarSign size={18} />
                    <span>{pkg.price.replace('$', '')}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-navy mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-navy/70 flex items-start gap-2"
                      >
                        <span className="text-gold mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    className="flex-1 bg-navy text-parchment py-2.5 text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(27,38,59,0.4)] hover:scale-105"
                  >
                    View Itinerary
                  </button>
                  <button className="flex-1 bg-gold text-navy py-2.5 text-sm tracking-wide font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,160,89,0.6)] hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPackage && (
        <div className="fixed inset-0 bg-navy/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-parchment max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-navy text-parchment p-6 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-display text-gold mb-1">
                  {selectedPackage.title}
                </h2>
                <p className="text-parchment/80">{selectedPackage.destination}</p>
              </div>
              <button
                onClick={() => setSelectedPackage(null)}
                className="text-parchment hover:text-gold transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <img
                  src={selectedPackage.image}
                  alt={selectedPackage.title}
                  className="w-full h-64 object-cover shadow-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 text-navy">
                  <Clock className="text-gold" size={24} />
                  <div>
                    <p className="text-sm text-navy/60">Duration</p>
                    <p className="font-medium">{selectedPackage.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-navy">
                  <DollarSign className="text-gold" size={24} />
                  <div>
                    <p className="text-sm text-navy/60">Starting From</p>
                    <p className="font-medium text-lg">{selectedPackage.price}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-display text-navy mb-4">
                  Experience Highlights
                </h3>
                <ul className="space-y-2">
                  {selectedPackage.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-navy/80"
                    >
                      <span className="text-gold mt-1 text-xl">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-display text-navy mb-4">
                  Detailed Itinerary
                </h3>
                <div className="space-y-3">
                  {selectedPackage.itinerary.map((day, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></div>
                      <p className="text-navy/80">{day}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gold text-navy py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,160,89,0.6)] hover:scale-105">
                Book This Experience
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
