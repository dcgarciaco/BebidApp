import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { DrinkGrid } from './components/DrinkGrid';

export const BebidApp = () => {
  /* const categories = ['Ordinary_Drink', 'Cocktail', 'Milk_/_Float_/_Shake', 'Cocoa', 'Shot', 
                        'Coffee_/_Tea', 'Homemade_Liqueur', 'Punch_/_Party_Drink', 'Beer', 'Soft_Drink_/_Soda',
                        'Other/Unknown' ]; 
     */

  const [categories, setCategories] = useState([
    //'Ordinary_Drink',
    'Cocktail',
    /*'Milk_/_Float_/_Shake',
    'Cocoa',
    'Shot',
    'Coffee_/_Tea',
    'Homemade_Liqueur',
    'Punch_/_Party_Drink',
    'Beer',
    'Soft_Drink_/_Soda',
    'Other/Unknown',*/
  ]);

  /*
    const handleAdd = () =>{
        //setCategories([...categories, 'Other/Unknown']);
        setCategories( newCategories => [...newCategories, 'Other/Unknown'] );

    }
  */

  return (
    <>
      <h2>BebidApp</h2>

      <AddCategory setCategoriesFromBebidApp={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <DrinkGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
