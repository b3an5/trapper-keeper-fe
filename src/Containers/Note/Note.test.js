import React from 'react';
import { shallow } from 'enzyme';
import { Note, mapStateToProps, mapDispatchToProps } from './Note';
import { updateNotes } from '../../actions'

describe('Note', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<Note 
                        title={}
                        listItems={}
                        key={}
                      />)
    
    expect(shallow).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    const mockState = {
      notes: [
        { id: 824, title: 'test', listItems: [
            { id: 248, text: 'test item' },
            { id: 2345, text: 'test item 2' }] }
      ]
    };

    const expected = {
      notes: mockState.notes
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mockNotes = [
      {
        id: 824, title: 'test', listItems: [
          { id: 248, text: 'test item' },
          { id: 2345, text: 'test item 2' }
        ]
      }
    ];

    const dispatchUpdateNotes = updateNotes(mockNotes);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.updateNotes(mockNotes);
    expect(mockDispatch).toHaveBeenCalledWith(dispatchUpdateNotes);
  });
})