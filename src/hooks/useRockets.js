import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRockets = () => {
    const [rockets, setRockets] = useState([]);
    const [loading, setLoading] = useState(true);  

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            "http://localhost:4000/rockets"
          );
    
          setRockets(result.data);
          setLoading(false);
        };
        fetchData();
      }, []);

      return { loading, rockets };
};