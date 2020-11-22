import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="position-relative col text-center bg-primary min-vh-100">
      -
      <div className="col p-4 d-flex flex-column mt-5 mb-5 position-static align-items-center">
      <Fade duration={1200}>
        <h1 className='text-white'>
          Galway News
        </h1>
        <h3 className='text-white mt-4'>
          <Link className="text-white" to='/blog'>
            Start <FiCornerDownRight />
          </Link>
        </h3>
        <h5 className='text-white mt-3'>
          <Link className="text-white" to='/shop'>
            Shop <FiCornerDownRight />
          </Link>
        </h5>
        <h5 className='text-white mt-2'>
          <Link className="text-white" to='/subscribe'>
            Subscribe <FiCornerDownRight />
          </Link>
        </h5>
        </Fade>
      </div>
      -
      <h6>
        <Link className="text-white mr-4" to='/login'>Login</Link> - <Link className="text-white ml-4" to='/register'>Register</Link>
      </h6>
      -
      <Footer />
    </div>
  )
}

export default Home;