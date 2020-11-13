import React from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { AiFillDownCircle } from 'react-icons/ai';
import { GiCoins, GiMoneyStack } from 'react-icons/gi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { FiCornerDownRight } from 'react-icons/fi';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLIC_KEY}`);

const Subscriptions = () => {
  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        // Replace with the ID of your price
        {price: `${process.env.REACT_APP_PRICE_ID}`, quantity: 1}
      ],
      mode: 'subscription',
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/cancel',
      billingAddressCollection: 'required',
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };

  const handleSubmit = async (event) => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {price: `${process.env.REACT_APP_PRICE_ID2}`, quantity: 1}
      ],
      mode: 'subscription',
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/cancel',
      billingAddressCollection: 'required',
    });
  };

  const handleSubscription = async (event) => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {price: `${process.env.REACT_APP_PRICE_ID3}`, quantity: 1}
      ],
      mode: 'subscription',
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/cancel',
      billingAddressCollection: 'required',
    });
  };

  return (
    <>
    {/* Accordion ! */}
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
    {/* Cards ! */}
      <div className="card m-3 flex-column">
      <GiCoins className="m-5 align-items-center" size={130}/>
        <h3 className="card-title">0.99€<br/><span style={{ fontSize: '10px' }}>montly</span></h3>
          <div className="card-body d-flex">
            <button className='btn btn-primary btn-block' role="link" onClick={handleClick}>
              Subscribe
            </button>
          </div>
        </div>
      <div className="card m-3 flex-column">
      <FaRegMoneyBillAlt className="m-5 align-items-center" size={130}/>
        <h3 className="card-title">5.99€<br/><span style={{ fontSize: '10px' }}>montly</span></h3>
          <div className="card-body d-flex">
            <button className='btn btn-primary btn-block' role="link" onClick={handleSubmit}>
              Subscribe
            </button>
          </div>
        </div>
      <div className="card m-3 flex-column">
      <GiMoneyStack className="m-5" size={130}/>
        <h3 className="card-title">10.99€<br/><span style={{ fontSize: '10px' }}>montly</span></h3>
          <div className="card-body d-flex">
            <button className='btn btn-primary btn-block' role="link" onClick={handleSubscription}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscriptions;