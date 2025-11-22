import React from "react";
import Slider from "../components/Slider";
import { Users, Award, Sparkles, Monitor, Radio, Server, BrainCircuit, Waves } from "lucide-react";

const Home = ({ sliderImages }) => {
const services = [
{ title: "Skincare", desc: "Advanced aesthetic and dermatology devices for skin rejuvenation, laser hair removal, and overall skin health.", icon: <Sparkles className="w-12 h-12 text-white mx-auto mb-4 neon-icon" /> },
{ title: "Ultrasound", desc: "Sharper, faster, clearer — Portable Ultrasound that sets new standards.", icon: <Waves className="w-12 h-12 text-white mx-auto mb-4 neon-icon" /> },
{ title: "PACS", desc: "Simplify diagnostics with next-generation PACS technology.", icon: <Monitor className="w-12 h-12 text-white mx-auto mb-4 neon-icon" /> },
{ title: "Healthcare IT Services", desc: "Empowering healthcare with innovative digital solutions.", icon: <Server className="w-12 h-12 text-white mx-auto mb-4 neon-icon" /> },
{ title: "Vitrea", desc: "Vitrea by Biozaz — visualizing the future of healthcare.", icon: <BrainCircuit className="w-12 h-12 text-white mx-auto mb-4 neon-icon" /> },
];

return ( <section className="pt-[120px] px-4 max-w-6xl mx-auto">

  {/* Hero Section - Clean with futuristic slider */}
  <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
    <div className="md:w-1/2 space-y-6 order-2 md:order-1 text-justify">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug text-center md:text-left">
        Welcome to <span className="text-teal-600">Biozaz</span>
      </h1>
      <h4 className="text-lg md:text-xl text-gray-700 font-semibold text-center md:text-left">
        Medical Devices & Healthcare Technology
      </h4>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
        Here we offer a complete range of high-quality medical, biomedical, and aesthetic equipment.
        From portable ultrasound systems to advanced imaging solutions, our products are sourced from
        trusted brands to ensure precision, reliability, and value for every healthcare facility.
        We also provide cutting-edge skincare designed for skin rejuvenation, laser hair removal,
        dermatology treatments, and aesthetic innovations — bringing science and beauty together
        for healthier, glowing skin. Additionally, our PACS solutions, Vitrea software, and
        healthcare IT services empower hospitals and clinics with smarter workflow management,
        seamless image sharing, and advanced diagnostic visualization.
      </p>
    </div>

    <div className="md:w-1/2 w-full order-1 md:order-2 p-4 rounded-xl shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
      <Slider images={sliderImages} />
    </div>
  </div>

  {/* Services Section - Neon Applied */}
  <div id="services" className="py-16 max-w-6xl mx-auto px-4">
    <div className="flex justify-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white px-6 py-3 rounded-lg shadow-lg bg-gradient-to-r from-teal-500/70 to-teal-700/70 backdrop-blur-md neon-glow-heading">
        Our Services
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      {services.map((service, i) => (
        <div
          key={i}
          className="relative bg-black/20 backdrop-blur-xl p-6 rounded-lg shadow-lg text-center border-t-4 border-teal-500 transition transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.7)] hover:animate-glow-card"
        >
          {service.icon}
          <h3 className="text-xl font-bold mb-2 text-white neon-text-hover">{service.title}</h3>
          <p className="text-white text-sm md:text-base">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* About Section */}
  <div id="about" className="py-16 max-w-6xl mx-auto px-4">
    <div className="flex justify-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white px-6 py-3 rounded-lg shadow-lg bg-gradient-to-r from-teal-500/70 to-teal-700/70 backdrop-blur-md neon-glow-heading">
        About Us
      </h2>
    </div>

    <div className="bg-black/20 text-white p-8 md:p-12 rounded-lg mb-12 text-center backdrop-blur-xl shadow-lg">
      <h3 className="text-3xl font-bold mb-4 neon-text-hover">Our Mission</h3>
      <p className="text-lg leading-relaxed">
        To provide exceptional healthcare services with compassion, dignity, and respect. We are committed to improving the health and well-being of our community through innovative medical care and patient-centered service.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div className="bg-black/20 p-8 rounded-lg shadow-lg text-center backdrop-blur-xl">
        <Users className="w-12 h-12 text-white mx-auto mb-4 neon-icon" />
        <h3 className="text-2xl font-bold mb-4 text-white neon-text-hover">Our Team</h3>
        <p className="text-white leading-relaxed">
          Our engineers and medical professionals are highly qualified and dedicated to providing the best care possible. Every team member plays a vital role in patient care.
        </p>
      </div>

      <div className="bg-black/20 p-8 rounded-lg shadow-lg text-center backdrop-blur-xl">
        <Award className="w-12 h-12 text-white mx-auto mb-4 neon-icon" />
        <h3 className="text-2xl font-bold mb-4 text-white neon-text-hover">Our Vision</h3>
        <p className="text-white leading-relaxed">
          To deliver the highest standards of customer service, superior quality, and cutting-edge technological solutions that empower healthcare professionals worldwide.
        </p>
      </div>
    </div>

    <div className="bg-black/20 p-8 md:p-12 rounded-lg backdrop-blur-xl shadow-lg">
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center neon-text-hover">
        Our History
      </h3>
      <p className="text-white leading-relaxed text-justify">
        BIOZAZ (Pvt) Ltd is a Pakistan-based company headquartered in Karachi, specializing in the import and export of advanced Medical Devices and IT Solutions for the healthcare industry. We offer a diverse range of medical equipment, including portable ultrasound systems, diagnostic imaging devices, skincare lasers, and other innovative portable technologies. Our IT services, PACS Solutions, Web Applications, and Hospital Management Systems are tailored to meet the evolving needs of modern healthcare facilities. Throughout our journey, we have remained committed to our founding principles of compassionate care, medical excellence, and community service.
      </p>
    </div>
  </div>

  {/* Neon glow animation */}
  <style>{`
    @keyframes glow-heading {
      0%, 100% { box-shadow: 0 0 12px rgba(0,255,255,0.6); }
      50% { box-shadow: 0 0 25px rgba(0,255,255,0.9); }
    }
    @keyframes glow-card {
      0%, 100% { box-shadow: 0 0 8px rgba(0,255,255,0.2); }
      50% { box-shadow: 0 0 18px rgba(0,255,255,0.5); }
    }
    @keyframes icon-glow {
      0%, 100% { filter: drop-shadow(0 0 2px rgba(0,255,255,0.5)); }
      50% { filter: drop-shadow(0 0 8px rgba(0,255,255,1)); }
    }
    .neon-glow-heading {
      animation: glow-heading 2s infinite alternate;
      text-shadow: 0 0 8px rgba(0,255,255,0.6);
    }
    .animate-glow-card {
      animation: glow-card 2s infinite alternate;
    }
    .neon-icon:hover {
      animation: icon-glow 1.5s infinite alternate;
      transform: scale(1.1);
      transition: transform 0.3s;
    }
    .neon-text-hover:hover {
      text-shadow: 0 0 6px rgba(0,255,255,0.8), 0 0 12px rgba(0,255,255,0.5);
      transition: text-shadow 0.3s;
    }
  `}</style>
</section>
);
};

export default Home;
