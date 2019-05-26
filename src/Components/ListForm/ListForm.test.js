import React from 'react';
import { shallow } from 'enzyme';
import ListForm from './ListForm'

describe('ListForm', () => {
  let wrapper
  let defaultState = {
    text: ''
  }
  const mockSetList = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<ListForm 
                        setList={ mockSetList }
                        index={ 0 }
                      />)
  })

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual(defaultState)

  });
});