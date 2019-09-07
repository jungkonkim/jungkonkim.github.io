import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="copyright">
          <span>
            © <a href="mailto:jungkonkim@gmail.com">jungkon Kim</a> 2018, All
            rights reserved. Powered by {` `}
            <a href="https://www.gatsbyjs.org/">Gatsby</a>
          </span>
        </div>
        <div className="submenu" />
      </footer>
    );
  }
}

export default Footer;
