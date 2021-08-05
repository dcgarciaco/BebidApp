import { useFetchDrinks } from '../../hooks/useFetchDrinks';
import { renderHook } from '@testing-library/react-hooks';
describe('Test on the hook useFetchDrinks', () => {
  test('should return the initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchDrinks('Beer')
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should return an array of drinks and loading in false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchDrinks('Beer')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBeGreaterThanOrEqual(1);
    expect(loading).toBe(false);
  });
});
