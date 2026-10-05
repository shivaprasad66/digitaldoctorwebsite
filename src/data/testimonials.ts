export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  device: string;
  review: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Michael R.',
    location: 'Manahawkin, NJ',
    rating: 5,
    date: '2 weeks ago',
    device: 'iPhone 15 Pro Max Screen',
    review: 'Had my shattered screen replaced in literally 35 minutes! Dave was super friendly, showed me the new OLED test, and my phone looks brand new. The 60-day warranty gave me great peace of mind. Best repair shop in Ocean County!',
    verified: true
  },
  {
    id: 't-2',
    name: 'Sarah L.',
    location: 'Barnegat, NJ',
    rating: 5,
    date: '1 month ago',
    device: 'PS5 HDMI Port Soldering',
    review: 'My son accidentally yanked the HDMI cable and bent the internal pins on his PS5. Two other shops told me to buy a new console. Digital Doctor micro-soldered a brand new port and cleaned the cooling fans within 24 hours. Works flawlessly in 4K HDR!',
    verified: true
  },
  {
    id: 't-3',
    name: 'Captain Tom G.',
    location: 'Long Beach Island, NJ',
    rating: 5,
    date: '3 weeks ago',
    device: 'Mobile Repair Van Unit',
    review: 'The mobile van service is a game changer! Ryan showed up right at our dock on LBI with a fully equipped tech lab inside the van. Fixed both my iPad battery and my work laptop screen without me having to take time off work.',
    verified: true
  },
  {
    id: 't-4',
    name: 'Elena K.',
    location: 'Philadelphia, PA (Mail-In)',
    rating: 5,
    date: 'Last month',
    device: 'Mail-In iPad Air 4',
    review: 'Used the mail-in service from Philly. Super smooth process: printed the packing slip, mailed it on Monday, got updates by text every step of the way, and had my tablet back by Friday safely packaged. Absolutely phenomenal service.',
    verified: true
  }
];

export const PRESS_FEATURE = {
  publication: 'The Sandpaper',
  headline: "The Doctor's on the Way: Digital Doctor Repairs Takes Services on the Road",
  excerpt: 'Whether you have a crack on your iPhone screen or your game console isn’t working the way it used to, Digital Doctor Repairs is leading the way in bringing your electronic devices back to life. Recently, the shop, located on Route 72 West in Manahawkin, launched its new Mobile Repair Unit...',
  link: 'https://www.thesandpaper.net/articles/the-doctors-on-the-way-digital-doctor-repairs-takes-services-on-the-road/',
  date: 'Local Press Feature',
  readTime: '3 min read'
};
