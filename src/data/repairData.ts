import { RepairCategory, RepairModel, RepairIssue, TrackingTicket } from '../types';

export const REPAIR_CATEGORIES: RepairCategory[] = [
  {
    id: 'phones',
    name: 'Smartphones & iPhones',
    icon: 'Smartphone',
    popularBrands: ['Apple', 'Samsung', 'Google', 'Motorola'],
    description: 'Cracked glass, OLED display lines, fast battery drain, charging issues & water exposure.'
  },
  {
    id: 'tablets',
    name: 'iPads & Tablets',
    icon: 'Tablet',
    popularBrands: ['Apple iPad', 'Samsung Tab', 'Microsoft Surface'],
    description: 'Precision digitizer & LCD replacements, frame bending fix, battery swaps & ports.'
  },
  {
    id: 'laptops',
    name: 'Laptops & MacBooks',
    icon: 'Laptop',
    popularBrands: ['Apple Mac', 'HP', 'Dell', 'Lenovo', 'Asus'],
    description: 'Screen replacement, trackpad/keyboard repair, SSD upgrades, battery and thermal service.'
  },
  {
    id: 'consoles',
    name: 'Gaming Consoles',
    icon: 'Gamepad2',
    popularBrands: ['PlayStation', 'Xbox', 'Nintendo'],
    description: 'PS5 & Xbox HDMI port replacement, overheating fan clean, optical drive and power triage.'
  },
  {
    id: 'microsoldering',
    name: 'Micro-Soldering & Board Triage',
    icon: 'Cpu',
    popularBrands: ['All Brands', 'Logic Boards', 'Storage Chips'],
    description: 'Component-level motherboard repair, liquid damage ultrasonic cleaning, chip trace repairs & emergency data extraction.'
  },
  {
    id: 'smartwatches',
    name: 'Smartwatches',
    icon: 'Watch',
    popularBrands: ['Apple Watch', 'Galaxy Watch'],
    description: 'Prying & sapphire glass replacement, battery swap, sensor triage and seal renewal.'
  }
];

