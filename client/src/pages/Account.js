import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import axios from 'axios';
import { logout } from '../redux/actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Accordion, Card } from 'react-bootstrap';
import { FiCornerDownRight } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';

const Account = ({ logout }) => {
  const [user, setUser] = useState([])

  // Render user
  useEffect(() => {
    getData()
  }, [user])

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
    // Auth headers
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('access')}`,
          'Accept': 'application/json'
        }
      };
      //  Update user request
      axios.put(`${process.env.REACT_APP_API_URL}/auth/users/me/`, { 
        name: newName 
       }, config).then(
        (response) => {setUser(response)
          
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
              <h5 className='text-white mt-3 mb-4' >Personal Information</h5>
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
              <p style={{cursor: 'not-allowed'}}>Email: &nbsp;<b className="text-info">{user.email}</b></p>
              <p>Password: <Link to='/reset_password' className="text-info">&nbsp; change password</Link></p>
              <p style={{cursor: 'not-allowed'}}>Userid: &nbsp;<b className="text-info">{user.id}</b></p><br />
              <p><Link to='/' className="text-white">Home Page <FiCornerDownRight /></Link></p>
              <p><Link to='/blog' className="text-white">Blog Posts <FiCornerDownRight /></Link></p>
              <a className='text-danger' onClick={logout} href='/'>Logout <FiCornerDownRight /></a>
            </div>
          </div>
        </Fade>
        <ToastContainer/>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
  });
  
export default connect(mapStateToProps, { logout })(Account);
