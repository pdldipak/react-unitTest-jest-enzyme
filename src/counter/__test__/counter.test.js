import { shallow } from 'enzyme';
import { findByTestID } from '../../utility/utilityTest';
import Counter from '../Counter';

describe('<Counter/>', () => {
  test('renders counter component without crashing or error', () => {
    const wrapper = shallow(<Counter />);
    const counterWrapper = findByTestID(wrapper, 'component-counter');
    expect(counterWrapper.exists()).toBe(true);
  });

  test('render increment button', () => {});
  test('render counter display', () => {});
  test('counter display start at 0', () => {});
  test('clicking button increase counter display', () => {});
});
