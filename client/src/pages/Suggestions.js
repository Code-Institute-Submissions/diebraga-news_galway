import React, { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';
import { toast } from 'react-toastify';

// Component fetches all suggestions and list them

const Suggestions = () => {
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

  const removeData = (id) => {
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
      })  

      toast.info('Item deleted!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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

  const getItems = () => {
      return suggestions && suggestions.map(({ id, user, topic }) => {
        return (
          <>
          <div key={id} className="mt-3 d-flex justify-content-between">
            <Link to={`/suggestions/${id}`} className="mt-3">
              <div className="col p-4 d-flex flex-column position-static">
                <h6 className="mb-0">{user}</h6>
                <h6 className="d-inline-block mb-2 text-primary mt-2">{topic}  <FiCornerDownRight /></h6>
              </div>
            </Link>
            <div>
              <button type="button" className="btn-close" aria-label="Close" onClick={() => removeData(id)} /><br /><br />
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
          <p className="my-3">Suggestions made by users. <b className="text-danger">note: Only staff can delete suggestions.</b></p>
          <p className="mb-0"><Link to='/suggest' className="text-white">Suggest <FiCornerDownRight /></Link></p>
        </div>
      </div>

      <div className="container mt-3 mb-5">
        <Fade duration={1200}>
          {getItems()}
        </Fade>
      </div>
    </>
  )
}

export default Suggestions;
