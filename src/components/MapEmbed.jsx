// File: src/components/MapEmbed.jsx
import React from 'react';


const MapEmbed = React.memo(() => (
<iframe
title="Biozaz Location"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d268.7493940846305!2d67.04195168893736!3d25.005333594470034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f7034cbd2d9%3A0x3f591062b06cf2dd!2sBiozaz!5e0!3m2!1sen!2s!4v1761658722214!5m2!1sen!2s"
className="w-full h-80 max-w-xl rounded-lg shadow-lg border-0"
style={{ minHeight: 280 }}
loading="lazy"
/>
));


export default MapEmbed;