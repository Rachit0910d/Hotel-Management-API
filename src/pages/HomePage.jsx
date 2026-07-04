import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HotelList from '../features/HotelList';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <MainLayout>
      <section className="px-5 md:px-10 lg:px-20 py-16 md:py-24 flex flex-col items-center text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-3xl">
          Discover Extraordinary Destinations
        </h2>
        <p className="text-[var(--color-text-body)] text-lg md:text-xl max-w-2xl mb-10">
          Curated luxury properties designed for the discerning traveler. Experience a stay defined by timeless elegance and unparalleled service.
        </p>
        <div className="flex gap-4">
          <Button variant="primary">Explore Properties</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-20 pb-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-2">Featured Collection</h3>
            <p className="text-[var(--color-text-muted)]">Exclusive retreats selected for you.</p>
          </div>
          <Link to="#" className="hidden md:inline-block font-semibold text-sm uppercase tracking-widest text-[var(--color-deep-navy)] hover:text-[var(--color-accent-gold)] hover-transition">
            View All Properties →
          </Link>
        </div>
        
        <HotelList />
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full">View All Properties</Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
