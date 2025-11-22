import canonAplioGo from "./img/ultrasound/canon_aplio_go.jpg";
import toshibaAplio500 from "./img/ultrasound/toshiba_aplio_500.jpg";
import xario from "./img/ultrasound/xario.jpg";
import hydrafacial1 from "./img/skincare/hydrafacial1.jpg";
import hydrafacial2 from "./img/skincare/hydrafacial2.jpg";
import shripl from "./img/skincare/shripl.jpg"; // ADD YOUR IMAGE HERE
import pacsImg2 from "./img/it/pacs2.png";
import pacsImg1 from "./img/it/pacs1.png";
import vitreaImg1 from "./img/it/vitrea1.png";

export const allProducts = [
  {
    id: 1,
    category: "Ultrasound",
    name: "Canon Aplio Go",
    images: [canonAplioGo, canonAplioGo],
    shortSpecs: [
      "17” HD Touchscreen Display",
      "Advanced Doppler Imaging",
      "AI-based Scan Assist",
      "Lightweight Portable System"
    ],
    features: [
      "Superb Micro-Vascular Imaging (SMI)",
      "Wide-range transducer compatibility",
      "Wireless data transfer"
    ],
    specs: {
      display: "17-inch Full HD Touchscreen",
      doppler: "Color, Power Doppler",
      probes: "Linear, Convex, Cardiac, Endocavity",
      imagingModes: "B-mode, M-mode, SMI, 4D",
      storage: "512GB SSD",
      connectivity: "USB, WiFi, DICOM, LAN",
      weight: "Less than 8 kg",
    },
    fullDetails: "Canon Aplio Go full details here...",
  },

  {
    id: 2,
    category: "Ultrasound",
    name: "Toshiba Aplio 500",
    images: [toshibaAplio500, toshibaAplio500],
    shortSpecs: [
      "Premium High-End System",
      "Crystal-Clear Doppler Imaging",
      "Elastography Support",
      "Advanced Imaging Engine"
    ],
    features: ["Precision Imaging Engine", "Elastography support"],
    specs: {
      display: "19-inch HD LED Display",
      doppler: "Color, PW Doppler",
      probes: "Convex, Linear, Phased array",
      imagingModes: "2D, M-mode, 3D/4D",
      storage: "1TB Internal",
      connectivity: "DICOM, USB, LAN",
      weight: "Approx 85 kg",
    },
    fullDetails: "Toshiba Aplio 500 full details here...",
  },

  {
    id: 3,
    category: "Ultrasound",
    name: "Xario 200",
    images: [xario, xario],
    shortSpecs: [
      "Compact + High Performance",
      "High-Resolution B-Mode",
      "Fast Scan Optimization",
      "Portable Design"
    ],
    features: ["Beamforming architecture", "Quick Scan one-touch optimization"],
    specs: {
      display: "19-inch articulating HD monitor",
      doppler: "Color, Power, PW Doppler",
      probes: "Convex, Linear, Endocavity, Cardiac",
      imagingModes: "2D, M-mode, Doppler",
      storage: "500GB Internal HDD",
      connectivity: "DICOM, USB, LAN",
      weight: "Approx 55 kg",
    },
    fullDetails: "Xario 200 full details here...",
  },

  // -----------------------
  // SKINCARE PRODUCTS
  // -----------------------

  {
    id: 10,
    category: "Skincare",
    name: "Professional Hydrafacial Machine",
    images: [hydrafacial1, hydrafacial2],
    shortSpecs: [
      "3-in-1 Hydro-Dermabrasion System",
      "Deep Cleansing & Exfoliation",
      "Hydration Boosting Serum Infusion",
      "Suitable for All Skin Types"
    ],
    features: [
      "Hydro-dermabrasion technology for deep pore cleansing",
      "Vacuum suction for removing blackheads",
      "LED therapy compatibility",
      "Serum infusion & oxygen hydration system",
      "Touchscreen control panel",
      "Low-noise, high-efficiency motor"
    ],
    specs: {
      power: "350W High-Performance Motor",
      suctionPower: "0–90 kPa Adjustable",
      functions: "Cleansing, Exfoliation, Hydration, Rejuvenation",
      screen: "7-inch full touch display",
      waterTank: "Dual water tank (Clean + Waste) 2L each",
      voltage: "110V / 220V, 50-60Hz",
      weight: "18 kg",
      warranty: "1 Year Service Warranty"
    },
    fullDetails:
      "This professional Hydrafacial machine is designed for deep cleansing, exfoliation, hydration, and rejuvenation treatments. Equipped with powerful suction and a multi-step skin enhancement system, it effectively removes impurities, hydrates the skin, and enhances natural radiance. Suitable for salons, dermatology clinics, and skincare professionals.",
  },

  // ⭐ NEW PRODUCT ADDED ⭐
  {
    id: 11,
    category: "Skincare",
    name: "SHR IPL OPT Hair Removal with Pico Laser – Smooth, Clear Skin",
    images: [shripl, shripl], // add more if available
    shortSpecs: [
      "SHR Super Hair Removal Technology",
      "OPT Fast Cooling System",
      "Pico Laser for Pigmentation Removal",
      "Pain-Free, Safe for All Skin Types"
    ],
    features: [
      "SHR + IPL + OPT multiple modes",
      "Pico laser for pigmentation, dark spots, melasma",
      "Auto-ice cooling handle reduces skin irritation",
      "Fast 10-shots-per-second operation",
      "Works on full body – face, arms, legs, underarm",
      "Safe on sensitive skin"
    ],
    specs: {
      power: "2000W OPT Power",
      wavelength: "430–1200nm (SHR/IPL), Pico 1064nm & 532nm",
      spotSize: "15×50 mm large area",
      cooling: "Sapphire + Water + Semiconductor cooling",
      laserFrequency: "1–10 Hz fast shooting",
      energy: "1–50 J/cm² adjustable",
      voltage: "220V / 110V",
      warranty: "1 Year Warranty"
    },
    fullDetails:
      "This SHR IPL OPT Hair Removal machine combined with Pico Laser provides painless, fast, and effective hair removal with deep skin rejuvenation. The Pico laser helps treat pigmentation, freckles, dark spots, and acne marks. Ideal for beauty salons, dermatology clinics, and professional skincare studios.",
  },

{
  id: 20,
  category: "Healthcare IT",
  name: "PACS System (Picture Archiving & Communication System)",
  images: [pacsImg2, pacsImg1],
  shortSpecs: [
    "High-speed Image Storage",
    "Multi-Modality Support (CT/MRI/US/X-Ray)",
    "HL7 & DICOM Compatibility",
    "Secure Cloud & Local Server Options"
  ],
  features: [
    "Instant access to radiology images from any workstation",
    "Supports CT, MRI, X-Ray, Ultrasound, Mammography",
    "Secure encrypted sharing between departments",
    "AI-assisted workflow optimization",
    "Automatic image routing and backup",
    "Multi-user dashboard & reporting tools"
  ],
  specs: {
    storage: "Up to 50TB (Expandable to 200TB)",
    modalities: "CT, MRI, Ultrasound, CR/DR, Fluoroscopy",
    compliance: "DICOM 3.0, HL7",
    server: "Linux/Windows, RAID 5/6 Architecture",
    backup: "Cloud + Local Hybrid Backup",
    viewing: "Web-based viewer + Desktop client",
    networking: "1Gbps / 10Gbps",
    warranty: "2 Year Service Warranty"
  },
  fullDetails:
    "Our PACS System enables hospitals and clinics to manage, store, and retrieve imaging data instantly. Designed for multi-modality integration, fast viewing, and secure sharing across departments. Ideal for radiology centers, hospitals, and diagnostic labs."
},

{
  id: 21,
  category: "Healthcare IT",
  name: "Vitrea 3D Advanced Visualization Software",
  images: [vitreaImg1, vitreaImg1],
  shortSpecs: [
    "3D/4D Medical Imaging",
    "AI-Powered Visualization",
    "Multi-Modality Support",
    "Cloud or Local Deployment"
  ],
  features: [
    "Advanced 3D/4D medical imaging reconstruction",
    "AI-assisted workflow for radiologists",
    "Supports CT, MRI, PET, and Ultrasound",
    "Cardiac, neuro, and vascular visualization tools",
    "Multi-user collaboration system",
    "Fast processing on GPU-optimized workstations"
  ],
  specs: {
    modalities: "CT, MRI, PET, Ultrasound",
    processing: "GPU-accelerated rendering",
    deployment: "Cloud / On-Premise",
    viewing: "Web-based & Desktop Viewer",
    systemReq: "NVIDIA GPU, 16GB RAM, i7 Processor",
    export: "DICOM, MP4, STL (3D print)",
    warranty: "1 Year Software Support"
  },
  fullDetails:
    "Vitrea is a world-class advanced visualization platform used by radiologists for 3D/4D medical imaging. It provides deep diagnostic insights with AI-powered reconstruction and supports all major imaging modalities. Ideal for cardiac, neuro, and advanced radiology applications."
},
];
