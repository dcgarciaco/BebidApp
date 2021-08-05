import './drinkItem.css';
import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { useFetchDrinkInfo } from '../../hooks/useFetchDrinkInfo';

export const DrinkItem = () => {
  const { drinkID } = useParams();
  // console.log(drinkID);

  const drink = useFetchDrinkInfo(drinkID);
  if (!drink) {
    return <Redirect to='/' />;
  }
  console.log('DrinkItem', drink);
  console.log('DrinkItem', drink[0].drinkImageURL);

  return (
    <section className='drinkContent'>
      <div>
        <img src={drink[0].drinkImageURL} alt='' />
      </div>
      <h1>Drink</h1>
    </section>
  );
};
