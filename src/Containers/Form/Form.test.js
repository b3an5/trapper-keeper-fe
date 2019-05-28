import React from 'react';
import { shallow } from 'enzyme';
import { Form } from './Form';

describe('Form', () => {
  let wrapper;
  let defaultState = {
    title: '',
    list: [],
    titleSet: false
  }

  beforeEach(() => {
    wrapper = shallow(<Form />)
  })

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  });

  it('should update state when setTitle is called', () => {
    wrapper.instance().setTitle('test title');

    expect(wrapper.state().title).toEqual('test title');
  });

  it('should update state when a new list item is passed through setList', () => {
    wrapper.instance().setList('list item', 0);

    expect(wrapper.state().list).toEqual([{index: 0, text: 'list item'}])
  })
})