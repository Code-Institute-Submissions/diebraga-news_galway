import React, { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import { FiEdit } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import { Button, Accordion, Card } from 'react-bootstrap';
// Component fetches all suggestions and list them

const Suggestions = () => {
  const [newTopic, setNewTopic] = useState('');
  const [newContent, setNewContent] = useState('');

  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {

    const URL = `${process.env.REACT_APP_API_URL}/api/suggestions/`

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('access')}`,
          'Accept': 'application/json'
        }
      };
  
      const response = await axios.get(URL, config)
      setSuggestions(response.data)
  
    } catch (error) {
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

  const deleteSuggestion = (id) => {
    const URL = `${process.env.REACT_APP_API_URL}/api/suggestions/`

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('access')}`,
          'Accept': 'application/json'
        }
      };
  
      axios.delete(`${URL}delete/${id}`, config).then(res => {
        const del = suggestions.filter(suggestion => id !== suggestion.id)
        setSuggestions(del)

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

  const updateSuggestion = (id) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('access')}`,
          'Accept': 'application/json'
        }
      };
  
      axios.put(`${process.env.REACT_APP_API_URL}/api/suggestions/update/${id}`, { 
        topic: newTopic, 
        id: id, 
        content: 
        newContent
       }, config).then(
        (response) => {
          setSuggestions(
            suggestions.map((val) => {
              return val.id === id
              ? {
                  id: val.id,
                  topic: newTopic,
                  content: newContent,
                }
              : val;
            })
          );    
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

  
  const getItems = () => {
      return suggestions && suggestions.map(({ id, topic, slug, user }) => {
        return (
          <>
          <div className="d-flex justify-content-start">
            <div>
              <button type="button" className="btn btn-light text-primary" aria-label="Close" onClick={() => deleteSuggestion(id)} ><GrClose /></button><br />
              <Accordion>
                <Accordion.Toggle as={Button} className='btn btn-light' variant="link" eventKey="0">
                  <FiEdit />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="position-sticky">
                  <h6 className="d-inline-block text-primary mt-2"> <b className='text-danger'>Edit</b> suggestion <FiCornerDownRight /></h6>
                  <input
                    className="form-control mt-3"
                    type="text"
                    placeholder="Your topic"
                    onChange={(event) => {setNewTopic(event.target.value);}}
                    required
                  />
                  <textarea
                    className="form-control mt-3"
                    placeholder="Content"
                    onChange={(event) => {setNewContent(event.target.value);}}
                    required
                  />
                  <Button className="mt-2" variant="primary" onClick={() => {updateSuggestion(id)}}>
                    Save
                  </Button>
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
            </div>
            <div key={slug}>
              <Link to={`/suggestions/${id}`}>
                <div className="col p-4 d-flex flex-column position-static">
                  <h2 className='h6'>{user}</h2>
                  <h1 className="h3 d-inline-block text-primary mt-2">{topic} <FiCornerDownRight /></h1>
                </div>
              </Link>
            </div>
          </div>
          </>
          )
        })
      }

  return (
      <>
      <div className="p-4 p-md-5 text-light bg-primary">
        <div className="col-md-12 px-0">
          <h1 className="text-white">Suggestion list</h1>
          <p className="my-3">Suggestions made by users. <b className="text-danger">note: only authors can delete or edit they own suggestions.</b></p>
          <p className="mb-0"><Link to='/suggest' className="text-white">Suggest <FiCornerDownRight /></Link></p>
        </div>
      </div>

      <div className="container mt-3 mb-5">
        <ToastContainer />
        <Fade duration={1200}>
          {getItems()}
        </Fade>
      </div>
    </>
  )
}

export default Suggestions;
