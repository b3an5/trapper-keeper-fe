import React from 'react';
import { shallow } from 'enzyme';
import TitleForm from './TitleForm';

describe('TitleForm', () => {
  let wrapper 
  let mockSetTitle = jest.fn();

  it('should match the snapshot', () => {
    wrapper = shallow(<TitleForm setTitle={ mockSetTitle } />)

    expect(wrapper).toMatchSnapshot();
  });
});
