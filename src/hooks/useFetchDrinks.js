import { useState, useEffect } from 'react';
import { getDrinks } from '../helpers/getDrinks';

export const useFetchDrinks = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getDrinks(category).then((drink) => {
      setstate({
        data: drink,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
