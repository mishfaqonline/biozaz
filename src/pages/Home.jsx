import React from "react";
import Slider from "../components/Slider"; // Adjust path if needed

const Home = ({ sliderImages }) => {
return ( <section className="pt-[120px] px-4 max-w-6xl mx-auto"> <div className="flex flex-col md:flex-row items-center gap-12">
{/* Text on left */} <div className="md:w-1/2 space-y-6 order-2 md:order-1 text-justify"> <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug text-center md:text-left">
Welcome to <span className="text-teal-600">Biozaz</span> </h1> <h4 className="text-lg md:text-xl text-gray-700 font-semibold text-center md:text-left">
Medical Devices & Healthcare Technology </h4> <p className="text-gray-600 text-base md:text-lg leading-relaxed">
Here we offer a complete range of high-quality medical, biomedical, and aesthetic equipment.
From portable ultrasound systems to advanced imaging solutions, our products are sourced from
trusted brands to ensure precision, reliability, and value for every healthcare facility.
We also provide cutting-edge skincare designed for skin rejuvenation, laser hair removal,
dermatology treatments, and aesthetic innovations — bringing science and beauty together
for healthier, glowing skin. Additionally, our PACS solutions, Vitrea software, and
healthcare IT services empower hospitals and clinics with smarter workflow management,
seamless image sharing, and advanced diagnostic visualization. </p> </div>

```
    {/* Slider on right */}
    <div className="md:w-1/2 w-full order-1 md:order-2 p-4 bg-white rounded-xl shadow-lg animate-slideRight">
      <Slider images={sliderImages} />
    </div>
  </div>

  {/* Services Section */}
  <div id="services" className="py-16">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
      Our Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center border-t-4 border-teal-500">
        <h3 className="text-xl font-bold mb-2 text-gray-800">Skincare</h3>
        <p className="text-gray-600 text-sm md:text-base">
          Advanced aesthetic and dermatology devices for skin rejuvenation, laser hair removal, and overall skin health.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center border-t-4 border-teal-500">
        <h3 className="text-xl font-bold mb-2 text-gray-800">Ultrasound</h3>
        <p className="text-gray-600 text-sm md:text-base">
          Sharper, faster, clearer — Portable Ultrasound that sets new standards.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center border-t-4 border-teal-500">
        <h3 className="text-xl font-bold mb-2 text-gray-800">PACS</h3>
        <p className="text-gray-600 text-sm md:text-base">
          Simplify diagnostics with next-generation PACS technology.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center border-t-4 border-teal-500">
        <h3 className="text-xl font-bold mb-2 text-gray-800">Healthcare IT Services</h3>
        <p className="text-gray-600 text-sm md:text-base">
          Empowering healthcare with innovative digital solutions.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center border-t-4 border-teal-500">
        <h3 className="text-xl font-bold mb-2 text-gray-800">Vitrea</h3>
        <p className="text-gray-600 text-sm md:text-base">
          Vitrea by Biozaz — visualizing the future of healthcare.
        </p>
      </div>
    </div>
  </div>

  {/* Statistics Section */}
  <div className="bg-cyan-50 py-16 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">50+</div>
        <div className="text-gray-700 text-lg md:text-xl">Expert Engineers</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">1000+</div>
        <div className="text-gray-700 text-lg md:text-xl">Satisfied Clients</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">22+</div>
        <div className="text-gray-700 text-lg md:text-xl">Years Experience</div>
      </div>
    </div>
  </div>
</section>

);
};

export default Home;
