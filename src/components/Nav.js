import React from 'react'
import { Link } from "react-router-dom";

const links = [
  {path: '/about', text: 'About'},
  {path: '/community', text: 'Community'},
  {path: '/events', text: 'Events'},
]

const Nav = () => {
  return (
    <nav className="nav container">
      <div className="inside-container nav-container">
        <h2 className="nav-title">
          <Link to="/" className="nav-title-link">HWI</Link>
        </h2>
        <ul className="nav-list container">
          {
            links.map(link => (
              <li key={link.text} className="nav-item">
                <Link to={link.path} className="nav-link">{link.text}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Nav;
