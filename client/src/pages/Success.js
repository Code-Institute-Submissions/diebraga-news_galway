import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Confetti from "react-confetti";

const Success = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
  });

  return (
    <>
    <div className='text-center align-middle' style={{ marginTop: '70px' }}>
      <Confetti width={width} height={height} numberOfPieces={450} />
      <h1>congrats!</h1>
      <p style={{ fontSize: '20px' }}>Your payment has been processed successfully!</p>
      <br/>
      <Link className='btn btn-primary' to='shop'>Shop Again</Link>
      <br/>
      <br/>
      <Link className='btn btn-primary' to='home'>Home Page</Link>
    </div>
    </>
  );
}; 
 
export default Success;