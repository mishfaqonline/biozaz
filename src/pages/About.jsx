import React from "react";
import { Users, Award, Sparkles } from "lucide-react";

const AboutSection = () => (

  <section id="about" className="max-w-6xl mx-auto py-16 px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
      About Us
    </h1>


{/* Our Mission */}
<div className="bg-gradient-to-r from-teal-500 to-cyan-400 text-white p-8 md:p-12 rounded-lg mb-12 text-center">
  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
  <p className="text-lg leading-relaxed">
    To provide exceptional healthcare services with compassion, dignity, and respect. We are committed to improving the health and well-being of our community through innovative medical care and patient-centered service.
  </p>
</div>

{/* Our Team & Vision */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
  <div className="bg-white p-8 rounded-lg shadow-lg text-center">
    <Users className="w-12 h-12 text-teal-500 mx-auto mb-4" />
    <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Team</h3>
    <p className="text-gray-600 leading-relaxed">
      Our engineers and medical professionals are highly qualified and dedicated to providing the best care possible. Every team member plays a vital role in patient care.
    </p>
  </div>

  <div className="bg-white p-8 rounded-lg shadow-lg text-center">
    <Award className="w-12 h-12 text-teal-500 mx-auto mb-4" />
    <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
    <p className="text-gray-600 leading-relaxed">
      To deliver the highest standards of customer service, superior quality, and cutting-edge technological solutions that empower healthcare professionals worldwide.
    </p>
  </div>
</div>

{/* Our History */}
<div className="max-w-6xl mx-auto py-16 px-4">
  <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">Our History</h1>
  <p className="text-gray-700 leading-relaxed mb-4">
    BIOZAZ (Pvt) Ltd is a Pakistan-based company headquartered in Karachi, specializing in the import and export of advanced Medical Devices and IT Solutions for the healthcare industry.
  </p>
  <p className="text-gray-700 leading-relaxed mb-4">
    We offer a diverse range of medical equipment, including portable ultrasound systems, diagnostic imaging devices, skincare lasers, and other innovative portable technologies.
  </p>
  <p className="text-gray-700 leading-relaxed">
    Our IT services, PACS Solutions, Web Applications, and Hospital Management Systems are tailored to meet the evolving needs of modern healthcare facilities. Throughout our journey, we have remained committed to our founding principles of compassionate care, medical excellence, and community service.
  </p>
</div>
  </section>
);

export default AboutSection;
