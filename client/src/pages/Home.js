import React from 'react';
import { Link } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="position-relative col text-center bg-primary min-vh-100">
      -
      <div className="col p-4 d-flex flex-column mt-5 mb-5 position-static align-items-center">
        <h1 className='text-white'>
          Galway News
        </h1>
        <h3 className='text-white mt-4'>
          <Link className="text-white" to='/'>
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
      </div>
      -
      <h7>
        <Link className="text-white mr-4" to='/login'>Login</Link> - <Link className="text-white ml-4" to='/register'>Register</Link>
      </h7>
      -
    </div>
  )
}

export default Home;