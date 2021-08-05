import React from 'react';
import { DrinkGrid } from '../drinks/DrinkGrid';

export const OrdinaryDrinks = () => {
  return (
    <div>
      <h1>Ordinary Drinks</h1>
      <DrinkGrid category={'Ordinary_Drink'} />
    </div>
  );
};
