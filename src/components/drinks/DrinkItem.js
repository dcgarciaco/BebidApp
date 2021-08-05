import './drinkItem.css';
import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { useFetchDrinkInfo } from '../../hooks/useFetchDrinkInfo';

export const DrinkItem = () => {
  const { drinkID } = useParams();
  

  const { data: drink, loading } = useFetchDrinkInfo(drinkID);
  if (!drink) {
    return <Redirect to='/' />;
  }
  
  

  const renderIngredientList = (data) => {
  
    const listIngredients = data.map((ingredient, index) => (
      <li key={index}>
        {' '}
        {ingredient[1]} {ingredient[0]}{' '}
      </li>
    ));

    return listIngredients;
  };

  if (loading) {
    return <article className=''>{loading && <p>Loading...</p>}</article>;
  } else {
    return (
      <article className='drinkInfo'>
        <div className='drinkContent'>
          <figure>
            <img src={drink[0].drinkImageURL} alt={drink[0].drinkName} />
          </figure>

          <section>
            <h2>{drink[0].drinkName}</h2>
            <ul>{renderIngredientList(drink[0].drinkIngredients)}</ul>
            <p>
              <b>Glass</b> {drink[0].drinkGlass}
            </p>
            <h3>Instructions</h3>
            <p>{drink[0].drinkInstructions}</p>
          </section>
        </div>
      </article>
    );
  }
};
