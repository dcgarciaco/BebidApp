import './drinkItem.css';
import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { useFetchDrinkInfo } from '../../hooks/useFetchDrinkInfo';

export const DrinkItem = () => {
  const { drinkID } = useParams();
  // console.log(drinkID);

  const { data: drink, loading } = useFetchDrinkInfo(drinkID);
  if (!drink) {
    return <Redirect to='/' />;
  }
  console.log('DrinkItem', drink);
  // console.log('DrinkItem', drink[0].drinkImageURL);

  const renderIngredientList = (data) => {
    //    console.log(data);
    const listIngredients = data.map((ingredient, index) => (
      <li key={index}>
        {' '}
        {ingredient[1]} {ingredient[0]}{' '}
      </li>
    ));

    return listIngredients;
  };

  if (loading) {
    return (
      <article className='drinkContent'>{loading && <p>Loading...</p>}</article>
    );
  } else {
    return (
      <article className='drinkContent'>
        <figure>
          <img src={drink[0].drinkImageURL} alt={drink[0].drinkName} />
        </figure>

        <section>
          <h2>{drink[0].drinkName}</h2>
          <ul>{renderIngredientList(drink[0].drinkIngredients)}</ul>
          <p>
            <b>Glass</b> {drink[0].drinkGlass}
          </p>
          <h4>Instructions</h4>
          <p>{drink[0].drinkInstructions}</p>
        </section>
      </article>
    );
  }
};
