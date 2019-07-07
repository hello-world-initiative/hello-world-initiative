import React from 'react'

const Header = ({ text, pageName }) => {
  return (
    <header className={`header header-${pageName}`}>
      <h1 className="header-title">{text}</h1>
    </header>
  )
}

export default Header
