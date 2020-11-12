import React from 'react';
import { Mask, TShirt, Mug, NotBook } from '../components/Products';
import { Link } from 'react-router-dom';
import { AiFillDownCircle } from 'react-icons/ai';

const Shop = () => {
  return (
    <>
    <div className='d-flex justify-content-around flex-wrap text-center subscriptions'>
      <div id="accordion" className='w-100'>
      <span className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <AiFillDownCircle className='icon' size={20}/>
      </span>
      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
        <div className="card-body">
          <h5 className="card-title">Galway News Shop</h5>
          <p className="card-text">
            Buying our products you are supporting our content creators for a independent page free of charge.<br/>Consider support us subscribing starting from 0.99€.<br/>
          </p>
          <Link to='/subscribe' className='btn btn-primary'>
            Subscribe!
          </Link>
        </div>
      </div>
      </div>
      <Mask />
      <TShirt />
      <Mug />
      <NotBook />
      </div>
    </>
  )
}

export default Shop;