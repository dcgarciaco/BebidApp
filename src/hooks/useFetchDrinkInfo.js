import { useEffect, useState } from 'react';
import { getDrinkInfo } from '../helpers/getDrinkInfo';

export const useFetchDrinkInfo = (drinkID) => {
  const [drinkInfo, setDrinkInfo] = useState({});

  useEffect(() => {
    getDrinkInfo(drinkID).then((drink) => {
      setDrinkInfo(drink);
    });
  }, [drinkID]);

  return drinkInfo;
};
