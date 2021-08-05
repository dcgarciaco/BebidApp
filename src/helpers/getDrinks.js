export const getDrinks = async (category) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await fetch(url);
  const { drinks } = await response.json();

  const drinksBasicInfo = drinks.map((drink) => {
    return {
      drinkID: drink.idDrink,
      drinkName: drink.strDrink,
      drinkImageURL: drink.strDrinkThumb,
    };
  });

  return drinksBasicInfo;
};
