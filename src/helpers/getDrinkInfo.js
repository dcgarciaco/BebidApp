export const getDrinkInfo = async (drinkId) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
  const response = await fetch(url);
  const { drinks } = await response.json();

  if (!drinks) {
    return drinks;
  }
  const drinkInfo = drinks.map((drink) => {
    const notNullIngredientsWithMeasures = (newArray, key) => {
      const value = drink[key];
      let ingredient = [];
      if (value !== null && /strIngredient/.test(key)) {
        const numberIngredient = key.match(/(\d+)/);

        const measureKey = 'strMeasure' + numberIngredient[0];
        const measureValue = drink[measureKey];

        ingredient.push(value);
        ingredient.push(measureValue);

        return [...newArray, ingredient];
      }
      return [...newArray];
    };

    const drinkIngredients = Object.keys(drink).reduce(
      notNullIngredientsWithMeasures,
      []
    );

    return {
      drinkID: drink.idDrink,
      drinkName: drink.strDrink,
      drinkInstructions: drink.strInstructions,
      drinkImageURL: drink.strDrinkThumb,
      drinkIngredients: drinkIngredients,
      drinkGlass: drink.strGlass,
    };
  });

  return drinkInfo;
};
