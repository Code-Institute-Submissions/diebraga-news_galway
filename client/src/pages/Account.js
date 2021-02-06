import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Accordion, Card } from 'react-bootstrap';
import { FiCornerDownRight } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';

const Account = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/auth/users/me/`

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('access')}`,
          'Accept': 'application/json'
        }
      };
  
      const response = await axios.get(URL, config)
      setUser(response.data)
  
    } catch (error) {
      toast.error('Error Connection!', {
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

  const [newName, setNewName] = useState('');

  const updateSuggestion = () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('access')}`,
          'Accept': 'application/json'
        }
      };
      
      axios.put(`${process.env.REACT_APP_API_URL}/auth/users/me/`, { 
        name: newName 
       }, config).then(
        (response) => {setUser(response)
          window.location.reload();
        });

      } catch (error) {
        toast.error('Error Editing!', {
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


  return (
    <>
      <div className="container mt-5 mb-5">
        <Fade duration={1200}>
          <div className="p-4 p-md-5 text-light bg-primary row">
            <div className="col-md-12 px-0">
              <h1 className='text-white'>Account</h1>
              <h5 className='text-white mt-3 mb-4' >Personal Informations</h5>
              <Accordion>
                Username:
                <Accordion.Toggle as={Button} className='text-info' variant="link" eventKey="0">
                  {user.name}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="position-sticky">
                  <input
                    className="form-control mt-3"
                    type="text"
                    min='4'
                    max='30'
                    placeholder="Username"
                    onChange={(event) => {setNewName(event.target.value);}}
                    required
                  />
                  <Button className="mt-2" variant="primary" onClick={() => {updateSuggestion(user.id)}}>
                    Save
                  </Button>
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              <p style={{cursor: 'not-allowed'}}>Email: &nbsp;{user.email}</p>
              <p><Link to='/reset_password' className="text-info">Change password</Link></p>
              <p style={{cursor: 'not-allowed'}}>User_id: &nbsp;{user.id}</p><br />
              <p><Link to='/' className="text-white">Home Page <FiCornerDownRight /></Link></p>
              <p><Link to='/blog' className="text-white">Blog Posts <FiCornerDownRight /></Link></p>
            </div>
          </div>
        </Fade>
        <ToastContainer/>
      </div>
    </>
  );
};

export default Account;
