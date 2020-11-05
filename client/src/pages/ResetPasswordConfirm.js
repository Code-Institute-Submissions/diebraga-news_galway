import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../redux/actions/auth';

const ResetPasswordConfirm = (props) => {
  const [requestSent, setRequestSent] = useState(false);

  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: ''
  });

  const { new_password, re_new_password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    
    const uid = props.match.params.uid;
    const token = props.match.params.token;

    props.reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
  };

  if (requestSent)
    return <Redirect to='/' />;

  return (
    <div className='container mt-5 col-sm-6'>
      <h1>Enter Your New Password</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input 
              className='form-control'
              type='password'
              placeholder='New Password'
              name='new_password'
              value={new_password}
              onChange={e => onChange(e)}
              minLength='6'
              required
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              placeholder='Confirm New Password'
              name='re_new_password'
              value={re_new_password}
              onChange={e => onChange(e)}
              minLength='6'
              required
            />
          </div>
          <button className='btn btn-primary btn-block' type='submit'>Reset Password</button>
      </form>
      <p className='mt-3'>
        <Link to="/login">Back to Login</Link>
      </p>
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);