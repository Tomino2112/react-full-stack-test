import { useState, useEffect } from 'react';
import axios from 'axios';

export const useLaunches = () => {
    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);  

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            "http://localhost:4000/launches"
          );
    
          setLaunches(result.data);
          setLoading(false);
        };
        fetchData();
      }, []);

      return { loading, launches };
};