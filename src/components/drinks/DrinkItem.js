import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetchDrinkInfo } from '../../hooks/useFetchDrinkInfo';

export const DrinkItem = () => {
  const { drinkID } = useParams();
  // console.log(drinkID);

  const drink = useFetchDrinkInfo(drinkID);
  console.log('DrinkItem', drink[0]);

  return (
    <div>
      <h1>Drink</h1>
    </div>
  );
};
