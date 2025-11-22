import React from "react";
import { Users, Award } from "lucide-react";

const AboutSection = () => (

  <section id="about" className="max-w-6xl mx-auto py-16 px-4">
    {/* About Us Heading */}
    <div className="flex justify-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-white px-6 py-3 rounded-lg shadow-lg bg-gradient-to-r from-teal-500/70 to-teal-700/70 backdrop-blur-md neon-glow-heading">
        About Us
      </h1>
    </div>
{/* Our Mission */}
<div className="bg-black/30 backdrop-blur-xl p-8 md:p-12 rounded-lg mb-12 shadow-lg neon-glow-card hover:neon-glow-card-hover text-center transition-transform transform hover:scale-105">
  <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
  <p className="text-white font-bold text-lg leading-relaxed">
    To provide exceptional healthcare services with compassion, dignity, and respect. We are committed to improving the health and well-being of our community through innovative medical care and patient-centered service.
  </p>
</div>

{/* Our Team & Vision */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
  <div className="bg-black/30 backdrop-blur-xl p-8 rounded-lg shadow-lg neon-glow-card hover:neon-glow-card-hover text-center transition-transform transform hover:scale-105">
    <Users className="w-12 h-12 text-teal-400 mx-auto mb-4" />
    <h3 className="text-2xl font-bold mb-4 text-white">Our Team</h3>
    <p className="text-white font-bold leading-relaxed">
      Our engineers and medical professionals are highly qualified and dedicated to providing the best care possible. Every team member plays a vital role in patient care.
    </p>
  </div>

  <div className="bg-black/30 backdrop-blur-xl p-8 rounded-lg shadow-lg neon-glow-card hover:neon-glow-card-hover text-center transition-transform transform hover:scale-105">
    <Award className="w-12 h-12 text-teal-400 mx-auto mb-4" />
    <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
    <p className="text-white font-bold leading-relaxed">
      To deliver the highest standards of customer service, superior quality, and cutting-edge technological solutions that empower healthcare professionals worldwide.
    </p>
  </div>
</div>

{/* Our History */}
<div className="bg-black/30 backdrop-blur-xl p-8 rounded-lg mb-12 shadow-lg neon-glow-card hover:neon-glow-card-hover transition-transform transform hover:scale-105">
  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">
    Our History
  </h2>
  <p className="text-white font-bold leading-relaxed">
    BIOZAZ (Pvt) Ltd is a Pakistan-based company headquartered in Karachi, specializing in the import and export of advanced Medical Devices and IT Solutions for the healthcare industry. We offer a diverse range of medical equipment, including portable ultrasound systems, diagnostic imaging devices, skincare lasers, and other innovative portable technologies. Our IT services, PACS Solutions, Web Applications, and Hospital Management Systems are tailored to meet the evolving needs of modern healthcare facilities. Throughout our journey, we have remained committed to our founding principles of compassionate care, medical excellence, and community service.
  </p>
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
  @keyframes glow-card-hover {
    0%, 100% { box-shadow: 0 0 15px rgba(0,255,255,0.4); }
    50% { box-shadow: 0 0 35px rgba(0,255,255,0.8); }
  }
  .neon-glow-heading {
    animation: glow-heading 2s infinite alternate;
    text-shadow: 0 0 8px rgba(0,255,255,0.6);
  }
  .neon-glow-card {
    animation: glow-card 2s infinite alternate;
  }
  .neon-glow-card-hover:hover {
    animation: glow-card-hover 1.5s infinite alternate;
  }
`}</style>

  </section>
);

export default AboutSection;
