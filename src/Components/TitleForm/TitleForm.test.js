import React from 'react';
import { shallow } from 'enzyme';
import TitleForm from './TitleForm';

describe('TitleForm', () => {
  let wrapper 
  const mockSetTitle = jest.fn();
  const mockDisplayTitle = jest.fn();

  it('should match the snapshot', () => {
    wrapper = shallow(<TitleForm 
                        setTitle={ mockSetTitle } 
                        displayTitle={ mockDisplayTitle }
                      />)

    expect(wrapper).toMatchSnapshot();
  });
});
