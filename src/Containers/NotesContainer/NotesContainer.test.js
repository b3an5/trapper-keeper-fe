import React from 'react';
import { shallow } from 'enzyme';
import { NotesContainer, mapStateToProps } from './NotesContainer';

describe('NotesContainer', () => {

  it.skip('', () => {
    
  })

  describe('mapStateToProps', () => {
    const mockState = { notes: [
      { id: 824, title: 'test', listItems: [
        { id: 248, text: 'test item'},
        { id: 2345, text: 'test item 2'}
      ]}
    ]};
    
    const expected = {
      notes: mockState.notes
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });

  
});
