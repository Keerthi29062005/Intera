import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Front from '../components/Front';
import '../css/home.css';

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height = 'auto';
  }, []);

  return (
    <div className="home-page">
      <div className='home-wrapper'>
        <Navbar />
      </div>
      <div>
        <Front />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}