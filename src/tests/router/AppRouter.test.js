import { shallow } from 'enzyme';
import { AppRouter } from '../../router/AppRouter';

describe('Test in <AppRouter />', () => {
  test('should shows correctly', () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper).toMatchSnapshot();
  });
});
