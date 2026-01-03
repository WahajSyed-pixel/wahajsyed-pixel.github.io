import { Link } from 'react-router-dom';
import { Plane, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-parchment">
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(27, 38, 59, 0.7), rgba(27, 38, 59, 0.7)), url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-display text-gold mb-6 tracking-wide">
            Velvet Horizon
          </h1>
          <p className="text-2xl md:text-3xl text-parchment mb-4 font-lora font-light tracking-wider">
            Elegance in Motion
          </p>
          <p className="text-lg text-parchment/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Where luxury transcends travel and becomes an art form. Experience the world through a lens of sophistication and exclusivity.
          </p>
          <Link
            to="/packages"
            className="inline-flex items-center gap-3 bg-gold text-navy px-10 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,160,89,0.6)] hover:scale-105"
          >
            <Sparkles size={20} />
            Explore Collections
          </Link>
        </div>
      </section>

      <section className="py-24 px-6 bg-navy">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display text-gold mb-6">
            Curated Excellence
          </h2>
          <p className="text-parchment/80 text-lg mb-16 max-w-3xl mx-auto leading-relaxed font-lora">
            Every journey we craft is a masterpiece of precision, luxury, and unforgettable moments designed exclusively for the discerning traveler.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Bespoke Experiences',
                description: 'Tailored itineraries crafted around your desires and dreams',
              },
              {
                title: 'Exclusive Access',
                description: 'Private tours and VIP treatment at world-class destinations',
              },
              {
                title: 'Seamless Luxury',
                description: 'From departure to return, every detail managed with perfection',
              },
            ].map((item) => (
              <div key={item.title} className="group">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center group-hover:bg-gold/10 transition-all duration-300">
                    <Plane className="text-gold" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-display text-gold mb-3">
                  {item.title}
                </h3>
                <p className="text-parchment/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display text-navy mb-6">
                Your Journey Awaits
              </h2>
              <p className="text-navy/70 text-lg mb-8 leading-relaxed font-lora">
                Discover meticulously curated travel packages that redefine luxury. From private islands to alpine retreats, each destination promises an experience beyond imagination.
              </p>
              <Link
                to="/packages"
                className="inline-block bg-navy text-parchment px-8 py-3 tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(27,38,59,0.4)] hover:scale-105"
              >
                View Offered Packages
              </Link>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-sm shadow-2xl"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg?auto=compress&cs=tinysrgb&w=800)',
              }}
            ></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-navy/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display text-navy mb-6">
            What Do We Offer?
          </h2>
          <p className="text-navy/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-lora">
            Beyond travel, we provide a suite of premium services designed to elevate every aspect of your journey.
          </p>
          <Link
            to="/services"
            className="inline-block bg-gold text-navy px-10 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,160,89,0.6)] hover:scale-105"
          >
            Discover Our Services
          </Link>
        </div>
      </section>
    </div>
  );
}
