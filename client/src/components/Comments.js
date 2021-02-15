import React, { useState } from 'react';
import axios from 'axios';
import { FiCornerDownRight } from 'react-icons/fi';
import { ToastContainer } from 'react-toastify';

const Comments = (props) => {
  const [comment, setComment] = useState('');

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setComment(e.currentTarget.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      content: comment,
      post: props.post
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
      }
    };
    

    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/comments/create`, body, config,) 
      .then(res => {
        setLoading(false);
        setComment('');
      })
      .catch(err => {
        setLoading(false);

      });
  
  }


  return (
    <>
    <div className='d-flex justify-content-center mt-5'>
    <form className="form-group col-md-9 align-items-center mt-2" onSubmit={onSubmit}>
      <h4 className='mb-0'>Make your comment<FiCornerDownRight /></h4>
      <ToastContainer />
      -
      <textarea
        className="form-control mt-3"
        name="content"
        minLength='20'
        placeholder="Content"
        onChange={handleChange}
        value={comment}
        maxlength="500"
        required
      />
      <br />
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <button className="btn btn-primary btn-mg" type="submit">
          Comment
        </button>
      )}
      -
    </form>
    </div>
    <h4 className='mt-5'>Comments</h4>
    <hr />
      {props?.postItem?.map(item => 
        <div className='mt-4' key={item.id}>
          <h6>{item.user_name}</h6>
          <p style={{ overflowWrap: 'break-word'}}>{item.content}</p>
          <p style={{ fontSize: '10px' }}>{item.date_created}</p>
          <hr />
        </div>
      )} 
    </>
  );
};

export default Comments;