import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import store from 'src/store'
import { App } from '../App'

describe('<App />', () => {
  const defaultProps = {}
  const wrapper = shallow(
    <Provider store={store}>
     <App {...defaultProps} />
    </Provider>,
  )

  it('should render as expected', () => {
    expect(wrapper).toMatchSnapshot()
  })
})