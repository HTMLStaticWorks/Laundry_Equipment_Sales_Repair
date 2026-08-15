# Industrial Laundry Equipment Sales & Repair — Premium B2B Platform

A **completely original, next-generation multi-page B2B website** for **Laundry Equipment Sales & Repair**. The site adopts an **"Industrial Precision Commerce"** aesthetic inspired by stainless-steel machinery showrooms, technical engineering diagrams, measurement callouts, blueprint grids, and modern product comparison matrix interfaces.

---

## Brand Visual Identity & Design System

### 1. Brand Color Palette (CSS Custom Properties)
- **Primary (`#182126`)**: Deep Charcoal
- **Secondary (`#3E6878`)**: Industrial Steel Blue
- **Accent (`#F28C28`)**: Safety Orange
- **Light Background (`#F3F5F4`)**: Technical Off-White
- **Dark Background (`#101719`)**: Industrial Night Mode

### 2. Typography
- **Headings**: `Space Grotesk` (Google Font)
- **Body Text**: `Manrope` (Google Font)

---

## File Structure

```text
c:\slot aug\2\Laundry Equipment Sales & Repair\
├── index.html                  # Home 1 — Industrial Showroom View
├── home2.html                  # Home 2 — Industrial Catalog Experience
├── products.html               # Equipment Catalog with Filter Sidebar
├── product-details.html        # LX-450 Product Detail & Tech Spec View
├── comparison.html             # Side-by-Side Equipment Comparison Matrix
├── services.html               # B2B Technical Service & Repair Solutions
├── about.html                  # Engineering Philosophy & 18-Yr Milestones
├── blog.html                   # Industrial Knowledge Center
├── blog-single.html            # Technical Guide Article View
├── contact.html                # B2B Enquiry Form & Dispatch Hotline
├── login.html                  # B2B Client Portal Login
├── register.html               # B2B Client Portal Registration
├── 404.html                    # Custom 404 Error Page
├── coming-soon.html            # Launch Countdown & Maintenance Page
│
├── assets/
│   ├── css/
│   │   ├── style.css           # Core Design Tokens, Layout, Components & Dark Theme
│   │   └── rtl.css             # Right-to-Left (RTL) Layout & Mirror Drawer Adjustments
│   │
│   └── js/
│       └── main.js             # Theme Toggle, RTL Toggle, Mobile Drawer,
│                               # Interactive Machine Selector, Catalog Filter,
│                               # Side-by-Side Matrix, Animated Stat Counters,
│                               # Gallery Thumbnails, Accordions & Form Validation
│
└── README.md                   # Project Documentation
```

---

## Key Features & Interactive Tools

1. **Sticky Header & Responsive Mobile Drawer (Strictly <=1024px)**:
   - Full desktop navigation header above 1024px.
   - At 1024px and below: Displays strictly **Logo + Hamburger** at the far right corner.
   - Triggers full-height dark industrial drawer with touch-friendly navigation, theme toggle, RTL toggle, and quote CTA.

2. **Interactive Equipment Selector ("Built Around Your Operation")**:
   - Filter by Business Type (Laundromat, Hotel, Hospital, Restaurant, Apartment, Industrial Laundry) and Capacity (10–60+ KG).
   - Real-time JavaScript computation updating recommended machine model, capacity, efficiency ratings, dimensions, and warranty package.

3. **Dynamic Catalog Filtering (`products.html`)**:
   - Filter by Category (Washers, Dryers, Ironers, OEM Spare Parts) and Capacity.
   - Live JavaScript element visibility filtering.

4. **Side-by-Side Spec Comparison Matrix (`comparison.html`)**:
   - Clean technical comparison table for evaluating G-Force extraction, water consumption per cycle, drum materials, microprocessor features, and warranty tiers.

5. **"Industrial Night Mode" & Full RTL Support**:
   - Theme toggle persisted in `localStorage`.
   - Right-to-Left (RTL) toggle (`dir="rtl"`) with mirrored drawer slide animations and icon rotations.

6. **Zero Duplicate Images Guarantee**:
   - Every single hero, category, product card, industry list preview, service section, and blog post uses a distinct, contextually relevant image URL.
