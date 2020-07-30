import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (

      <header className="site-navbar" role="banner">
        <div className="container-fluid">
          <div className="row align-items-center">

            <div className="col-4 site-logo">
              <Link to="/" className="text-black h2 mb-0">Mini Blog</Link>
            </div>

            <div className="col-4">
              <div className="col-4 search-form-wrap js-search-form">
                <form method="get" action="#">
                  <input type="text" id="s" className="form-control" placeholder="Search..." />
                  <button className="search-btn" type="submit"></button>
                </form>
              </div>

            </div>

            <div className="col-4 text-right">
              <nav className="site-navigation" role="navigation">
                <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block mb-0">
                
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/category">Category</Link></li>
                  <li><Link to="/single">Single</Link></li>

                  <li className="d-none d-lg-inline-block"><Link to="#" className="js-search-toggle"><span className="icon-search"></span></Link></li>
                </ul>
              </nav>
              <Link to="#" className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"><span className="icon-menu h3"></span></Link></div>
          </div>

        </div>
      </header>

  )
}


export default Navbar;