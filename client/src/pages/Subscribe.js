import React from 'react';
import { Fade } from "react-awesome-reveal";
import Subscriptions from '../components/Subscriptions';

// Shop page render all Stripe products from Product Components
// add more in Subscriptions.js

const Subscribe = () => {
  return (
    <>
      <Fade duration={1200}>
        <Subscriptions />
      </Fade>
    </>
  );
}

export default Subscribe;