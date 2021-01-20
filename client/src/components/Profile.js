import React, { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiCornerDownRight, FiCornerDownLeft } from 'react-icons/fi';

/**
 *  Page fetches api matching author id to 
 *  show his profile.
 * 
 *  Get in touch saves message in the database
 *  and send email.
 */

const Profile = (props) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const id = props.match.params.id;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
      }
    };

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/authors/${id}`, config)
      .then(res => {
        setAuthor(res.data);
      })
      .catch(err => {
        alert('Error connection!')
      });
  }, [props.match.params.id]);
    

    return (
    <>
    <Fade duration={1200}>
      <div className="position-relative col mt-4 text-center mb-5">
        -
        <div className="col p-4 d-flex flex-column position-static align-items-center">
          <img className='rounded-circle' width="230" height="230" src={author.photo} alt='' />
          <h3 className="mb-0 mt-4">{author.name}</h3>
          <h5 className="mb-0 mt-2">{author.role}</h5>
          <h6 className="mb-0 mt-3">{author.phone}</h6>
          <h6 className="mb-0 mt-2">{author.email}</h6>
          <h6 className="mb-0 mt-2">{author.day_born}-{author.month_born}-{author.year_born}</h6>
        </div>
        <p className="p-2 p-md-2 mb-5"><Link to='/authors' className="font-weight-bold"><FiCornerDownLeft /> Back to Authors</Link></p>
      </div>
    </Fade>
    </>
  );
}

export default Profile;
