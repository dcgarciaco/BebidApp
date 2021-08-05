import { render } from '@testing-library/react';
import { act } from 'react-dom/cjs/react-dom-test-utils.development';
import { DrinkGridItem } from '../../../components/drinks/DrinkGridItem';

describe('DrinkGridItem', () => {
  let container = null;
  test('should ', () => {
    const obj = {
      drinkID: '1',
      drinkName: 'beer',
      drinkImageURL:
        'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    };

    // act(() => {
    //   render(
    //     <a
    //       href={`./drink/${obj.drinkID}`}
    //       className='card animate__animated animate__fadeIn'
    //     >
    //       <img src={obj.drinkImageURL} alt={obj.drinkName} />
    //       <p>{obj.drinkName}</p>
    //     </a>,
    //     container
    //   );
    // });

    // expect(DrinkGridItem).toBe(obj);
  });

  test('drinks returns', () => {
    const DrinkGridItem = jest.fn(() => true);

    DrinkGridItem();

    expect(DrinkGridItem).toHaveReturned();
  });
});

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
//   })
// );
