import React from 'react';
import { DrinkGrid } from '../drinks/DrinkGrid';

export const Cocktails = () => {
  return (
    <div>
      <h1>Cocktails</h1>

      {/* <DrinkGrid key={category} category={category} /> */}
      <DrinkGrid category={'Cocktail'} />
    </div>
  );
};
