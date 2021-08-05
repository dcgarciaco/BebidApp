import React from 'react';
import { DrinkGrid } from '../drinks/DrinkGrid';

export const OrdinaryDrinks = () => {
  return (
    <article>
      <h1>Ordinary Drinks</h1>
      <DrinkGrid category={'Ordinary_Drink'} />
    </article>
  );
};
