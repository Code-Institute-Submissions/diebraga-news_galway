import React from 'react';
import { Fade } from "react-awesome-reveal";
import Subscriptions from '../components/Subscriptions';

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