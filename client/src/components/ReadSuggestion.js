import React, { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiCornerDownLeft } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';

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
      .get(`${process.env.REACT_APP_API_URL}/api/suggestions/${id}`, config)
      .then(res => {
        setAuthor(res.data);
      })
      .catch(err => {
        toast.error('Error connection!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, [props.match.params.id]);
    

    return (
      <>
        <div className="container mt-5 mb-5">
          <Fade duration={1200}>
          <div className="p-4 p-md-5 text-light bg-primary row">
            <div className="col-md-12 px-0">
              <h1 className="text-white">{author.topic}</h1>
              <h5 className="my-3 mt-5 text-white">{author.user}</h5>
            </div>
          </div>
          <div className='mt-5 mb-5'/>
            <p>{author.content}</p>
          </Fade>
          <p className="p-2 p-md-2 mb-5"><Link to='/suggestions' className="font-weight-bold"><FiCornerDownLeft /> Back to Suggestions list</Link></p>
        </div>
      </>
    );
  }

export default Profile;
