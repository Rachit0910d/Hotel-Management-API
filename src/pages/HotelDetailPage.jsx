import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useHotels } from '../hooks/useHotels';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { MapPin, Star, ArrowLeft } from 'lucide-react';

const HotelDetailPage = () => {
  const { id } = useParams();
  const { hotels, loading, error } = useHotels();

  if (loading) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center py-32">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-12 border-4 border-[var(--color-deep-navy)] border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 font-semibold text-[var(--color-text-muted)] tracking-wide uppercase text-sm">Loading property...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="bg-[#ffdad6] text-[#93000a] p-6 rounded-[4px] shadow-ambient text-center my-20 mx-auto max-w-lg">
          <h3 className="font-serif font-bold text-xl mb-2">Error Loading Data</h3>
          <p>{error}</p>
          <Link to="/" className="inline-block mt-6 underline font-semibold">Return Home</Link>
        </div>
      </MainLayout>
    );
  }

  // Find the specific hotel by ID
  const hotel = hotels.find(h => h.id.toString() === id);

  if (!hotel) {
    return (
      <MainLayout>
        <div className="text-center py-32">
          <h2 className="font-serif text-3xl font-bold mb-4">Property Not Found</h2>
          <p className="text-[var(--color-text-body)] mb-8">The hotel you are looking for does not exist or is currently unavailable.</p>
          <Link to="/">
            <Button variant="outline">Browse All Properties</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="relative bg-[var(--color-crisp-white)]">
        
        {/* Navigation Back */}
        <div className="absolute top-6 left-5 md:left-10 lg:left-20 z-10">
          <Link to="/" className="inline-flex items-center gap-2 bg-[var(--color-crisp-white)]/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold shadow-ambient hover:bg-[var(--color-crisp-white)] hover-transition text-[var(--color-deep-navy)]">
            <ArrowLeft size={16} /> Back to Collection
          </Link>
        </div>

        {/* Hero Section */}
        <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] relative">
          <img 
            src={hotel.thumbnail} 
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-navy)]/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full px-5 md:px-10 lg:px-20 pb-12 pt-20 text-[var(--color-crisp-white)]">
            <div className="max-w-4xl mx-auto flex flex-col items-start">
              <Badge status="info" className="mb-4 bg-white/20 text-white border border-white/30 backdrop-blur-md">Exclusive Property</Badge>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">{hotel.name}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm md:text-base font-semibold">
                <div className="flex items-center gap-1.5 bg-[var(--color-accent-gold)] px-3 py-1.5 rounded-[4px] text-[var(--color-deep-navy)]">
                  <Star size={16} className="fill-current" />
                  <span>{hotel.rating} / 5</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={18} />
                  <span>{hotel.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
          
          {/* Left Column: Description & Gallery */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-bold mb-6">About the Property</h2>
            <p className="text-[var(--color-text-body)] text-lg leading-relaxed mb-12">
              {hotel.description}
            </p>

            {hotel.photos && hotel.photos.length > 0 && (
              <>
                <h3 className="font-serif text-xl font-bold mb-6">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotel.photos.map((photoUrl, index) => (
                    <img 
                      key={index} 
                      src={photoUrl} 
                      alt={`${hotel.name} gallery ${index + 1}`} 
                      className={`w-full h-64 object-cover rounded-[4px] ${index === 0 && hotel.photos.length % 2 !== 0 ? 'md:col-span-2 md:h-96' : ''}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="relative">
            <div className="sticky top-28 bg-[var(--color-soft-slate)] p-8 rounded-[4px] shadow-ambient">
              <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-2 font-semibold">Price per night</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-serif text-4xl font-bold">₹{parseFloat(hotel.price).toLocaleString()}</span>
              </div>
              
              <ul className="space-y-4 mb-8 text-[var(--color-text-body)] text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)] mt-1.5"></div>
                  Complimentary Breakfast
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)] mt-1.5"></div>
                  Free High-Speed Wi-Fi
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)] mt-1.5"></div>
                  Access to Spa & Wellness Center
                </li>
              </ul>

              <Button variant="primary" className="w-full text-lg py-4">Book Now</Button>
            </div>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default HotelDetailPage;
