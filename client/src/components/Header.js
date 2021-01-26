import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/auth';
import { toast, ToastContainer } from 'react-toastify';

const Header = ({ isAuthenticated, logout }) => {
  const authLinks = (
    <li className="nav-item">
      <a className='nav-link' onClick={logout} href='/'>Logout</a>
    </li>
  );

  const guestLinks = (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" to='/login'>Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/register'>Register</NavLink>
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
          <Link className="nav-link" to='/blog'>Blog</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/subscribe'>Subscribe</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/shop'>Shop</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/authors'>Authors</Link >
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More
          </Link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link class="dropdown-item" to="/suggestions">Suggestion list</Link>
            <Link class="dropdown-item" to="/suggest">Suggest</Link>
            <Link class="dropdown-item" to="/reset_password">Change password</Link>
          </div>
        </li>
          { <>{ isAuthenticated ? authLinks : guestLinks }</> }
          <ToastContainer />
      </ul>
    </div>
  </nav>
  );
};

const mapStateToProps = state => ({
isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Header);