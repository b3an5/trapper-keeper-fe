import React from 'react'
import { shallow, mount } from 'enzyme'
import Home from './Home'

describe('Home', () => {
  let wrapper

  it('should match the snapshot', () => {
    wrapper = shallow(<Home />)

    expect(wrapper).toMatchSnapshot()
  })
})
