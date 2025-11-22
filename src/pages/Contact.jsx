import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
return ( <section id="contact" className="py-16 px-4 max-w-6xl mx-auto"> <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
Get in Touch </h2>

  <div className="grid md:grid-cols-2 gap-6 mt-6 items-start">
    {/* Left Column: Google Map */}
    <div className="order-1 md:order-1 flex justify-center">
      <iframe
        title="Biozaz Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d268.7493940846305!2d67.04195168893736!3d25.005333594470034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f7034cbd2d9%3A0x3f591062b06cf2dd!2sBiozaz!5e0!3m2!1sen!2s!4v1761658722214!5m2!1sen!2s"
        className="w-full h-80 max-w-xl rounded-lg shadow-lg border-0"
        style={{ minHeight: 280 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

    {/* Right Column: Contact Info + Emergency */}
    <div className="order-2 md:order-2 space-y-6">
      <div className="bg-gradient-to-br from-teal-500 to-cyan-400 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

        <div className="flex items-start mb-4">
          <MapPin className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Address</h3>
            <p>G2 13A-A, SMCHS Karachi, Pakistan 75400</p>
          </div>
        </div>

        <div className="flex items-start mb-4">
          <Phone className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <p>+92 336 4446339</p>
          </div>
        </div>

        <div className="flex items-start mb-4">
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
        <p className="text-gray-700 mb-4">
          Our support team is on standby 24/7 to deliver reliable assistance whenever you need it.
        </p>
        <a
          href="tel:+923364446339"
          className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          For On-Call Service: +92 336 4446339
        </a>
      </div>
    </div>
  </div>
</section>
);
};

export default Contact;
