import React from 'react';

const TopBrands = () => {
  const brands = [
    {  logo: 'https://cmsimages.shoppersstop.com/blackberrys_46ffe079c9/blackberrys_46ffe079c9.png' },
    {  logo: 'https://cmsimages.shoppersstop.com/Adidas_05b5db146d/Adidas_05b5db146d.png' },
    {  logo: 'https://cmsimages.shoppersstop.com/puma_Brand_Card_4a1386b18c/puma_Brand_Card_4a1386b18c.png' },
    {  logo: 'https://cmsimages.shoppersstop.com/Lee_Cooper_logo_PNG_1_184d8a5f7e/Lee_Cooper_logo_PNG_1_184d8a5f7e.png' },
    { logo: 'https://cmsimages.shoppersstop.com/Dockers_logo_PNG_3_a7921bcf7a/Dockers_logo_PNG_3_a7921bcf7a.png' },
    { logo: 'https://cmsimages.shoppersstop.com/Being_Human_Logo_0770cf0cad/Being_Human_Logo_0770cf0cad.png' },
  ];

  return (
    <div className="top-brands-container">
      <h2>Top Brands</h2>
      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div className="brand-card" key={index}>
            <img src={brand.logo} alt={`${brand.name} logo`} className="brand-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
