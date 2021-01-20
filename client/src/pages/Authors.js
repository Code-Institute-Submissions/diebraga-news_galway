import React, { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';

// Component fetchs api authors and list all them.

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthor = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/authors/`);
        setAuthors(res.data);
    }
    catch (err) {
      alert('Error connection!')
    }
  }

    fetchAuthor();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: ``,
    message: '',
  });

  const { name, email, subject, message } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/contacts/`,
        { name, email, subject, message },
        config,
      )
      .then(res => {
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch(err => {
        setLoading(false);
        window.scrollTo(0, 0);
      });
    };

  const getAuthors = () => {
    let list = [];
    let result = [];

  authors.map(Author => {
    return list.push(
      <Fade duration={1200}>
        <div className="position-relative col mt-3 text-center mb-5">
          <div className="col p-4 d-flex flex-column position-static align-items-center">
          <img className='rounded-circle' width="230" height="230" src={Author.photo} alt='' />
            <h3 className="mb-0 mt-4">{Author.name}</h3>
            <h5 className="mb-0 mt-2">{Author.role}</h5>
            <Link to={`/authors/${Author.id}`} className="stretched-link mt-3">View profile <FiCornerDownRight /></Link>
          </div>
        </div>
      </Fade>
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
    <div className='d-flex justify-content-center'>
    <form className="form-group col-md-6 align-items-center mt-5" onSubmit={e => onSubmit(e)}>
      <h4 className='mb-0'>Get in touch <FiCornerDownRight /></h4>
      -
      <input
        className="form-control"
        name="name"
        type="text"
        placeholder="Full Name"
        onChange={e => onChange(e)}
        value={name}
        required
      />
      <input
        className="form-control mt-3"
        name="email"
        type="email"
        placeholder="Your Email"
        onChange={e => onChange(e)}
        value={email}
        required
      />
      <input
        className="form-control mt-3"
        name="subject"
        type="text"
        placeholder="Subject"
        onChange={e => onChange(e)}
        value={subject}
        required
      />
      <textarea
        className="form-control mt-3"
        name="message"
        placeholder="Message"
        onChange={e => onChange(e)}
        value={message}
        required
      />
      <br />
      {loading ? (
        <div>
          Loading...
        </div>
      ) : (
        <button className="btn btn-primary btn-lg btn-block" type="submit">
          Send
        </button>
      )}
      -
    </form>
    </div>
    </>
  );
};

export default Authors;