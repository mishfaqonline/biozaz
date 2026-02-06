import React from "react";
import { Users, Award } from "lucide-react";

const AboutPage = () => (
  <section id="about" className="max-w-6xl mx-auto py-16 px-4">
    <div className="flex justify-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 px-6 py-3 rounded-lg shadow-sm bg-gradient-to-r from-teal-50 via-white to-sky-50 border border-slate-200">
        About Us
      </h1>
    </div>

    <div className="bg-white/70 backdrop-blur-lg p-8 md:p-12 rounded-lg mb-12 shadow-sm border border-white/60 text-center transition-transform transform hover:-translate-y-1">
      <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Mission</h2>
      <p className="text-slate-600 font-semibold text-lg leading-relaxed">
        To provide exceptional healthcare services with compassion, dignity, and respect. We are committed to improving the health and well-being of our community through innovative medical care and patient-centered service.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div className="bg-white/70 backdrop-blur-lg p-8 rounded-lg shadow-sm border border-white/60 text-center transition-transform transform hover:-translate-y-1">
        <Users className="w-12 h-12 text-sky-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Team</h3>
        <p className="text-slate-600 font-semibold leading-relaxed">
          Our engineers and medical professionals are highly qualified and dedicated to providing the best care possible. Every team member plays a vital role in patient care.
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-lg p-8 rounded-lg shadow-sm border border-white/60 text-center transition-transform transform hover:-translate-y-1">
        <Award className="w-12 h-12 text-sky-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h3>
        <p className="text-slate-600 font-semibold leading-relaxed">
          To deliver the highest standards of customer service, superior quality, and cutting-edge technological solutions that empower healthcare professionals worldwide.
        </p>
      </div>
    </div>

    <div className="bg-white/70 backdrop-blur-lg p-8 rounded-lg mb-12 shadow-sm border border-white/60 transition-transform transform hover:-translate-y-1">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 text-center">
        Our History
      </h2>
      <p className="text-slate-600 font-semibold leading-relaxed">
        BIOZAZ (Pvt) Ltd is a Pakistan-based company headquartered in Karachi, specializing in the import and export of advanced Medical Devices and IT Solutions for the healthcare industry. We offer a diverse range of medical equipment, including portable ultrasound systems, diagnostic imaging devices, skincare lasers, and other innovative portable technologies. Our IT services, PACS Solutions, Web Applications, and Hospital Management Systems are tailored to meet the evolving needs of modern healthcare facilities. Throughout our journey, we have remained committed to our founding principles of compassionate care, medical excellence, and community service.
      </p>
    </div>
  </section>
);

export default AboutPage;
