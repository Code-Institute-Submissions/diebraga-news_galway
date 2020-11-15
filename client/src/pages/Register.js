import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signup } from '../redux/actions/auth';

const Register = ({ signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    re_password: ''
  });

  const [accountCreated, setAccountCreated] = useState(false);

  const { name, email, password, re_password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (password === re_password) {
      signup({ name, email, password, re_password });
      setAccountCreated(true);
    }
  };

  if (isAuthenticated)
    return <Redirect to='/blog' />;

  if (accountCreated)
    return <Redirect to='login' />;
  
  return (
    <div className='container mt-5 col-sm-6'>
      <Fade duration={1200}>
        <h1>Register</h1>
        <p>Create a New Account</p>
        <form onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input 
              className='form-control'
              type='text'
              placeholder='Name*'
              name='name'
              value={name}
              onChange={e => onChange(e)}
              required 
            />
          </div>
          <div className='form-group'>
            <input 
              className='form-control'
              type='email'
              placeholder='Email*'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required 
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              placeholder='Password*'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              minLength='6'
              required
            />
          </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='password'
            placeholder='Confirm Password*'
            name='re_password'
            value={re_password}
            onChange={e => onChange(e)}
            minLength='6'
            required
          />
        </div>
        <button className='btn btn-primary btn-block' type='submit'>Register</button>
      </form>
      <p className='mt-3'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
      </Fade>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { signup })(Register);