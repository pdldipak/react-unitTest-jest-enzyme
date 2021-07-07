import { shallow } from 'enzyme';
import { findByTestID } from '../../utility/utilityTest';
import Counter from '../Counter';

/**
 * Factory function to create a Shallow Wrapper for the Counter component to render.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @function text - alz return a string
 */
const setup = (props = {}) => {
  return shallow(<Counter {...props} />);
};

describe('<Counter/>', () => {
  //const wrapper = setup(); or
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('renders counter component without crashing or error', () => {
    const counterWrapper = findByTestID(wrapper, 'component-counter');
    expect(counterWrapper.exists()).toBe(true);
  });

  test('render increment button', () => {
    const incrementButton = findByTestID(wrapper, 'increment-button');
    expect(incrementButton.exists()).toBe(true);
  });

  test('render decrement button', () => {
    const decrementButton = findByTestID(wrapper, 'decrement-button');
    expect(decrementButton.exists()).toBe(true);
  });

  test('render counter display', () => {
    const counterDisplay = findByTestID(wrapper, 'counter-display');
    expect(counterDisplay.exists()).toBe(true);
  });
  test('counter display start at 0', () => {
    const count = findByTestID(
      wrapper,
      'counter-display-start'
    ).text();
    expect(count).toBe('0');
  });

  test('clicking button increase counter display', () => {
    //find the button
    const incrementButton = findByTestID(wrapper, 'increment-button');
    //click the button
    incrementButton.simulate('click');
    //find the display, and test that the number has been incremented
    const count = findByTestID(
      wrapper,
      'counter-display-start'
    ).text();
    expect(count).toBe('1');
  });

  test('clicking decrement button decrements counter display when state is greater than 0', () => {
    //find the button
    const decrementButton = findByTestID(wrapper, 'decrement-button');
    //click the button
    decrementButton.simulate('click');
    //find the display, and test that the number has been decremented
    const count = findByTestID(
      wrapper,
      'counter-display-start'
    ).text();
    expect(count).toBe('0');
  });

  // test('error shows', () => {
  //   const errorMessage = findByTestID(
  //     wrapper,
  //     'error-message'
  //   ).text();
  //   expect(errorMessage).toContain('The counter cant go below 0');
  // });
});
