import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <small className="footer-text">
        <span className="footer-symbol">&copy;</span> {new Date().getFullYear()} | Hello World Initiative
      </small>
    </footer>
  )
}

export default Footer
