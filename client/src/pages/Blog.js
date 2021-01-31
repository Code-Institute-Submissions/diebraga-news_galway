import React, { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
// Component fetches all post and list them
// + Feature post ag the top

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      };
  
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`, config);
        setFeaturedPost(res.data[0]);
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

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
      setPosts(res.data);
    }
    catch (err) {
      // Display error only once
    }
  }

    fetchPost();
  }, []);

  const removePost = (id) => {
    const URL = `${process.env.REACT_APP_API_URL}/api/blog/`

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('access')}`,
          'Accept': 'application/json'
        }
      };
  
      axios.delete(`${URL}delete/${id}`, config).then(res => {
        const del = posts.filter(suggestion => id !== suggestion.id)
        setPosts(del)

        toast.info('Item deleted!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });  
      })  

    } catch (error) {
      toast.error('You do not have permission to delete this item!', {
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


  const getPosts = () => {
    let list = [];
    let result = [];

  posts.map(Post => {
    return list.push(
      <div className="mt-3 d-flex justify-content-between">
        <div className="col p-4 d-flex flex-column position-static">
          <Link to={`/blog/${Post.slug}`} className="">
            <h3 className="mb-0">{Post.title}</h3>
            <strong className="d-inline-block mb-2 text-primary">{Post.category}</strong>
            <p className="card-text mb-auto mr-2">{Post.excerpt}</p>
            <div className="mb-1 mt-4 text-muted">{Post.month} {Post.day}</div>
          read more <FiCornerDownRight />
          </Link>
          <Link to='' className='text-danger' aria-label="Close" onClick={() => removePost(Post.id)} >delete post.</Link>
        </div>
        <div>
          <img className='d-none d-sm-block' width="180" height="230" src={Post.thumbnail} alt={Post.thumbnail} />
        </div>
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
      <div className="container mt-3 mb-5">
        <Fade duration={1200}>
          <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex">
              <Link className="p-2" to="/category/news">News</Link>
              <Link className="p-2" to="/category/events">Events</Link>
              <Link className="p-2" to="/category/gastronomy">Gastronomy</Link>
              <Link className="p-2" to="/category/jobs">Jobs</Link>
            </nav>
          </div>

          <div className="p-4 p-md-5 text-light bg-primary row">
            <div className="col-md-12 px-0">
              <h1 className="text-white">{featuredPost.title}</h1>
              <p className="my-3">{featuredPost.excerpt}</p>
              <p className="mb-0"><Link to={`/blog/${featuredPost.slug}`} className="text-white">read more. <FiCornerDownRight /></Link></p>
              <p className='text-danger mt-3'>only staff can delete posts*</p>
            </div>
          </div>
          <ToastContainer />
          {getPosts()}
        </Fade>
      </div>
    </>
  );
};

export default Blog;
