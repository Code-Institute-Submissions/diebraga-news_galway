import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../redux/actions/auth';

const ResetPassword = (props) => {
  const [requestSent, setRequestSent] = useState(false);

  const [formData, setFormData] = useState({
    email: ''
  });

  const { email } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    props.reset_password(email);
    setRequestSent(true);
  };

  if (requestSent)
    return <Redirect to='/' />;

  return (
    <div className='container col-sm-6'>
      <h1>Enter Your Email</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input 
            className='form-control'
            type='email'
            placeholder='Your Email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
          <button className='btn btn-primary btn-block' type='submit'>Request Password</button>
        </form>
        <p className='mt-3'>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
        <p className='mt-3'>
          <Link to="/login">Back to Login</Link>
        </p>
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);