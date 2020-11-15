import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthord = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/authors/`);
        setAuthors(res.data);
    }
    catch (err) {

    }
    }

    fetchAuthord();
  }, []);

  const getAuthors = () => {
    let list = [];
    let result = [];

  authors.map(Author => {
    return list.push(
      <div className="position-relative col mt-3 text-center">
        <div className="col p-4 d-flex flex-column position-static align-items-center">
        <img className='rounded-circle' width="230" height="230" src={Author.photo} alt='' />
          <h3 className="mb-0 mt-4">{Author.name}</h3>
          <h5 className="mb-0 mt-2">{Author.role}</h5>
          <strong className="d-inline-block mb-3 text-primary">{Author.job}</strong>
          <Link to={`/authors/${Author.id}`} className="stretched-link">View profile <FiCornerDownRight /></Link>
        </div>
      </div>
    );
  });

  for (let i = 0; i < list.length; i += 2) {
    result.push(
      <div className='col-md-12'>
        <div key={i} className='row mb-2'>
          <div className='col-md-6'>
            {list[i]}
          </div>
          <div className='col-md-6'>
            {list[i+1] ? list[i+1] : null}
          </div>
        </div>
      </div>
    );
  }

  return result;
};

  return (
    <>
    <div className="container mt-5 mb-3">
      <div className="p-4 p-md-5 text-light bg-primary row">
        <div className="col-md-12 px-0">
          <h1 className="text-white">Authors</h1>
          <h6 className="my-3 mt-5 text-white">Meet our developers and content creators <FiCornerDownRight /></h6>
        </div>
      </div>
    </div>
    {getAuthors()}
    </>
  );
};

export default Authors;