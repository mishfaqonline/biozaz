import canonAplioGo from "./img/ultrasound/canon_aplio_go.jpg";
import toshibaAplio500 from "./img/ultrasound/toshiba_aplio_500.jpg";
import xario from "./img/ultrasound/xario.jpg";
import hydrafacial1 from "./img/skincare/hydrafacial1.jpg";
import hydrafacial2 from "./img/skincare/hydrafacial2.jpg";
import shripl from "./img/skincare/shripl.jpg";
import pacsImg2 from "./img/it/pacs2.png";
import pacsImg1 from "./img/it/pacs1.png";
import vitreaImg1 from "./img/it/vitrea1.png";

export const allProducts = [
  // -----------------------
  // ULTRASOUND PRODUCTS
  // -----------------------
  {
    id: 1,
    category: "Ultrasound",
    name: "Canon Aplio Go",
    images: [canonAplioGo, canonAplioGo],
    shortSpecs: [
      "17” HD Touchscreen",
      "Advanced Doppler Imaging",
      "AI-Based Scan Assist",
      "Lightweight & Portable"
    ],
    features: [
      "Superb Micro-Vascular Imaging (SMI) for precise blood flow visualization",
      "Wide transducer compatibility for multiple clinical applications",
      "Wireless data transfer & cloud integration",
      "Ergonomic and lightweight design for portability"
    ],
    specs: {
      display: "17-inch Full HD Touchscreen",
      doppler: "Color Doppler, Power Doppler, SMI",
      probes: "Linear, Convex, Cardiac, Endocavity",
      imagingModes: "B-mode, M-mode, SMI, 4D imaging",
      storage: "512GB SSD",
      connectivity: "USB, WiFi, DICOM, LAN",
      weight: "Under 8 kg",
      warranty: "1 Year Manufacturer Warranty"
    },
    fullDetails:
      "Canon Aplio Go is a portable ultrasound system designed for rapid, high-quality imaging in clinical settings. With AI-powered scan assist, SMI technology, and broad transducer compatibility, it ensures precision diagnostics. Ideal for hospitals, clinics, and mobile imaging services."
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
    features: [
      "Precision imaging engine for highly accurate diagnostics",
      "Advanced elastography to assess tissue stiffness",
      "High-end transducer variety for multiple applications",
      "Optimized workflow with customizable presets"
    ],
    specs: {
      display: "19-inch HD LED Display",
      doppler: "Color Doppler, PW Doppler",
      probes: "Convex, Linear, Phased Array",
      imagingModes: "2D, M-mode, 3D/4D",
      storage: "1TB Internal",
      connectivity: "DICOM, USB, LAN",
      weight: "Approx 85 kg",
      warranty: "2 Years Manufacturer Warranty"
    },
    fullDetails:
      "Toshiba Aplio 500 is a high-end ultrasound platform offering unmatched image clarity and workflow efficiency. Its advanced imaging engine, combined with elastography and Doppler imaging, allows precise diagnostics across cardiology, radiology, and general imaging applications."
  },
  {
    id: 3,
    category: "Ultrasound",
    name: "Xario 200",
    images: [xario, xario],
    shortSpecs: [
      "Compact High-Performance Design",
      "High-Resolution B-Mode",
      "Fast Scan Optimization",
      "Portable for Multiple Settings"
    ],
    features: [
      "Advanced beamforming architecture for superior image quality",
      "Quick scan one-touch optimization",
      "Lightweight and ergonomic for mobile imaging",
      "Supports wide range of probes for clinical versatility"
    ],
    specs: {
      display: "19-inch articulating HD monitor",
      doppler: "Color, Power, PW Doppler",
      probes: "Convex, Linear, Endocavity, Cardiac",
      imagingModes: "2D, M-mode, Doppler",
      storage: "500GB Internal HDD",
      connectivity: "DICOM, USB, LAN",
      weight: "Approx 55 kg",
      warranty: "1 Year Manufacturer Warranty"
    },
    fullDetails:
      "Xario 200 combines high performance with compact portability. Designed for multi-specialty imaging, it offers superior B-mode resolution, fast optimization, and a lightweight chassis for flexible deployment in clinics and hospitals."
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
      "3-in-1 Hydro-Dermabrasion",
      "Deep Cleansing & Exfoliation",
      "Hydration Infusion",
      "All Skin Types"
    ],
    features: [
      "Hydro-dermabrasion technology for deep pore cleansing",
      "Vacuum suction removes blackheads & impurities",
      "LED light therapy for skin rejuvenation",
      "Serum infusion & oxygen hydration system",
      "User-friendly touchscreen interface",
      "Quiet, high-efficiency motor"
    ],
    specs: {
      power: "350W High-Performance Motor",
      suctionPower: "0–90 kPa Adjustable",
      functions: "Cleansing, Exfoliation, Hydration, Rejuvenation",
      screen: "7-inch full touch display",
      waterTank: "Dual 2L tanks (Clean + Waste)",
      voltage: "110V / 220V, 50-60Hz",
      weight: "18 kg",
      warranty: "1 Year Service Warranty"
    },
    fullDetails:
      "This Hydrafacial system provides deep cleansing, exfoliation, and hydration for all skin types. Ideal for salons and dermatology clinics, it combines multi-step skincare technology with LED therapy and infusion systems to achieve radiant skin."
  },
  {
    id: 11,
    category: "Skincare",
    name: "SHR IPL OPT Hair Removal with Pico Laser",
    images: [shripl, shripl],
    shortSpecs: [
      "SHR Super Hair Removal",
      "OPT Cooling Technology",
      "Pico Laser Pigmentation Treatment",
      "Pain-Free & Safe"
    ],
    features: [
      "SHR + IPL + OPT multi-mode hair removal",
      "Pico laser for pigmentation, freckles, dark spots",
      "Auto-ice cooling handle minimizes discomfort",
      "Fast shooting (10 shots/sec) for efficiency",
      "Works on full body: face, arms, legs, underarm",
      "Safe for sensitive skin"
    ],
    specs: {
      power: "2000W OPT",
      wavelength: "430–1200nm (SHR/IPL), Pico 1064nm & 532nm",
      spotSize: "15×50 mm large area",
      cooling: "Sapphire + Water + Semiconductor",
      laserFrequency: "1–10 Hz adjustable",
      energy: "1–50 J/cm²",
      voltage: "110V/220V",
      warranty: "1 Year Manufacturer Warranty"
    },
    fullDetails:
      "This SHR IPL OPT Hair Removal machine combines SHR, IPL, and Pico laser technologies for painless, effective hair removal and skin rejuvenation. Ideal for beauty clinics and professional dermatology treatments."
  },

  // -----------------------
  // HEALTHCARE IT PRODUCTS
  // -----------------------
  {
    id: 20,
    category: "Healthcare IT",
    name: "PACS System",
    images: [pacsImg2, pacsImg1],
    shortSpecs: [
      "High-Speed Image Storage",
      "Multi-Modality Support",
      "HL7 & DICOM Compatible",
      "Secure Cloud & Local Options"
    ],
    features: [
      "Instant access to radiology images from any workstation",
      "Supports CT, MRI, Ultrasound, X-Ray",
      "Encrypted secure sharing across departments",
      "AI-assisted workflow optimization",
      "Automatic image routing & backup",
      "Multi-user dashboards and reporting"
    ],
    specs: {
      storage: "Up to 50TB, expandable to 200TB",
      modalities: "CT, MRI, Ultrasound, CR/DR, Fluoroscopy",
      compliance: "DICOM 3.0, HL7",
      server: "Linux/Windows, RAID 5/6",
      backup: "Cloud + Local hybrid",
      viewing: "Web & Desktop clients",
      networking: "1Gbps / 10Gbps",
      warranty: "2 Year Service Warranty"
    },
    fullDetails:
      "Our PACS system enables hospitals and clinics to store, retrieve, and securely share medical images instantly. It supports multi-modality integration, high-speed access, and AI-assisted workflow for radiologists."
  },
  {
    id: 21,
    category: "Healthcare IT",
    name: "Vitrea 3D Visualization Software",
    images: [vitreaImg1, vitreaImg1],
    shortSpecs: [
      "3D/4D Medical Imaging",
      "AI-Powered Visualization",
      "Multi-Modality Support",
      "Cloud/Local Deployment"
    ],
    features: [
      "Advanced 3D/4D medical image reconstruction",
      "AI-assisted workflow for radiologists",
      "Supports CT, MRI, PET, Ultrasound",
      "Cardiac, neuro, vascular visualization tools",
      "Collaborative multi-user environment",
      "GPU-optimized fast rendering"
    ],
    specs: {
      modalities: "CT, MRI, PET, Ultrasound",
      processing: "GPU-accelerated rendering",
      deployment: "Cloud / On-Premise",
      viewing: "Web & Desktop Viewer",
      systemReq: "NVIDIA GPU, 16GB RAM, i7 Processor",
      export: "DICOM, MP4, STL",
      warranty: "1 Year Software Support"
    },
    fullDetails:
      "Vitrea provides advanced 3D/4D visualization for radiology professionals. With AI-powered reconstruction and multi-modality support, it delivers precise diagnostic insights and collaborative workflows for advanced medical imaging."
  }
];
