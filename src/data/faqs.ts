import { FAQItem } from '../types';

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'Do you offer on-site and mail-in repair services?',
    answer: 'Yes! You can bring your device directly into our Manahawkin shop (1636 Route 72 W), schedule our Mobile Repair Van to come to your home/workplace, or use our insured Mail-In Service from anywhere in the country — we take care of the rest.'
  },
  {
    id: 'faq-2',
    category: 'turnaround',
    question: 'How long does a typical repair take?',
    answer: 'Most standard repairs — including iPhone screen replacements, battery swaps, and charge port fixes — are completed in 30 to 60 minutes! In-depth motherboard micro-soldering and complex liquid damage restoration generally take 24–48 hours for thorough ultrasonic cleaning and testing.'
  },
  {
    id: 'faq-3',
    category: 'warranty',
    question: 'Is there a warranty on repairs and replacement parts?',
    answer: 'Absolutely. We proudly offer a 60-day shop warranty on all repairs and replacement parts. If the original issue recurs within 60 days without physical or liquid damage, we will re-service your device at zero extra charge.'
  },
  {
    id: 'faq-4',
    category: 'general',
    question: 'What types of electronic devices do you repair?',
    answer: 'We repair all smartphones (Apple iPhone, Samsung Galaxy, Google Pixel, Motorola), iPads and tablets, laptops and MacBooks, smartwatches, and all gaming consoles (PlayStation 5, Xbox Series X/S, Nintendo Switch OLED), including HDMI port replacements and power circuit micro-soldering.'
  },
  {
    id: 'faq-5',
    category: 'turnaround',
    question: 'What if my device won’t turn on or has risk of data loss?',
    answer: 'We prioritize your data. If your device is dead, boot-looping, or water damaged, we perform non-invasive diagnostic triage first. We never wipe devices unless an operating system reinstall is strictly necessary and pre-approved by you.'
  },
  {
    id: 'faq-6',
    category: 'pricing',
    question: 'Do you offer free estimates before servicing?',
    answer: 'Yes! We provide transparent upfront price estimates. For mail-in repairs, there is a $100 diagnostic fee only if you decide not to proceed with the repair after our technician completes a full bench inspection. If you approve the repair, that diagnostic fee is credited directly toward your total.'
  },
  {
    id: 'faq-7',
    category: 'mail-in',
    question: 'How does the Mail-In repair service work?',
    answer: 'It’s a simple 3-step process: 1) Fill out our online mail-in form, 2) Print your generated packing slip with reference barcode and place it in the box with your device, 3) Ship it to our Manahawkin facility. Once fixed and bench-tested, we send you a secure payment link and mail it back insured.'
  },
  {
    id: 'faq-8',
    category: 'warranty',
    question: 'Will repairs void my manufacturer warranty?',
    answer: 'Under the US Magnuson-Moss Warranty Act, third-party repairs using quality parts are legally protected; however, certain manufacturers may decline coverage for components not installed directly by them. We provide our own comprehensive 60-day warranty to give you complete peace of mind.'
  }
];

export const SERVICE_POLICIES = {
  warranty: {
    title: '60-Day Limited Shop Warranty',
    summary: 'Every repair at Digital Doctor Repairs is backed by our full 60-day warranty on both parts and craftsmanship.',
    details: [
      'If any issue from the original work order recurs within 60 days, we perform the service again at no extra charge.',
      'All replacement screens, batteries, and internal modules are guaranteed against factory defects for 60 days.',
      'Warranty coverage requires that the device shows no subsequent physical drops, crushed casing, or moisture/liquid ingress.'
    ]
  },
  repairRisks: {
    title: 'Repair Risks & Circuit Board Disclosure',
    summary: 'Electronic triage requires handling delicate micro-components with utmost care and transparency.',
    details: [
      'Components on liquid-damaged devices oxidize and short-circuit over time. Micro-soldering work is performed to isolate and bridge faulty rails.',
      'Repairs on glued-on assemblies (such as iPad digitizers and modern glass sandwiches) involve precision heating and prying. While our technicians are certified and risks are minimal, glass stress can occur.',
      'Face ID & Touch ID modules on Apple hardware are paired to the original logic board; our team utilizes specialized EEPROM programmer tools to retain True Tone and biometric functions wherever possible.'
    ]
  },
  estimates: {
    title: 'Upfront Estimates & Customer Approval Guarantee',
    summary: 'Zero hidden fees. We never perform billable work without your explicit prior authorization.',
    details: [
      'Initial estimates are based on customer-described symptoms and visual inspection.',
      'If diagnostic bench tests reveal hidden internal damage (e.g. blown capacitor or corroded traces), our technicians pause work immediately and notify you with updated options.',
      'All changes MUST be approved by you before we move forward. You retain full control at every stage.'
    ]
  },
  exclusions: {
    title: 'Warranty Exclusions',
    summary: 'Clear conditions where warranty coverage does not apply.',
    details: [
      'Devices subjected to subsequent accidental drops, crushed enclosures, or liquid immersion after repair.',
      'Third-party software issues, operating system corruption, viruses/malware, or unauthorized modifications (jailbreaks / custom ROMs).',
      'Tampering by unauthorized third parties or opening the device after Digital Doctor service voids the warranty seal.'
    ]
  }
};
