import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Sparkles, Clock, Users, Award, Server, ChevronLeft, ChevronRight, ScanLine, BrainCircuit, Radiation, Scan, Radio, Waves, Monitor, MessageCircle } from 'lucide-react';
import image from '../src/images/logotm3.png'
import { allimages } from './assets/img.js';
import "./App.css"
// import emailjs from '@emailjs/browser'
export default function HospitalWebsite() {
  // WhatsApp configuration constants
  const WHATSAPP_CONFIG = {
    number: '923364446339', // Country code + number without + or 00
    defaultMessage: 'Hi! I\'m interested in your medical equipment services.',
    position: 'bottom-6 right-6'
  };

  // Reusable WhatsApp button component with error handling
  const WhatsAppButton = React.memo(() => {
    const [isHovered, setIsHovered] = useState(false);

    // Handle WhatsApp link generation with validation
    const handleWhatsAppClick = (e) => {
      try {
        const { number, defaultMessage } = WHATSAPP_CONFIG;
        if (!number || !/^92\d{10}$/.test(number)) {
          console.warn('Invalid WhatsApp number format');
          e.preventDefault();
          return;
        }
        const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        e.preventDefault(); // Prevent default link behavior for better control
      } catch (error) {
        console.error('Error opening WhatsApp:', error);
      }
    };

    return (
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed ${WHATSAPP_CONFIG.position} bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group z-50`}
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        {isHovered && (
          <span className="absolute right-full mr-3 bg-gray-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Chat on WhatsApp
          </span>
        )}
      </button>
    );
  });

  WhatsAppButton.displayName = 'WhatsAppButton';

  const sliderImages = allimages;

const [currentIndex,setCurrentIndex] = useState(0)

useEffect(()=>{
  const interval = setInterval(()=>{
    setCurrentIndex((previndex) => (previndex + 1) % sliderImages.length);
  },3000)
  return () => clearInterval(interval)
},[sliderImages.length])

const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };


  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
{
  icon: <Sparkles className="w-8 h-8 text-teal-500" />,
  title: 'Skincare',
  desc: 'Advanced aesthetic and dermatology devices for skin rejuvenation, laser hair removal, and overall skin health and glow.',
  tagline: 'Where Technology Meets Timeless Beauty'
},
    { icon: <Waves className="w-8 h-8" />, title: 'Ultrasound', desc: 'Sharper, faster, clearer — Portable Ultrasound that sets new standards.' },
    { icon: <Monitor className="w-8 h-8" />, title: 'PACS', desc: 'Simplify diagnostics with next-generation PACS technology.' },
    { icon: <Server className="w-8 h-8" />, title: 'Healthcare IT Services', desc: 'Empowering healthcare with innovative digital solutions' },
    { icon: <BrainCircuit className="w-8 h-8" />, title: 'Vitrea', desc: 'Vitrea by Biozaz — visualizing the future of healthcare.' },



  ];

  const HomePage = () => (
    <div>
   {/* Hero Section with Slider */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Welcome to <span className="text-teal-600">Biozaz</span>
            </h1>
            <h4 className="text-xl md:text-2xl text-gray-700 font-semibold">
              Medical Devices & Healthcare Technology
            </h4>
            <p className="text-gray-600 leading-relaxed text-lg">
        Here we offer a complete range of high-quality medical, biomedical, and aesthetic equipment.
  From portable ultrasound systems to advanced imaging solutions, our products are sourced from 
  trusted brands to ensure precision, reliability, and value for every healthcare facility. 
  We also provide cutting-edge skincare designed for skin rejuvenation, 
  laser hair removal, dermatology treatments, and aesthetic innovations — bringing science and beauty 
  together for healthier, glowing skin. Additionally, our PACS solutions, Vitrea software, and 
  healthcare IT services empower hospitals and clinics with smarter workflow management, seamless 
  image sharing, and advanced diagnostic visualization.
            </p>
          </div>

          {/* Right Side - Image Slider */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl group">
            {/* Main Image */}
            <div className="relative h-72 md:h-96">
              <img
                src={sliderImages[currentIndex]}
                alt="Medical Equipment"
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-teal-500 w-8' 
                      : 'bg-white/60 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


    
      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center border-t-4 border-teal-500">
              <div className="text-teal-500 flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-cyan-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
            <div className="text-gray-700 text-lg">Expert Engineers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">1000+</div>
            <div className="text-gray-700 text-lg">Satisfied Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">22+</div>
            <div className="text-gray-700 text-lg">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">About Us</h1>
      
      <div className="bg-gradient-to-r from-teal-500 to-cyan-400 text-white p-8 md:p-12 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          To provide exceptional healthcare services with compassion, dignity, and respect. We are committed to improving the health and well-being of our community through innovative medical care and patient-centered service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <Users className="w-12 h-12 text-teal-500 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Team</h3>
          <p className="text-gray-600 leading-relaxed">
            Our Engineers diversified is staffed with highly qualified medical professionals dedicated to providing the best care possible. From specialists to support staff, every team member plays a vital role in patient care.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <Award className="w-12 h-12 text-teal-500 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To deliver the highest standards of customer service, superior quality, and cutting-edge technological solutions that empower healthcare professionals worldwide.
          </p>
        </div>
      </div>

      <div className="bg-cyan-50 p-8 md:p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our History</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          BIOZAZ (Pvt) Ltd is a Pakistan-based company headquartered in Karachi, specializing in the import and export of advanced Medical Devices and IT Solutions for the healthcare industry.

We offer a diverse range of medical equipment, including portable ultrasound systems, diagnostic imaging devices, skincare lasers, and other innovative portable technologies.

Our IT services , PACS Solutions, Web Applications, and Hospital Management Systems, tailored to meet the evolving needs of modern healthcare facilities.
          </p>
        <p className="text-gray-700 leading-relaxed">
          Throughout our journey, we have remained committed to our founding principles of compassionate care, medical excellence, and community service. Today, we continue to expand our services to meet the evolving healthcare needs of our patients.
        </p>
      </div>
    </div>
  );

  const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    const handleSubmit = (e) => {
  //     e.preventDefault();
      
  //      const templateParams = {
  //   from_name: formData.name,
  //   from_email: formData.email,
  //   phone: formData.phone,
  //   message: formData.message,
  // };

  //      emailjs
  //     .send(
  //       "service_35x3arh",   // 👉 EmailJS se lo
  //       "template_xuu8chi",  // 👉 EmailJS se lo
  //       templateParams,
  //       "5LgTqBISyCmhLWQ_2"    // 👉 EmailJS se lo
  //     )
  //     .then(
  //       (response) => {
  //         console.log("SUCCESS!", response.status, response.text);
  //         alert("✅ Appointment booked! Check your email.");
  //         setFormData({ name: "", email: "", phone: "", message: "" });
  //       },
  //       (err) => {
  //         console.error("FAILED...", err);
  //         alert("❌ Something went wrong. Please try again.");
  //       }
  //     );
    };

    

    return (
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">Contact Us</h1>
        
        <div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2> */}
            <form onSubmit={handleSubmit}>
              {/* <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  placeholder="Your Name"
                />
              </div> */}
              {/* <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  placeholder="your@email.com"
                />
              </div> */}
              {/* <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  placeholder="+92 300 1234567"
                />
              </div> */}
              {/* <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                  placeholder="Your Requirments here..."
                ></textarea>
              </div> */}
              {/* <button type="submit" className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition">
                Book Your Appointment
              </button> */}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-gradient-to-br from-teal-500 to-cyan-400 text-white p-8 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="flex items-start mb-6">
                <MapPin className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p>G2 13A-A,SMCHS Karachi, Pakistan 75400</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Phone className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p>+92 336 4446339</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Mail className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p>info@biozaz.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Working Hours</h3>
                  <p>24/7 Services</p>
                  <p>Head Office Mon-Sat, 9AM-5PM</p>
                </div>
              </div>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Emergency?</h3>
              <p className="text-gray-700 mb-4">"Our support team is on standby 24/7 to deliver reliable assistance whenever you need it."</p>
              <a href="tel:+921234567890" className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
                For On-Call Service:+92 336 4446339
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
<nav className="backdrop-blur-md bg-gradient-to-r from-white/80 via-teal-50/70 to-white/80 shadow-lg sticky top-0 z-50 border-b border-teal-100 rounded-b-2xl transition-all duration-300">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between items-center py-3">
      {/* Logo + Brand Name */}
      <div className="flex items-center space-x-2">
        <img src={image} alt="Biozaz Logo" className="w-40 h-25 rounded-full drop-shadow-md" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {navigation.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`relative font-semibold tracking-wide transition-all duration-300 pb-1 
              ${
                currentPage === item.id
                  ? 'text-teal-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-teal-500'
                  : 'text-gray-700 hover:text-teal-600 hover:after:w-full hover:after:bg-teal-400'
              } after:transition-all after:duration-300 after:w-0 after:h-[2px] after:bg-transparent after:left-0 after:bottom-0`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 hover:text-teal-600 transition-all"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>

    {/* Mobile Menu */}
    {menuOpen && (
      <div className="md:hidden pb-4 animate-fadeIn bg-white/70 backdrop-blur-md rounded-xl shadow-inner">
        {navigation.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setCurrentPage(item.id);
              setMenuOpen(false);
            }}
            className={`block w-full text-left py-2 px-3 rounded-md font-semibold transition-all duration-200 ${
              currentPage === item.id
                ? 'text-teal-600 bg-teal-50'
                : 'text-gray-700 hover:bg-teal-100 hover:text-teal-600'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    )}
  </div>
</nav>

{/* WhatsApp Floating Action Button */}
<WhatsAppButton />


      {/* Page Content */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}

      {/* Footer */}
    <footer className="bg-gray-900 text-white py-10 px-4 border-t border-teal-600/20">
  <div className="max-w-6xl mx-auto text-center">
    <div className="flex justify-center items-center mb-4 space-x-2">
      {/* <img src={image} alt="Biozaz Logo" className="w-10 h-10 rounded-full" /> */}
      <h2 className="text-2xl font-bold flex items-center">
        <span className="text-teal-400">Biozaz</span>
        <span className="text-xs align-top ml-1 text-gray-400">™</span>
      </h2>
    </div>

    <p className="text-gray-400 mb-2">
      Your trusted partner in medical equipment and healthcare solutions.
    </p>
    <p className="text-gray-500 text-sm">© 2025 Biozaz.com All rights reserved.</p>
    <p className="text-teal-400 text-sm font-semibold mt-2">
      Developed by <span className="text-white">MI-Online</span>
    </p>
  </div>
</footer>
    </div>
  );
}