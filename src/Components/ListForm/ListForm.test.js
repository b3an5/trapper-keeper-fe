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

  beforeEach(() => {
    wrapper = shallow(<ListForm 
                        setList={ mockSetList }
                        index={ 0 }
                      />)
  })

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  });

  it('should set state when handleChange is called', () => {
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state().text).toEqual('Test Item');
  });

  it.skip('should call setList when handleSubmit has been called', () => {
    const setListSpy = jest.spyOn(wrapper.instance(), 'props.setList')
    
    wrapper.instance().handleSubmit(mockEvent);

    expect(setListSpy).toHaveBeenCalledTimes(1);
  });
});