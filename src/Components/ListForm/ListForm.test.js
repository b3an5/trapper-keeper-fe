import React from 'react';
import { shallow } from 'enzyme';
import ListForm from './ListForm'

describe('ListForm', () => {
  let wrapper
  let defaultState = {
    text: ''
  }
  const mockSetList = jest.fn();
 
  const mockEvent = {
    target: { value: 'Test Item'},
    preventDefault: () => { }
  }

  const mockState = { text: 'Test Item'};
  const mockIndex = 0

  beforeEach(() => {
    wrapper = shallow(<ListForm 
                        setList={ mockSetList }
                        index={ 0 }
                      />)
    });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  });

  it('should set state when handleChange is called', () => {
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state().text).toEqual(mockState.text);
  });

  it('should call setList when handleSubmit is called', () => {    
    wrapper.instance().handleChange(mockEvent);
    wrapper.instance().handleSubmit(mockEvent);

    expect(mockSetList).toHaveBeenCalled();
    expect(mockSetList).toHaveBeenCalledWith(mockState.text, mockIndex )
  });

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});