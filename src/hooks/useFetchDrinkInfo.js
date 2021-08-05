import { useEffect, useState } from 'react';
import { getDrinkInfo } from '../helpers/getDrinkInfo';

export const useFetchDrinkInfo = (drinkID) => {
  const [drinkInfo, setDrinkInfo] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getDrinkInfo(drinkID).then((drink) => {
      setDrinkInfo({
        data: drink,
        loading: false,
      });
    });
  }, [drinkID]);

  return drinkInfo;
};
