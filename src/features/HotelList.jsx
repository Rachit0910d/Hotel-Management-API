import React from 'react';
import HotelCard from './HotelCard';
import { useHotels } from '../hooks/useHotels';

const HotelList = () => {
  const { hotels, loading, error } = useHotels();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 border-4 border-[var(--color-deep-navy)] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 font-semibold text-[var(--color-text-muted)] tracking-wide uppercase text-sm">Loading properties...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#ffdad6] text-[#93000a] p-6 rounded-[4px] shadow-ambient text-center">
        <h3 className="font-serif font-bold text-xl mb-2">Error Loading Data</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {hotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
