import React from "react";
import Slider from "./Slider";
import { allimages } from "../assets/img";
import { Users, Award, Sparkles, Monitor, Server, BrainCircuit, Waves } from "lucide-react";

const HomePage = () => {
  const services = [
    {
      title: "Skincare",
      desc: "Advanced aesthetic and dermatology devices for skin rejuvenation, laser hair removal, and overall skin health.",
      icon: <Sparkles className="w-12 h-12 text-sky-600 mx-auto mb-4" />
    },
    {
      title: "Ultrasound",
      desc: "Sharper, faster, clearer — Portable Ultrasound that sets new standards.",
      icon: <Waves className="w-12 h-12 text-sky-600 mx-auto mb-4" />
    },
    {
      title: "PACS",
      desc: "Simplify diagnostics with next-generation PACS technology.",
      icon: <Monitor className="w-12 h-12 text-sky-600 mx-auto mb-4" />
    },
    {
      title: "Healthcare IT Services",
      desc: "Empowering healthcare with innovative digital solutions.",
      icon: <Server className="w-12 h-12 text-sky-600 mx-auto mb-4" />
    },
    {
      title: "Vitrea",
      desc: "Vitrea by Biozaz — visualizing the future of healthcare.",
      icon: <BrainCircuit className="w-12 h-12 text-sky-600 mx-auto mb-4" />
    }
  ];

  return (
    <section className="pt-[120px] px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="md:w-1/2 space-y-6 order-2 md:order-1 text-justify">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-snug text-center md:text-left">
            Welcome to <span className="text-sky-700">Biozaz</span>
          </h1>
          <h4 className="text-lg md:text-xl text-slate-700 font-semibold text-center md:text-left">
            Medical Devices & Healthcare Technology
          </h4>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
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

        <div className="md:w-1/2 w-full order-1 md:order-2 p-4 rounded-xl shadow-lg bg-white/70 border border-white/60 backdrop-blur-lg">
          <Slider images={allimages} />
        </div>
      </div>

      <div id="services" className="py-16 max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 px-6 py-3 rounded-lg shadow-sm bg-gradient-to-r from-teal-50 via-white to-sky-50 border border-slate-200">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative bg-white/70 backdrop-blur-lg p-6 rounded-lg shadow-sm text-center border border-white/60 transition transform hover:-translate-y-1 hover:shadow-md"
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 text-sm md:text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="about" className="py-16 max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 px-6 py-3 rounded-lg shadow-sm bg-gradient-to-r from-teal-50 via-white to-sky-50 border border-slate-200">
            About Us
          </h2>
        </div>

        <div className="bg-white/70 text-slate-700 p-8 md:p-12 rounded-lg mb-12 text-center shadow-sm border border-white/60 backdrop-blur-lg">
          <h3 className="text-3xl font-bold mb-4 text-slate-900">Our Mission</h3>
          <p className="text-lg leading-relaxed">
            To provide exceptional healthcare services with compassion, dignity, and respect. We are committed to improving the health and well-being of our community through innovative medical care and patient-centered service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/70 p-8 rounded-lg shadow-sm text-center border border-white/60 backdrop-blur-lg">
            <Users className="w-12 h-12 text-sky-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Team</h3>
            <p className="text-slate-600 leading-relaxed">
              Our engineers and medical professionals are highly qualified and dedicated to providing the best care possible. Every team member plays a vital role in patient care.
            </p>
          </div>

          <div className="bg-white/70 p-8 rounded-lg shadow-sm text-center border border-white/60 backdrop-blur-lg">
            <Award className="w-12 h-12 text-sky-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To deliver the highest standards of customer service, superior quality, and cutting-edge technological solutions that empower healthcare professionals worldwide.
            </p>
          </div>
        </div>

        <div className="bg-white/70 p-8 md:p-12 rounded-lg shadow-sm border border-white/60 backdrop-blur-lg">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            Our History
          </h3>
          <p className="text-slate-600 leading-relaxed text-justify">
            BIOZAZ (Pvt) Ltd is a Pakistan-based company headquartered in Karachi, specializing in the import and export of advanced Medical Devices and IT Solutions for the healthcare industry. We offer a diverse range of medical equipment, including portable ultrasound systems, diagnostic imaging devices, skincare lasers, and other innovative portable technologies. Our IT services, PACS Solutions, Web Applications, and Hospital Management Systems are tailored to meet the evolving needs of modern healthcare facilities. Throughout our journey, we have remained committed to our founding principles of compassionate care, medical excellence, and community service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
