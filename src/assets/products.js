import canonAplioGo from "./img/ultrasound/canon_aplio_go.png";
import toshibaAplio500 from "./img/ultrasound/toshiba_aplio_500.jpg";
import xario from "./img/ultrasound/xario.jpg";

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
];
