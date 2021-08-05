export const getDrinkInfo = async (drinkId) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
  const response = await fetch(url);
  const { drinks } = await response.json();

  console.log(drinks);
  const drinkInfo = drinks.map((drink) => {
    console.log('mapDrinkInfo ', drink);

    const notNullDrinkElements = (newObj, key) => {
      const value = drink[key];
      if (value !== null) {
        newObj[key] = value;
      }
      return newObj;
    };

    const drinkElements = Object.keys(drink).reduce(notNullDrinkElements, {});
    console.log('DrinkElements ', drinkElements);

    return {
      drinkID: drink.idDrink,
      drinkName: drink.strDrink,
      drinkInstructions: drink.strInstructions,
      drinkImageURL: drink.strDrinkThumb,
      /*       drinkIngredient1: drink.strIngredient1,
      drinkIngredient2: drink.strIngredient2,
      drinkIngredient3: drink.strIngredient3,
      drinkIngredient4: drink.strIngredient4,
      drinkIngredient5: drink.strIngredient5,
      drinkIngredient6: drink.strIngredient6,
      drinkIngredient7: drink.strIngredient7,
      drinkIngredient8: drink.strIngredient8,
      drinkIngredient9: drink.strIngredient9,
      drinkIngredient10: drink.strIngredient10,
      drinkIngredient11: drink.strIngredient11,
      drinkIngredient12: drink.strIngredient12,
      drinkIngredient13: drink.strIngredient13,
      drinkIngredient14: drink.strIngredient14,
      drinkIngredient15: drink.strIngredient15, */
    };
  });

  //  console.log(drinkInfo);

  //setDrinks(drinksBasicInfo);
  return drinkInfo;
};
