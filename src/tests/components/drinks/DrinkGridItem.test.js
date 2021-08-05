import { shallow } from 'enzyme';
import { DrinkGridItem } from '../../../components/drinks/DrinkGridItem';

describe('Test in <DrinkGridItem />', () => {
  const drinkID = '10';
  const drinkImageURL = 'https://localhost/drink.jpg';
  const drinkName = 'Titulo de imagen';
  const wrapper = shallow(
    <DrinkGridItem
      drinkID={drinkID}
      drinkName={drinkName}
      drinkImageURL={drinkImageURL}
    />
  );

  test('Should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should have a paragraph with the image tile', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(drinkName);
  });

  test('should have an image with the same url and alt of props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(drinkImageURL);
    expect(img.prop('alt')).toBe(drinkName);
  });

  test('should have animate_fadeIn class', () => {
    const Link = wrapper.find('Link');
    const className = Link.prop('className');

    expect(className.includes('animate__fadeIn')).toBe(true);
  });

  test('should have a link to the drink with the ID', () => {
    const link = wrapper.find('Link');
    expect(link.prop('to')).toBe('./drink/' + drinkID);
  });
});
