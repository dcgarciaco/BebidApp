import { useState, useEffect } from 'react';
import { getDrinks } from '../helpers/getDrinks';

export const useFetchDrinks = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  /* 
  useEffect(() => {
    //getDrinks(category).then(drinksBasicInfo => setDrinks(drinksBasicInfo))
    getDrinks(category).then(setDrinks);
  }, [category]); // Se ejecuta cuando el componente es renderizado por primera vez
 */

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
