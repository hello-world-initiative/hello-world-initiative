import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <small className="footer-text">
        <span className="footer-symbol">&copy;</span> {new Date().getFullYear()}{" "}
        | Hello World Initiative | Find us on{" "}
        <a
          className="footer-link"
          href="https://github.com/hello-world-initiative"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </small>
    </footer>
  );
};

export default Footer;
