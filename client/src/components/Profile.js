import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiCornerDownRight } from 'react-icons/fi';

const Profile = (props) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const id = props.match.params.id;

    axios
      .get(`http://127.0.0.1:8000/api/authors/${id}`)
      .then(res => {
        setAuthor(res.data);
      })
      .catch(err => {
        
      });
  }, [props.match.params.id]);
  

  return (
    <div className="position-relative col mt-3 text-center">
      <div className="col p-4 d-flex flex-column position-static align-items-center">
        <img className='rounded-circle' width="230" height="230" src={author.photo} alt='' />
        <h3 className="mb-0 mt-4">{author.name}</h3>
        <h5 className="mb-0 mt-2">{author.role}</h5>
        <h6 className="mb-0 mt-3">{author.phone}</h6>
        <h6 className="mb-0 mt-2">{author.email}</h6>
        <h6 className="mb-0 mt-2">{author.day_born}-{author.month_born}-{author.year_born}</h6>
        <h6 className='mb-0 mt-3'>Get in touch <FiCornerDownRight /></h6>
      </div>
    </div>
  );
}

export default Profile;
