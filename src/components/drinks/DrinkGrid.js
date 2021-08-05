import React from 'react';
import { useFetchDrinks } from '../../hooks/useFetchDrinks';

import { DrinkGridItem } from './DrinkGridItem';

export const DrinkGrid = ({ category }) => {
  const { data: drinks, loading } = useFetchDrinks(category);
  console.log('Loading ', loading);

  return (
    <>
      {loading && <p>Loading</p>}

      <section className='card-grid'>
        {drinks.map((drink) => (
          <DrinkGridItem key={drink.drinkID} {...drink} />
        ))}
      </section>
    </>
  );
};
