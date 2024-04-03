import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // Fix: Remove array brackets
  const [loading, setLoading] = useState(false); // Fix: Remove array brackets

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          setError('failed to fetch'); // Fix: Correct the typo
        
        }

        const result = await res.json();

        setData(result.data);
        setLoading(false)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Fix: Move setLoading(false) to finally block
      }
    };

    fetchData();
  }, [url]);

  // Fix: Remove line break or wrap the object in parentheses
  return { data, error, loading };
};

export default useFetch;
