import React from 'react';
import { shallow } from 'enzyme';
import { NotesContainer, mapStateToProps, mapDispatchToProps } from './NotesContainer';
import { updateNotes } from '../../actions'

describe('NotesContainer', () => {
  let wrapper;
  const mockNotes = [
    {
      id: 824, title: 'test', listItems: [
        { id: 248, text: 'test item' },
        { id: 2345, text: 'test item 2' }
      ]
    }
  ]; 

  const mockUpdateNotes=jest.fn();
  const mockGetNotes=jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <NotesContainer notes={ mockNotes } updateNotes={ mockUpdateNotes }/>
    )
  })

  it.skip('should invoke getNotes after ComponentDidMount', async () => {
    const spy = jest.spyOn(NotesContainer.prototype, 'getNotes')
    wrapper = mount(<NotesContainer {...props} />)

    await wrapper.instance().getNotes();

    expect(spy).toHaveBeenCalled()
  })

  it.skip('should invoke updateNotes after ComponentDidMount', () => {
    const spy = jest.spyOn(NotesContainer.prototype, 'updateNotes')
    wrapper = mount(<NotesContainer {...props} />)


  } )

  it.skip('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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

  describe('mapDispatchToProps', () => {
    //setup
    const mockDispatch = jest.fn();
    const mockNotes = [
      { id: 824, title: 'test', listItems: [
        { id: 248, text: 'test item'},
        { id: 2345, text: 'test item 2'}
      ]}
    ];
    //execution
    const dispatchUpdateNotes = updateNotes(mockNotes);

    //assertion
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.updateNotes(mockNotes);
    expect(mockDispatch).toHaveBeenCalledWith(dispatchUpdateNotes);
  });
});