export const REPAIR_MODELS: Record<string, RepairModel[]> = {
  phones: [
    { id: 'ip-16pm', categoryId: 'phones', brand: 'Apple', name: 'iPhone 16 Pro Max', releaseYear: 2024 },
    { id: 'ip-16p', categoryId: 'phones', brand: 'Apple', name: 'iPhone 16 Pro', releaseYear: 2024 },
    { id: 'ip-16', categoryId: 'phones', brand: 'Apple', name: 'iPhone 16 / 16 Plus', releaseYear: 2024 },
    { id: 'ip-15pm', categoryId: 'phones', brand: 'Apple', name: 'iPhone 15 Pro Max', releaseYear: 2023 },
    { id: 'ip-15p', categoryId: 'phones', brand: 'Apple', name: 'iPhone 15 Pro', releaseYear: 2023 },
    { id: 'ip-15', categoryId: 'phones', brand: 'Apple', name: 'iPhone 15 / 15 Plus', releaseYear: 2023 },
    { id: 'ip-14pm', categoryId: 'phones', brand: 'Apple', name: 'iPhone 14 Pro / Pro Max', releaseYear: 2022 },
    { id: 'ip-14', categoryId: 'phones', brand: 'Apple', name: 'iPhone 14 / 14 Plus', releaseYear: 2022 },
    { id: 'ip-13pm', categoryId: 'phones', brand: 'Apple', name: 'iPhone 13 Pro / Pro Max', releaseYear: 2021 },
    { id: 'ip-13', categoryId: 'phones', brand: 'Apple', name: 'iPhone 13 / 13 Mini', releaseYear: 2021 },
    { id: 'ip-12', categoryId: 'phones', brand: 'Apple', name: 'iPhone 12 / 12 Pro / Max', releaseYear: 2020 },
    { id: 'ip-11', categoryId: 'phones', brand: 'Apple', name: 'iPhone 11 / 11 Pro / Max', releaseYear: 2019 },
    { id: 'ip-se', categoryId: 'phones', brand: 'Apple', name: 'iPhone SE (2020 / 2022)', releaseYear: 2022 },
    { id: 'sam-s24u', categoryId: 'phones', brand: 'Samsung', name: 'Galaxy S24 Ultra', releaseYear: 2024 },
    { id: 'sam-s24', categoryId: 'phones', brand: 'Samsung', name: 'Galaxy S24 / S24+', releaseYear: 2024 },
    { id: 'sam-s23', categoryId: 'phones', brand: 'Samsung', name: 'Galaxy S23 / S23 Ultra', releaseYear: 2023 },
    { id: 'sam-zfold', categoryId: 'phones', brand: 'Samsung', name: 'Galaxy Z Fold 5 / 6', releaseYear: 2024 },
    { id: 'sam-zflip', categoryId: 'phones', brand: 'Samsung', name: 'Galaxy Z Flip 5 / 6', releaseYear: 2024 },
    { id: 'goog-pixel8', categoryId: 'phones', brand: 'Google', name: 'Pixel 8 / 8 Pro / 9 Pro', releaseYear: 2024 },
    { id: 'moto-razr', categoryId: 'phones', brand: 'Motorola', name: 'Moto Razr+ / Ultra', releaseYear: 2024 }
  ],
  tablets: [
    { id: 'ipad-pro129', categoryId: 'tablets', brand: 'Apple', name: 'iPad Pro 12.9" (5th / 6th Gen)', releaseYear: 2022 },
    { id: 'ipad-pro11', categoryId: 'tablets', brand: 'Apple', name: 'iPad Pro 11" (3rd / 4th Gen)', releaseYear: 2022 },
    { id: 'ipad-air5', categoryId: 'tablets', brand: 'Apple', name: 'iPad Air (4th / 5th Gen)', releaseYear: 2022 },
    { id: 'ipad-10', categoryId: 'tablets', brand: 'Apple', name: 'iPad 10th Gen (10.9")', releaseYear: 2022 },
    { id: 'ipad-9', categoryId: 'tablets', brand: 'Apple', name: 'iPad 9th Gen (10.2")', releaseYear: 2021 },
    { id: 'ipad-mini6', categoryId: 'tablets', brand: 'Apple', name: 'iPad Mini 6', releaseYear: 2021 },
    { id: 'sam-tab-s9', categoryId: 'tablets', brand: 'Samsung', name: 'Galaxy Tab S9 / S9+ / Ultra', releaseYear: 2023 },
    { id: 'sam-tab-a', categoryId: 'tablets', brand: 'Samsung', name: 'Galaxy Tab A9 / A11+ 5G', releaseYear: 2023 }
  ],
  laptops: [
    { id: 'mbp-14-16', categoryId: 'laptops', brand: 'Apple', name: 'MacBook Pro 14" / 16" (M1 / M2 / M3)', releaseYear: 2023 },
    { id: 'mba-13-15', categoryId: 'laptops', brand: 'Apple', name: 'MacBook Air 13" / 15" (M1 / M2 / M3)', releaseYear: 2023 },
    { id: 'hp-spectre', categoryId: 'laptops', brand: 'HP', name: 'HP Spectre x360 / Envy', releaseYear: 2023 },
    { id: 'dell-xps', categoryId: 'laptops', brand: 'Dell', name: 'Dell XPS 13 / 15 / 17', releaseYear: 2023 },
    { id: 'lenovo-thinkpad', categoryId: 'laptops', brand: 'Lenovo', name: 'ThinkPad X1 / Yoga Series', releaseYear: 2023 },
    { id: 'gaming-laptop', categoryId: 'laptops', brand: 'MSI / Asus', name: 'MSI Sword / Asus ROG Gaming Laptop', releaseYear: 2023 }
  ],
  consoles: [
    { id: 'ps5-disc', categoryId: 'consoles', brand: 'Sony PlayStation', name: 'PlayStation 5 (Disc / Slim)', releaseYear: 2020 },
    { id: 'ps5-digital', categoryId: 'consoles', brand: 'Sony PlayStation', name: 'PlayStation 5 Digital Edition', releaseYear: 2020 },
    { id: 'ps5-portal', categoryId: 'consoles', brand: 'Sony PlayStation', name: 'PlayStation Portal Remote Player', releaseYear: 2023 },
    { id: 'xbox-series-x', categoryId: 'consoles', brand: 'Microsoft Xbox', name: 'Xbox Series X 1TB', releaseYear: 2020 },
    { id: 'xbox-series-s', categoryId: 'consoles', brand: 'Microsoft Xbox', name: 'Xbox Series S', releaseYear: 2020 },
    { id: 'switch-oled', categoryId: 'consoles', brand: 'Nintendo', name: 'Nintendo Switch OLED / Standard', releaseYear: 2021 }
  ],
  microsoldering: [
    { id: 'board-liquid', categoryId: 'microsoldering', brand: 'All Brands', name: 'Liquid Damage Ultrasonic Restoration', releaseYear: 2024 },
    { id: 'board-hdmi', categoryId: 'microsoldering', brand: 'Sony / Xbox / PC', name: 'SMD HDMI / USB-C Port Re-soldering', releaseYear: 2024 },
    { id: 'board-power', categoryId: 'microsoldering', brand: 'Logic Boards', name: 'Short Circuit & PMIC Power Rail Repair', releaseYear: 2024 },
    { id: 'board-data', categoryId: 'microsoldering', brand: 'All Devices', name: 'Emergency Chip-Off Data Recovery', releaseYear: 2024 }
  ],
  smartwatches: [
    { id: 'aw-ultra', categoryId: 'smartwatches', brand: 'Apple', name: 'Apple Watch Ultra 1 / 2', releaseYear: 2023 },
    { id: 'aw-s9', categoryId: 'smartwatches', brand: 'Apple', name: 'Apple Watch Series 9 / 8 / 7', releaseYear: 2023 },
    { id: 'gw-6', categoryId: 'smartwatches', brand: 'Samsung', name: 'Galaxy Watch 6 / 5 Classic', releaseYear: 2023 }
  ]
};

