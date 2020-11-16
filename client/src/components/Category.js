import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiCornerDownRight, FiCornerDownLeft } from 'react-icons/fi';

const Category = (props) => {
  const [posts, setPost] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    const category = props.match.params.id;
    setCurrentCategory(category);

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const fetchData = async () => {
      try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category`, { category }, config);
        setPost(res.data);
      }
      catch (err) {
        alert('Error connection!')
      }
    }

    fetchData();
  }, [props.match.params.id]);

  const getCategoryBlogs = () => {
    let list = [];
    let result = [];

  posts.map(Post => {
    return list.push(
      <div className="position-relative row">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0">{Post.title}</h3>
          <strong className="d-inline-block mb-2 text-primary">{Post.category}</strong>
          <p className="card-text mb-auto mr-2">{Post.excerpt}</p>
          <div className="mb-1 text-muted">{Post.month} {Post.day}</div>
          <Link to={`/blog/${Post.slug}`} className="stretched-link">read more <FiCornerDownRight /></Link>
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
    <div className="container mt-3 mb-5">
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex">
          <Link className="p-2" to="/category/news">News</Link>
          <Link className="p-2" to="/category/events">Events</Link>
          <Link className="p-2" to="/category/gastronomy">Gastronomy</Link>
          <Link className="p-2" to="/category/jobs">Jobs</Link>
        </nav>
      </div>
      <hr />
      {getCategoryBlogs()}
      <hr />
      <p className="p-2 p-md-2 mb-3"><Link to='/blog' className="font-weight-bold"><FiCornerDownLeft /> Back to Blogs</Link></p>
    </div>
    </>
  );
};

export default Category;
