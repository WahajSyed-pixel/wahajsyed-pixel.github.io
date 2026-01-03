export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
  itinerary: string[];
}

export const travelPackages: TravelPackage[] = [
  {
    id: '1',
    title: 'Parisian Grandeur',
    destination: 'Paris, France',
    duration: '7 Days, 6 Nights',
    price: '$12,500',
    image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: [
      'Private Louvre after-hours tour',
      'Michelin-starred dining experiences',
      'Seine River luxury yacht cruise',
      'Exclusive fashion house access',
    ],
    itinerary: [
      'Day 1: Arrival and private transfer to 5-star palace hotel',
      'Day 2: Private Louvre tour and afternoon at Versailles',
      'Day 3: Fashion district exploration with personal stylist',
      'Day 4: Champagne region private tour',
      'Day 5: Seine River cruise and Eiffel Tower private dinner',
      'Day 6: Free day for bespoke experiences',
      'Day 7: Departure with luxury transfer',
    ],
  },
  {
    id: '2',
    title: 'Santorini Serenity',
    destination: 'Santorini, Greece',
    duration: '5 Days, 4 Nights',
    price: '$9,800',
    image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: [
      'Private villa with infinity pool',
      'Helicopter island tour',
      'Sunset catamaran cruise',
      'Private wine tasting experiences',
    ],
    itinerary: [
      'Day 1: VIP arrival and luxury villa check-in',
      'Day 2: Private helicopter tour of the Cyclades',
      'Day 3: Exclusive wine estate visits and tastings',
      'Day 4: Sunset catamaran cruise with private chef',
      'Day 5: Departure with seamless transfer',
    ],
  },
  {
    id: '3',
    title: 'Dubai Opulence',
    destination: 'Dubai, UAE',
    duration: '6 Days, 5 Nights',
    price: '$15,000',
    image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: [
      'Burj Al Arab suite accommodation',
      'Private desert safari with royal treatment',
      'Helicopter city tour',
      'Exclusive shopping experience',
    ],
    itinerary: [
      'Day 1: Arrival and Burj Al Arab suite check-in',
      'Day 2: Private helicopter tour and luxury yacht experience',
      'Day 3: Desert safari with private camp and entertainment',
      'Day 4: Exclusive shopping with personal concierge',
      'Day 5: Spa day and fine dining experiences',
      'Day 6: Departure with VIP airport service',
    ],
  },
  {
    id: '4',
    title: 'Maldivian Escape',
    destination: 'Maldives',
    duration: '8 Days, 7 Nights',
    price: '$18,500',
    image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: [
      'Private overwater villa',
      'Personal butler service',
      'Seaplane transfers',
      'Underwater dining experience',
    ],
    itinerary: [
      'Day 1: Seaplane transfer to private island resort',
      'Day 2-3: Snorkeling, diving, and water sports',
      'Day 4: Private sandbank picnic and sunset cruise',
      'Day 5: Spa treatments and wellness experiences',
      'Day 6: Underwater restaurant dining',
      'Day 7: Beach activities and leisure',
      'Day 8: Departure with seaplane transfer',
    ],
  },
  {
    id: '5',
    title: 'Kyoto Elegance',
    destination: 'Kyoto, Japan',
    duration: '7 Days, 6 Nights',
    price: '$13,200',
    image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: [
      'Traditional ryokan luxury stay',
      'Private geisha performance',
      'Temple and garden exclusive access',
      'Kaiseki dining masterclass',
    ],
    itinerary: [
      'Day 1: Arrival and luxury ryokan check-in',
      'Day 2: Private temple tours with historian guide',
      'Day 3: Tea ceremony and kimono experience',
      'Day 4: Kyoto gardens and Arashiyama bamboo forest',
      'Day 5: Geisha district private tour and performance',
      'Day 6: Kaiseki cooking class with master chef',
      'Day 7: Departure with private transfer',
    ],
  },
  {
    id: '6',
    title: 'Swiss Alpine Retreat',
    destination: 'Zermatt, Switzerland',
    duration: '6 Days, 5 Nights',
    price: '$14,500',
    image: 'https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: [
      'Five-star alpine chalet',
      'Private ski instructor',
      'Helicopter Matterhorn tour',
      'Michelin-starred mountain dining',
    ],
    itinerary: [
      'Day 1: Arrival and luxury chalet check-in',
      'Day 2: Private skiing lessons on pristine slopes',
      'Day 3: Helicopter tour of the Matterhorn',
      'Day 4: Spa and wellness day at resort',
      'Day 5: Mountain top dining experience',
      'Day 6: Departure with private transfer',
    ],
  },
];
