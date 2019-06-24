import React from 'react'
import { Link } from "react-router-dom";

const links = [
  {path: '/', text: 'Home'},
  {path: '/about', text: 'About'},
  {path: '/community', text: 'Community'},
  {path: '/events', text: 'Events'},
]

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        {
          links.map(link => (
            <li key={link.text} className="nav-item">
              <Link to={link.path} className="nav-link">{link.text}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav;
