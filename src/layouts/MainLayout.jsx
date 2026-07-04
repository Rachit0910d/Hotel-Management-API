import React from 'react';
import { Building2, Search, Menu } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-soft-slate)]">
      <header className="bg-[var(--color-crisp-white)] border-b border-[var(--color-border-light)] sticky top-0 z-50 shadow-ambient">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="bg-[var(--color-deep-navy)] p-2 rounded-[4px] text-[var(--color-crisp-white)]">
              <Building2 size={24} />
            </div>
            <h1 className="font-serif text-2xl font-bold tracking-tight text-[var(--color-deep-navy)]">Horizon Elite</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="#" className="text-sm font-semibold text-[var(--color-deep-navy)] hover:text-[var(--color-accent-gold)] hover-transition">Destinations</Link>
            <Link to="#" className="text-sm font-semibold text-[var(--color-deep-navy)] hover:text-[var(--color-accent-gold)] hover-transition">Experiences</Link>
            <Link to="#" className="text-sm font-semibold text-[var(--color-deep-navy)] hover:text-[var(--color-accent-gold)] hover-transition">Membership</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex text-[var(--color-deep-navy)] hover:text-[var(--color-accent-gold)] hover-transition">
              <Search size={20} />
            </button>
            <Button className="hidden md:inline-flex">Book Now</Button>
            <button className="md:hidden text-[var(--color-deep-navy)]">
              <Menu size={24} />
            </button>
          </div>

        </div>
      </header>

      <main className="flex-grow w-full max-w-[1440px] mx-auto">
        {children}
      </main>

      <footer className="bg-[var(--color-deep-navy)] text-[var(--color-crisp-white)] py-12 mt-[var(--spacing-section)]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-2xl font-bold mb-4">Horizon Elite</h2>
            <p className="text-sm text-[var(--color-text-muted)] max-w-sm">
              Experience the pinnacle of quiet luxury. Our curated properties offer timeless elegance and seamless service for the discerning traveler.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Properties</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <li><Link to="#" className="hover:text-[var(--color-crisp-white)] hover-transition">View All</Link></li>
              <li><Link to="#" className="hover:text-[var(--color-crisp-white)] hover-transition">Special Offers</Link></li>
              <li><Link to="#" className="hover:text-[var(--color-crisp-white)] hover-transition">Residences</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Corporate</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <li><Link to="#" className="hover:text-[var(--color-crisp-white)] hover-transition">About Us</Link></li>
              <li><Link to="#" className="hover:text-[var(--color-crisp-white)] hover-transition">Careers</Link></li>
              <li><Link to="#" className="hover:text-[var(--color-crisp-white)] hover-transition">Contact</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
