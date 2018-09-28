import React from 'react'
import PropTypes from 'prop-types'

import './RightNav.css';

const RightNav = ({ getComponent, links }) => (
  <nav className="right-nav">
    {links.map(l => <div key={l.active} onClick={() => getComponent(l.component)}>{l.title}</div>)}
  </nav>
)

RightNav.defaultProps = {
  active: 0,
  links: []
}

RightNav.propTypes = {
  active: PropTypes.number,
  links: PropTypes.array
}

export default RightNav;
