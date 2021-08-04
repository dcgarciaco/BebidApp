import React from 'react';

export const DrinkGridItem = ({ drinkID, drinkName, drinkImageURL }) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
      <img src={drinkImageURL} alt={drinkName} />
      <p>{drinkName}</p>
    </div>
  );
};
