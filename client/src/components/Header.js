import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/auth';

const Header = ({ isAuthenticated, logout }) => {
  const authLinks = (
    <li className="nav-item">
      <a className='nav-link' onClick={logout} href='#!'>Logout</a>
    </li>
  );

  const guestLinks = (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" exact to='/login'>Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to='/register'>Register</NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to='/'> Galway News</Link>
    <button 
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" exact to='/blog'>Blog</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" exact to='/authors'>Authors</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" exact to='/subscribe'>Subscribe</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" exact to='/shop'>Shop</Link >
        </li>
          { <>{ isAuthenticated ? authLinks : guestLinks }</> }
      </ul>
    </div>
  </nav>
  );
};

const mapStateToProps = state => ({
isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Header);