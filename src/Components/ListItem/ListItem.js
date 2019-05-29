import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ text, id }) => {
  return (
    <div>
      <h4>{text}</h4>
    </div>
  )
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number,
}
export default ListItem
