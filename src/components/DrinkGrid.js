import React from 'react';
import { useFetchDrinks } from '../hooks/useFetchDrinks';

import { DrinkGridItem } from './DrinkGridItem';

export const DrinkGrid = ({ category }) => {
  const { data: drinks, loading } = useFetchDrinks(category);
  console.log(loading);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p>Loading</p>}

      <div className='card-grid'>
        {drinks.map((drink) => (
          <DrinkGridItem key={drink.drinkID} {...drink} />
        ))}
      </div>
    </>
  );
};
