// src/components/BrandGrid.tsx

import React from 'react';

interface Brand {
  name: string;
  description: string;
  imageUrl: string;
}

const brands: Brand[] = [
  {
    name: 'EcoChic',
    description: 'Eco-friendly and sustainable fashion.',
    imageUrl: "https://images.unsplash.com/photo-1573612664822-d7d347da7b80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1c3RhaW5hYmxlJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: 'Urban Trends',
    description: 'Modern and trendy urban fashion.',
    imageUrl: "https://cdn.pixabay.com/photo/2017/01/14/10/03/fashion-1979136_1280.jpg"
  },
  {
    name: 'Ghetto Vibes',
    description: 'We speak with our Fashion.',
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5b788d28697a98e17a6d4c7a/1553556014271-4O6ANIFF8EL9VCVXE6JO/image3.png"
  },
  {
    name: 'Shoesssss',
    description: 'Odogwu Style.',
    imageUrl: "https://cdn.pixabay.com/photo/2019/11/22/08/01/shoes-4644337_1280.png"
  },
  {
    name: 'Urban Trends',
    description: 'Modern and trendy urban fashion.',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcxAfW464OXCmvUbGz6RDIBCFij3FJO8idg&s"
  },
  {
    name: 'Urban Trends',
    description: 'Modern and trendy urban fashion.',
    imageUrl: "https://sb.kaleidousercontent.com/67418/1712x1132/d43e8334dd/screenshot-2022-05-13-at-15-43-28.png"
  },
  {
    name: 'Urban Trends',
    description: 'Modern and trendy urban fashion.',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qcK5S6qFAYjn9b4Da0z8jBcXNRKHMirKIg&s"
  }
  // Add more brands as needed
];

const BrandGrid: React.FC = () => (
  <section className="brand-grid">
    <div className="container">
      {brands.map((brand, index) => (
        <div key={index} className="brand-card">
          <img src={brand.imageUrl} alt={brand.name} />
          <div className="brand-info">
            <h3>{brand.name}</h3>
            <p>{brand.description}</p>
            <a href="Explore" className="btn btn-primary">Explore</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BrandGrid;
