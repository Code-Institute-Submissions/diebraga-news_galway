import React, { useState } from 'react';
import axios from 'axios';
import { FiCornerDownRight } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import { FiEdit } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import { Button, Accordion, Card } from 'react-bootstrap';

const Comments = (props) => {
  const [comment, setComment] = useState('');
  const [newContent, setNewContent] = useState('');

  const [loading, setLoading] = useState(false);

  // Delete request for comment
  const deleteComment = async (id) => {
    try {
      // Headers with token authorization in the request
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('access')}`,
          'Accept': 'application/json'
        }
      };
  
      axios.delete(`${process.env.REACT_APP_API_URL}/api/comments/delete/${id}`, config)
        .then(res => {
        const del = props.postI.filter(item => id !== item.id)
        props.setPost(del)

      })  

    } catch (error) {
      toast.error('Error removing item!', {
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

  // Update Request for comments
  const updateComment = (id) => {
    try {
            // Headers with token authorization in the request
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('access')}`,
          'Accept': 'application/json'
        }
      };
  
      axios.put(`${process.env.REACT_APP_API_URL}/api/comments/update/${id}`, { 
        id: props.postItem.id, 
        content: newContent,
        post: props.post
       }, config).then(
        (response) => {
          setComment('');    
          toast.info('Item updated!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });        
        });

      } catch (error) {
        toast.error('Error updating item!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });  
      }
    };
  const handleChange = (e) => {
    setComment(e.currentTarget.value)
  }

  // Handle Submition form in post request
  const onSubmit = (e) => {
    e.preventDefault();

    // Body in the request the user it's sent by default in the api
    const body = {
      content: comment,
      post: props.post
    }

    // Headers with token authentication in the request
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
        toast.success('Comment added!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });        
      })
      .catch(err => {
        setLoading(false);

      });
  }


  return (
    <>
      <div className="p-4 p-md-5">
        <div className="col-md-12 px-0">
          <h1 className="">Comment list</h1>
          <p className="my-3">Comments made by users. <b className="text-danger">note: only authors can delete or edit they own comments.</b></p>
        </div>
      </div>
    <div className='d-flex justify-content-center'>
    <form className="form-group col-md-9 align-items-center mt-2" onSubmit={onSubmit}>
      {/*  Form */}
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

    <hr />
    {/* Comment list */}
      {props?.postItem?.map(item => 
        <div className='mt-4' key={item.id}>
          <div className='d-flex justify-content-between'>
          <h6>{item.user_name}</h6>
          <p style={{ fontSize: '10px' }}>{item.date_created}</p>
          </div>
          <p style={{ overflowWrap: 'break-word'}}>{item.content}</p>
          <div className='d-flex justify-content-start'>
            <Accordion>
              <Accordion.Toggle as={Button} className='btn btn-light btn-sm' variant="link" eventKey="0">
                <FiEdit />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="position-sticky">
                <textarea
                  className="form-control mt-3"
                  placeholder="Content"
                  onChange={(event) => {setNewContent(event.target.value);}}
                  required
                />
                <Button className="mt-2" variant="primary" onClick={() => {updateComment(item.id)}}>
                  Save
                </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
            <Button type="button" className="btn btn-light btn-sm" aria-label="Close" onClick={() => deleteComment(item.id)} ><GrClose /></Button><br />
          </div>
          <hr />
        </div>
      )} 
    </>
  );
};

export default Comments;