export const REPAIR_ISSUES: RepairIssue[] = [
  {
    id: 'screen-replacement',
    name: 'Cracked Screen / OLED Display Replacement',
    category: 'Display',
    basePrice: 89,
    estimatedMinutes: 45,
    description: 'Replacement of shattered glass, bleeding OLED, black screen, or touch unresponsive panels with OEM-grade display.',
    commonSymptoms: ['Spiderweb cracks', 'Flickering green lines', 'Ghost touching', 'Black screen with sound']
  },
  {
    id: 'battery-replacement',
    name: 'Battery Replacement & Health Renewal',
    category: 'Power',
    basePrice: 59,
    estimatedMinutes: 30,
    description: 'Fresh high-capacity battery installation. Restores 100% battery health and stops unexpected shutdowns.',
    commonSymptoms: ['Drains rapidly in 2-3 hours', 'Shuts down at 20%', 'Battery swelling / casing lifting', 'Device gets very hot']
  },
  {
    id: 'charging-port',
    name: 'Charging Port Repair / Replacement',
    category: 'Port',
    basePrice: 65,
    estimatedMinutes: 45,
    description: 'Precision cleaning or replacement of worn, bent, or loose Lightning, USB-C, or proprietary charging ports.',
    commonSymptoms: ['Must hold cable at an angle', 'Cable falls out easily', 'Slow charging or moisture detected error', 'No power input']
  },
  {
    id: 'liquid-damage',
    name: 'Liquid / Water Damage Diagnostic & Ultrasonic Bath',
    category: 'Diagnostics',
    basePrice: 99,
    estimatedMinutes: 120,
    description: 'Complete disassembly, ultrasonic chemical bath to eliminate corrosion, dry-out chamber, and circuit board trace inspection.',
    commonSymptoms: ['Dropped in pool/toilet', 'Coffee/soda spill', 'Corrosion around connectors', 'Won’t boot after drying in rice']
  },
  {
    id: 'hdmi-port',
    name: 'HDMI Port & Board Soldering (Consoles / Laptops)',
    category: 'Soldering',
    basePrice: 119,
    estimatedMinutes: 60,
    description: 'Microsoldering replacement of sheared or broken HDMI pins on PS5, Xbox Series X, or laptops using microscope and hot air station.',
    commonSymptoms: ['Bent pins inside HDMI port', 'White light on PS5 but no TV picture', 'Static / flickering output', 'Loose connector']
  },
  {
    id: 'back-glass',
    name: 'Back Glass Housing Replacement',
    category: 'Housing',
    basePrice: 79,
    estimatedMinutes: 60,
    description: 'Laser-assisted or cold-removal back glass replacement to restore clean aesthetics and structural water-resistance.',
    commonSymptoms: ['Cracked rear glass panel', 'Sharp glass shards peeling', 'Wireless charging pad exposed']
  },
  {
    id: 'camera-repair',
    name: 'Camera Lens & Sensor Replacement',
    category: 'Optics',
    basePrice: 69,
    estimatedMinutes: 40,
    description: 'Replace cracked exterior sapphire lens or vibrating, blurry autofocus optical image stabilization sensor.',
    commonSymptoms: ['Camera vibrates/buzzes', 'Black screen on camera app', 'Cracked lens causing foggy photos', 'Face ID / sensor errors']
  },
  {
    id: 'data-recovery',
    name: 'Dead Device Data Recovery & Backup',
    category: 'Data',
    basePrice: 129,
    estimatedMinutes: 90,
    description: 'Temporary motherboard jump-starts and chip-level data harvesting to rescue precious photos, contacts, and work files.',
    commonSymptoms: ['Device completely dead', 'Boot loop Apple logo', 'Need critical business/family photos', 'Insurance salvage claim']
  }
];

