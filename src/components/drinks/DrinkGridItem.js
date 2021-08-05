import React from 'react';
import PropTypes from 'prop-types';
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

DrinkGridItem.propTypes = {
  drinkID: PropTypes.string.isRequired,
  drinkName: PropTypes.string.isRequired,
  drinkImageURL: PropTypes.string.isRequired,
};
