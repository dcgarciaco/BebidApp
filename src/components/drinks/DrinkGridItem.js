import React from 'react';
import { Link } from 'react-router-dom';

export const DrinkGridItem = ({ drinkID, drinkName, drinkImageURL }) => {
  return (
    <Link
      to={`./drink/${drinkID}`}
      className='card animate__animated animate__fadeIn'
    >
      <img src={drinkImageURL} alt={drinkName} />
      <p>{drinkName}</p>
    </Link>
  );
};