export const DEMO_TRACKING_TICKETS: Record<string, TrackingTicket> = {
  'DDR-8429': {
    ticketId: 'DDR-8429',
    customerName: 'Marcus Sterling',
    device: 'Apple iPhone 15 Pro (Natural Titanium)',
    issue: 'Cracked OLED Screen + Battery Swap',
    serviceType: 'In-Store Express',
    currentStep: 4,
    status: 'Master Technician Repairing',
    statusDate: 'Today at 3:15 PM',
    estimatedCompletion: 'Ready by 4:30 PM Today',
    technician: 'Senior Tech Dave (Cert #4092)',
    steps: [
      { title: 'Device Checked In & Disinfected', description: 'Intake inspection logged, serial verified, pre-test checklist completed.', completed: true, current: false, timestamp: '1:45 PM' },
      { title: 'Diagnostic Bench Inspection', description: 'Face ID sensors verified intact, chassis alignment checked.', completed: true, current: false, timestamp: '2:10 PM' },
      { title: 'OEM Grade Parts Allocated', description: 'Super Retina XDR OLED assembly & genuine 3274mAh battery pulled from stock.', completed: true, current: false, timestamp: '2:35 PM' },
      { title: 'Repair in Progress', description: 'Technician installing waterproof adhesive seals & calibrating ambient light sensors.', completed: false, current: true, timestamp: '3:15 PM' },
      { title: '18-Point Quality Control & Bench Test', description: 'Touch responsiveness, battery cycle test, True Tone transfer, speaker decibels.', completed: false, current: false },
      { title: 'Ready for Customer Pickup', description: 'Sanitized, sealed in protective sleeve with 60-day warranty certificate.', completed: false, current: false }
    ],
    notes: 'Customer requested 60-day warranty certificate and tempered glass screen protector application.',
    warrantyEnds: '60 Days From Pickup'
  },
  'DDR-9104': {
    ticketId: 'DDR-9104',
    customerName: 'Jessica Alvarez',
    device: 'Sony PlayStation 5 (Disc Edition)',
    issue: 'Broken HDMI Port Micro-Soldering',
    serviceType: 'Mobile Van Unit',
    currentStep: 5,
    status: 'Final 18-Point Quality Testing',
    statusDate: 'Today at 2:50 PM',
    estimatedCompletion: 'Van Arriving in 25 minutes',
    technician: 'Tech Ryan (Mobile Unit Alpha)',
    steps: [
      { title: 'Mobile Dispatch Booked', description: 'Manahawkin mobile repair unit dispatched to customer driveway.', completed: true, current: false, timestamp: '12:30 PM' },
      { title: 'Intake & Microscope Inspection', description: 'HDMI trace pads inspected under 40x microscope. 2 pins broken.', completed: true, current: false, timestamp: '1:10 PM' },
      { title: 'Board Desoldering & Cleaning', description: 'Lead-free solder removed, pads tinned with low-melt alloy.', completed: true, current: false, timestamp: '1:40 PM' },
      { title: 'New Reinforced HDMI Port Installed', description: 'Heavy-duty gold-plated 4K 120Hz HDMI port micro-soldered.', completed: true, current: false, timestamp: '2:15 PM' },
      { title: 'Thermal Cleaning & 4K Bench Test', description: 'Liquid metal repasted, heatsink dust blasted, running 4K 120Hz HDR burn-in test.', completed: false, current: true, timestamp: '2:50 PM' },
      { title: 'Hand-Off to Customer', description: 'Delivered at customer doorstep with demonstration & 60-day guarantee.', completed: false, current: false }
    ],
    notes: 'Cleaned heatsink dust as complimentary bonus. Outputting clean 4K 120Hz video now.',
    warrantyEnds: '60 Days From Today'
  },
  'DDR-7321': {
    ticketId: 'DDR-7321',
    customerName: 'Robert Vance',
    device: 'Apple iPad Air 4th Gen (Sky Blue)',
    issue: 'Digitizer Shattered + Frame Dent',
    serviceType: 'Mail-In Service',
    currentStep: 6,
    status: 'Shipped Back via UPS Insured (Tracking: 1Z9999999999999999)',
    statusDate: 'Yesterday at 5:00 PM',
    estimatedCompletion: 'Delivered by Tomorrow 2 PM',
    technician: 'Lead Specialist Amanda',
    steps: [
      { title: 'Mail Package Received at Manahawkin Shop', description: 'Package scanned in, unboxing video recorded for security.', completed: true, current: false, timestamp: 'Day 1' },
      { title: 'Diagnosis & Customer Approval', description: 'Frame straightened on corner press, quote approved by customer.', completed: true, current: false, timestamp: 'Day 2' },
      { title: 'OEM Parts Allocated', description: 'Liquid Retina display assembly matched and checked.', completed: true, current: false, timestamp: 'Day 2' },
      { title: 'Precision Installation', description: 'Cleanroom installation, adhesive cured under UV heat press.', completed: true, current: false, timestamp: 'Day 3' },
      { title: 'Quality Assurance & Diagnostic Pass', description: 'Apple Pencil latency tested, touch grid verified 100%.', completed: true, current: false, timestamp: 'Day 3' },
      { title: 'Boxed & Shipped via UPS Insured', description: 'Double boxed with bubble wrap. Tracking number sent via SMS/Email.', completed: true, current: false, timestamp: 'Yesterday' }
    ],
    notes: 'Device safely restored and insured for full replacement value.',
    warrantyEnds: '60 Days from Delivery'
  }
};
