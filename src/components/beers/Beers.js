import React from 'react';
import { DrinkGrid } from '../drinks/DrinkGrid';

export const Beers = () => {
  return (
    <article>
      <h1>Beers</h1>
      <DrinkGrid category={'Beer'} />
    </article>
  );
};
