import { useState, useEffect } from 'react';

export const useHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('https://demohotelsapi.pythonanywhere.com/hotels/');
        if (!response.ok) {
          throw new Error('Failed to fetch hotels');
        }
        const result = await response.json();
        setHotels(result.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return { hotels, loading, error };
};
