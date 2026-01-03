import { Briefcase, Plane, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Briefcase size={40} />,
      title: 'VIP Concierge',
      description:
        'Your personal luxury liaison available 24/7. From restaurant reservations at the world\'s most exclusive venues to securing last-minute theater tickets, our concierge team handles every detail with discretion and expertise.',
      features: [
        '24/7 dedicated support line',
        'Priority access to sold-out events',
        'Personal shopping assistance',
        'Private driver coordination',
        'Medical and emergency support',
      ],
    },
    {
      icon: <Plane size={40} />,
      title: 'Private Aviation',
      description:
        'Travel on your terms with our curated network of private jet partners. Experience seamless journeys with flexible scheduling, bespoke in-flight service, and access to exclusive terminals worldwide.',
      features: [
        'Light jets to ultra-long-range aircraft',
        'Direct routing to 5,000+ airports',
        'Customized in-flight catering',
        'Pet-friendly travel options',
        'Ground transportation coordination',
      ],
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Bespoke Planning',
      description:
        'Every journey begins with understanding your vision. Our expert travel architects design one-of-a-kind itineraries that reflect your passions, preferences, and desire for authentic luxury experiences.',
      features: [
        'Personalized destination research',
        'Exclusive property access',
        'Cultural immersion experiences',
        'Special occasion coordination',
        'Multi-destination journey planning',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-parchment pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-display text-navy mb-4">
            What We Offer
          </h1>
          <p className="text-navy/70 text-lg max-w-3xl mx-auto leading-relaxed font-lora">
            Beyond destinations, we provide a comprehensive suite of premium services designed to transform your travel into an extraordinary experience of elegance and ease.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="bg-white p-12 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-gold">{service.icon}</div>
                    <h2 className="text-3xl font-display text-navy">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-navy/70 text-lg leading-relaxed mb-8 font-lora">
                    {service.description}
                  </p>
                  <div className="border-t border-navy/10 pt-6">
                    <h3 className="text-sm font-medium text-navy/60 mb-4 tracking-wider uppercase">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-navy/80"
                        >
                          <span className="text-gold mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div
                  className="h-96 bg-cover bg-center shadow-xl"
                  style={{
                    backgroundImage: `url(${
                      index === 0
                        ? 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=800'
                        : index === 1
                        ? 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800'
                        : 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
                    })`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-navy text-center py-16 px-6">
          <h2 className="text-3xl font-display text-gold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-parchment/80 mb-8 max-w-2xl mx-auto font-lora">
            Let us craft an experience tailored exclusively to your vision of luxury travel.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold text-navy px-10 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,160,89,0.6)] hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
