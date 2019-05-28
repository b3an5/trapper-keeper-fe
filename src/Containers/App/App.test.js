import React from 'react';
import {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot();
  });
})



// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
