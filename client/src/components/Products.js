import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLIC_KEY}`);


export const Products = () => {
  const [products, setProducts] = useState([]);

  // Render product items
  useEffect(() => {
    const fetchProduct = async () => {

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('access')}`,
          'Accept': 'application/json'
        }
      };
  
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/`, config);
        setProducts(res.data);
    }
    catch (err) {
      toast.error('Error connection!', {
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

    fetchProduct();
  }, []);


  const getProducts = () => {
    let list = [];
    let result = [];

  products.map(Product => {
    const handleSubit = async (event) => {
      // When the customer clicks on the button, redirect them to Checkout.
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{
          price: `${Product.price_id}`, // Replace with the ID of your price
          quantity: 1,
        }],
        mode: 'payment',
        successUrl: `${process.env.REACT_APP_API_URL}/success`,
        cancelUrl: `${process.env.REACT_APP_API_URL}/cancel`,
        billingAddressCollection: 'required',
        shippingAddressCollection: {
          allowedCountries: ['US', 'CA', 'IE', 'IT', 'FR'],
        }    
      });
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `error.message`.
    };
  
    return list.push(
      <div className="card m-3" key={Product.price_id} style={{ width: '260px' }}>
        <img className="card-img-top" src={Product.image} alt="Product" style={{ height: '220px' }}/>
        <div className="card-body">
          <h5 className="card-title">{Product.title}</h5>
          <p className="card-text">{Product.description}</p>
          <button className='btn btn-primary btn-block' role="link" onClick={handleSubit}>
            {Product.price}€
          </button>
        </div>
      </div>
    );
  });

  for (let i = 0; i < list.length; i += 2) {
    result.push(
      <div className=''>
        <div key={i} className='d-flex align-content-around flex-wrap'>
          <div>
            {list[i]}
          </div>
          <div>
            {list[i+1] ? list[i+1] : null}
          </div>
        </div>
      </div>
    );
  }

  return result;
};

  return (
    <>
    <ToastContainer />
    {getProducts()}
    </>
  );
}

