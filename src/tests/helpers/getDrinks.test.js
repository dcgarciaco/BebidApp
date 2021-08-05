import { getDrinks } from '../../helpers/getDrinks';

describe('Test with getDrinks Fetch', () => {
  test('should bring some elements with an existing category', async () => {
    const drinks = await getDrinks('Beer');
    expect(drinks.length).toBeGreaterThanOrEqual(1);
  });
});
