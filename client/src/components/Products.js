import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLIC_KEY}`);

// Those are the items to be selled expported to shop page.
// To create more items go to your dashboard
export const Mask = () => {
  const handleSubit = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: `${process.env.REACT_APP_PRODUCT_PRICE_ID}`, // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/cancel',
      billingAddressCollection: 'required',
      shippingAddressCollection: {
        allowedCountries: ['US', 'CA', 'IE', 'IT', 'FR'],
      }    
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <button role="link" onClick={handleSubit}>
      Buy Now
    </button>
  );
}

export const TShirt = () => {
  const handleSubit = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: `${process.env.REACT_APP_PRODUCT_PRICE_ID2}`, // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/cancel',
      billingAddressCollection: 'required',
      shippingAddressCollection: {
        allowedCountries: ['US', 'CA', 'IE', 'IT', 'FR'],
      }    
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <button role="link" onClick={handleSubit}>
      Buy Now
    </button>
  );
}

export const Mug = () => {
  const handleSubit = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: `${process.env.REACT_APP_PRODUCT_PRICE_ID3}`, // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/cancel',
      billingAddressCollection: 'required',
      shippingAddressCollection: {
        allowedCountries: ['US', 'CA', 'IE', 'IT', 'FR'],
      }    
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <button role="link" onClick={handleSubit}>
      Buy Now
    </button>
  );
}

export const NotBook = () => {
  const handleSubit = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: `${process.env.REACT_APP_PRODUCT_PRICE_ID4}`, // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/cancel',
      billingAddressCollection: 'required',
      shippingAddressCollection: {
        allowedCountries: ['US', 'CA', 'IE', 'IT', 'FR'],
      }    
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <button role="link" onClick={handleSubit}>
      Buy Now
    </button>
  );
}

