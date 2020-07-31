import React from 'react';
import Navbar from './Navbar';
// const categories = [
//   'Politics',
//   'Tech',
//   'Entertainment',
//   'Travel',
//   'Sports'
// ]

const Header = () => {
  return (
    <div className="site-wrap">

      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <Navbar/>
    </div>
  )
}


export default Header;