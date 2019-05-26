import React from 'react';
import { shallow, mount } from 'enzyme';
import ListItem from './ListItem';
import { exportAllDeclaration } from '@babel/types';

describe('ListItem', () => {
  let wrapper;
  const mockListItem = { text: 'testing', id: 824}

  it('should match the snapshot', () => {
    wrapper = shallow(<ListItem { ...mockListItem }/>)

    expect(wrapper).toMatchSnapshot();
  });
})