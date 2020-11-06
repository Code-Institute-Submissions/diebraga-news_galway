import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLIC_KEY}`);

const Products = () => {
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
      <button role="link" onClick={handleClick}>
        Subscribe
      </button>
      <button role="link" onClick={handleSubmit}>
        Subscribe
      </button>  
      <button role="link" onClick={handleSubscription}>
        Subscribe
      </button>  
    </>
  );
}

export default Products;