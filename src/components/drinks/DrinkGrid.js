import React from 'react';
import { useFetchDrinks } from '../../hooks/useFetchDrinks';
import { DrinkGridItem } from './DrinkGridItem';
import PropTypes from 'prop-types';

export const DrinkGrid = ({ category }) => {
  const { data: drinks, loading } = useFetchDrinks(category);

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

DrinkGrid.propType = {
  category: PropTypes.string.isRequired,
};
