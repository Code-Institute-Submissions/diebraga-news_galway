import React, { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';
import { toast } from 'react-toastify';

// Component fetches all suggestions and list them

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Accept': 'application/json'
      }
    };

    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/suggestions/`, config);
      setPosts(res.data);
    }
    catch (err) {
      toast.error('Error connection!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

    fetchPost();
  }, []);

  const getPosts = () => {
    let list = [];
    let result = [];

  posts.map(Post => {
    return list.push(
      <div className="position-relative row mt-3">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0">{Post.user}</h3>
          <h5 className="d-inline-block mb-2 text-primary mt-2">{Post.topic}</h5>
          <p className="card-text mb-auto mr-2">{Post.content}</p>
        </div>
        <img className='d-none d-sm-block' width="180" height="230" src={Post.thumbnail} alt='' />
      </div>
    );
  });

  for (let i = 0; i < list.length; i += 2) {
    result.push(
      <div key={i} className='row mb-2'>
        <div className='col-md-12'>
          {list[i]}
        </div>
        <div className='col-md-12'>
          {list[i+1] ? list[i+1] : null}
        </div>
      </div>
    );
  }

  return result;
};

  return (
    <>
      <div className="p-4 p-md-5 text-light bg-primary">
        <div className="col-md-12 px-0">
          <h1 className="text-white">Suggestioin list</h1>
          <p className="my-3">...</p>
          <p className="mb-0"><Link to='/suggest' className="text-white">Suggest <FiCornerDownRight /></Link></p>
        </div>
      </div>

      <div className="container mt-3 mb-5">
        <Fade duration={1200}>
          {getPosts()}
        </Fade>
      </div>
    </>
  );
};

export default Blog;
