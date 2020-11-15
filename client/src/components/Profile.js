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

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: `${author.name}`,
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
          `http://127.0.0.1:8000/api/contacts/`,
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
    

    return (
    <>
      <div className="position-relative col mt-4 text-center">
        -
        <div className="col p-4 d-flex flex-column position-static align-items-center">
          <img className='rounded-circle' width="230" height="230" src={author.photo} alt='' />
          <h3 className="mb-0 mt-4">{author.name}</h3>
          <h5 className="mb-0 mt-2">{author.role}</h5>
          <h6 className="mb-0 mt-3">{author.phone}</h6>
          <h6 className="mb-0 mt-2">{author.email}</h6>
          <h6 className="mb-0 mt-2">{author.day_born}-{author.month_born}-{author.year_born}</h6>
          <h6 className='mb-0 mt-4'>Get in touch <FiCornerDownRight /></h6>
          <form className="form-group col-md-6 align-items-center mt-5" onSubmit={e => onSubmit(e)}>
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
      </div>
    </>
  );
}

export default Profile;
