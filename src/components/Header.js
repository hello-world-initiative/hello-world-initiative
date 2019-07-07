import React from 'react'

const Header = ({ text, pageName }) => {
  return (
    <header className={`header header-${pageName}`}>
      {/* We use the .inside-container here to handle longer page titles that might go outside the "content area" on smaller screens */}
      <div className="inside-container">
        <h1 className="header-title">{text}</h1>
      </div>
    </header>
  )
}

export default Header
