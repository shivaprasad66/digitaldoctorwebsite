# Digital Doctor Repairs — Modern Web Platform Redesign

A redesign of the official website for **[Digital Doctor Repairs](https://www.digitaldocrepairs.com/)** (located at 1636 Route 72 W, Manahawkin, NJ 08050 • (609) 994-3235).

This modern web application transforms the previous cluttered Wix template into a high-performance, conversion-optimized, responsive web experience.

---

## 🌟 Key Features & UX/UI Upgrades

### 1. Instant Interactive Repair Price Estimator
- **4-Step Wizard**:
  1. **Category**: Smartphones & iPhones, iPads & Tablets, Laptops & MacBooks, Gaming Consoles (PS5, Xbox, Nintendo Switch), Micro-Soldering / Logic Boards, Smartwatches.
  2. **Model Selector**: iPhone 16 Pro Max down to iPhone 11/SE, Galaxy S24 Ultra, iPad Pro, PS5 Disc/Slim, Xbox Series X, HP Spectre, etc.
  3. **Issue Selector**: Cracked OLED Display, Battery Renewal, Charging Port, Water Damage Ultrasonic Diagnostic, HDMI Port Soldering, Back Glass, Camera Sensor, Chip Data Recovery.
  4. **Service Mode**: 🏬 In-Store Walk-In, 🚐 Mobile Van Unit, 📦 Nationwide Mail-In.
- **Dynamic Pricing Engine**: Calculates accurate price estimates, turnaround minutes, data preservation priority, and 60-day warranty coverage.
- **One-Click Reservation**: Instant lock-in with generated reference ticket ID (e.g. `#DDR-4829`) and appointment time selector.

### 2. The 3 Service Modalities Showcase
- **🏬 In-Store Express Walk-In**: 1636 Route 72 W, Manahawkin NJ. 45–60 min repairs, Wi-Fi customer lounge.
- **🚐 Mobile Repair Van Unit ("The Doctor's on the Way")**: Featured in local press (*The Sandpaper*). Dispatched directly to driveways, offices, and docks across Ocean County.
- **📦 Nationwide Mail-In Service**: 3-step mailing portal with instant printable packing slip generation, barcoding, and insured return delivery.

### 3. Real-Time Repair Bench Tracker (`#DDR-8429`)
- Search any ticket or test live demo tickets:
  - `DDR-8429` (iPhone 15 Pro on bench)
  - `DDR-9104` (PS5 HDMI port on mobile van)
  - `DDR-7321` (iPad Air mailed back)
- Visual 6-stage timeline (Check-in, Diagnosis, Parts, Active Soldering, 18-Point QC Test, Ready/Shipped).
- Live technician notes and warranty certificate link.

### 4. Certified Pre-Owned Hardware Store & Cart
- Real catalog extracted directly from Digital Doctor Repairs' inventory:
  - Samsung Galaxy Tab A11+ 5G ($299)
  - Xbox Series X 1TB Preowned ($550)
  - iPad Air 4th Gen ($299)
  - Moto Razr Ultra 2025 512GB ($499)
  - HP Spectre x360 Convertible ($650)
  - Android 11 Mini Bluetooth Projector ($100), and more!
- Category filtering, live search keyword filter, in-stock toggle, and price sorting.
- Interactive **Product Detail Modal** with battery health rating, specs, and condition assurance.
- Slide-over **Cart Drawer** with live subtotal, NJ sales tax calculation, free in-store pickup toggle, and simulated checkout.

### 5. Dedicated 3-Step Mail-In Wizard & Printable Packing Slip
- Step 1: Device model, serial/IMEI, passcode, symptoms, service turnaround preference (Standard vs Expedited).
- Step 2: Customer contact, return address, transparent diagnostic fee disclosure.
- Step 3: Generates a printable packing slip with reference barcode and shipping label address.

### 6. Transparency: 60-Day Limited Warranty & Legal Terms
- Categorized tabs:
  - 60-Day Shop Warranty on parts and labor
  - Upfront Estimates & Customer Sign-Off Guarantee
  - Repair Risks & Circuit Board disclosures
  - Clear Warranty Exclusions

### 7. Searchable Knowledge Base & FAQs
- Filter by: General, Turnaround Times, Pricing, Mail-In Service, Warranty.
- Dynamic instant search bar and expandable accordions.

### 8. Store Location & Interactive Contact Form
- Storefront photography, operating hours (Mon-Fri 9-7, Sat 10-6, Sun 10-4), click-to-call, Google Maps driving directions, and message contact form.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism Utilities
- **Icons**: Lucide React + Custom Brand SVGs
- **Bundler & Tooling**: Vite 8.3
- **Typography**: Outfit (Headings) + Plus Jakarta Sans (Body)

---

## 🚀 Running the Project

```bash
cd /root/digitaldoc-website
npm run dev -- --host 0.0.0.0 --port 5173
```

Visit: `http://localhost:5173`
