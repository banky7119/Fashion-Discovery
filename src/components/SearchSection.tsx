// src/components/SearchSection.tsx

import React from 'react';

const SearchSection: React.FC = () => (
  <section className="search">
    <div className="container">
      <input type="text" placeholder="Search for brands, styles, or attributes" />
      <button className="btn btn-secondary">Search</button>
    </div>
  </section>
);

export default SearchSection;
