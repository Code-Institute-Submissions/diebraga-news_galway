import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Subscriptions } from '../components/Subscriptions';
import { Link } from 'react-router-dom';
import { AiFillDownCircle } from 'react-icons/ai';
import { FiCornerDownRight } from 'react-icons/fi';

// Subscribe page render all Stripe Subscriptions from subscription Components
 
const Subscribe = () => {
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
            <h5 className="card-title">Donation Subscription</h5>
            <p className="card-text">
            Support Our Content Creators to deliver quality news free of ads? Consider Subscribing starting from as litle as 0.99€.<br/>Or visit our shop.<br/>
            </p>
            <Link to='/shop' className='btn btn-primary'>
            Shop Now! <FiCornerDownRight />
            </Link>
          </div>
        </div>
        </div>
        <br/>
      </div>
      <Subscriptions />
      </div>
    </Fade>
    </>
  )
}

export default Subscribe;