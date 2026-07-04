import React from 'react';
import { Star, MapPin } from 'lucide-react';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
  return (
    <Link to={`/hotel/${hotel.id}`} className="flex flex-col bg-[var(--color-crisp-white)] rounded-[4px] hover-transition shadow-ambient hover:shadow-ambient-hover overflow-hidden h-full">
      <div className="relative h-64 w-full">
        <img 
          src={hotel.thumbnail} 
          alt={hotel.name} 
          className="w-full h-full object-cover rounded-t-[4px]"
        />
        <div className="absolute top-3 right-3">
          <Badge status="success">Available</Badge>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-bold leading-tight line-clamp-1">{hotel.name}</h3>
          <div className="flex items-center gap-1 bg-[var(--color-soft-slate)] px-2 py-1 rounded-[4px]">
            <Star size={14} className="text-[var(--color-accent-gold)] fill-current" />
            <span className="text-sm font-semibold">{hotel.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-[var(--color-text-muted)] mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{hotel.location}</span>
        </div>
        
        <p className="text-sm text-[var(--color-text-body)] line-clamp-2 mb-6 flex-grow">
          {hotel.description}
        </p>
        
        <div className="flex justify-between items-end mt-auto pt-4 border-t border-[var(--color-border-light)]">
          <div>
            <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1 font-semibold">Price per night</p>
            <p className="font-serif text-2xl font-bold">₹{parseFloat(hotel.price).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
