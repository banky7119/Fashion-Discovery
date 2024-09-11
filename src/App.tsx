// src/App.tsx

// src/App.tsx

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import BrandGrid from './components/BrandGrid';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => (
  <>
    <Header />
    <HeroSection />
    <SearchSection />
    <BrandGrid />
    <Footer />
  </>
);

export default App;
