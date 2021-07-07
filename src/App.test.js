import { shallow } from 'enzyme';
import { findByTestID } from './utility/utilityTest';
import App from './App';

describe('<App/>', () => {
  test('renders non-empty App component without crashing or error', () => {
    const wrapper = shallow(<App />);
    //debug help to show if sth gone wrong
    //console.log(wrapper.debug());
    const appComponent = findByTestID(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
    //expect(appComponent.exists()).toBe(true);
  });
});
