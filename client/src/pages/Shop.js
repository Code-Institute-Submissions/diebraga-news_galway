import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Products } from '../components/Products';
import { Link } from 'react-router-dom';
import { AiFillDownCircle } from 'react-icons/ai';
import { FiCornerDownRight } from 'react-icons/fi';

// Shop page render all Stripe products from Product Components
// add more in Products.js
 
const Shop = () => {
  return (
    <>
    <Fade duration={1200}>
      <div className='d-flex justify-content-around flex-wrap text-center subscriptions'>
        <div id="accordion" className='w-100'>
          <span className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <AiFillDownCircle className='icon' size={20}/>
          </span>
        <div>
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
            <h5 className="card-title">Galway News Shop</h5>
            <p className="card-text">
            Buying our products you are supporting our content creators for a independent page free of charge.<br/>Consider support us subscribing starting from 0.99€.<br/>
            </p>
            <Link to='/subscribe' className='btn btn-primary'>
            Subscribe! <FiCornerDownRight />
            </Link>
          </div>
        </div>
        </div>
        <br/>
      </div>
      <Products />
      </div>
    </Fade>
    </>
  )
}

export default Shop;