import { shallow } from 'enzyme';
import { DrinkGrid } from '../../../components/drinks/DrinkGrid';
import { useFetchDrinks } from '../../../hooks/useFetchDrinks';
jest.mock('../../../hooks/useFetchDrinks');
describe('Test on <DrinkGrid />', () => {
  const category = 'Cocktail';
  test('should show the component correctly', () => {
    useFetchDrinks.mockReturnValue({ data: [], loading: true });
    const wrapper = shallow(<DrinkGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show elements when drinks are loaded from useFetchDrinks', () => {
    const drinks = [
      {
        drinkID: '1111',
        drinkName: 'Test Drink',
        drinkImageURL: 'https://localhost/Test/test.jpg',
      },
      {
        drinkID: '2222',
        drinkName: 'Test Drink',
        drinkImageURL: 'https://localhost/Test/test.jpg',
      },
    ];
    useFetchDrinks.mockReturnValue({ data: drinks, loading: false });
    const wrapper = shallow(<DrinkGrid category={category} />);
  
    expect(wrapper.find('p').exists()).toBeFalsy();
    expect(wrapper.find('DrinkGridItem').length).toBe(drinks.length);
  });
});
