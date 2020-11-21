import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className="container-flex align-items-center bg-primary">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center col">
        <div>
          <a href='https://github.com/diebraga' target="_blank" className='text-white h2 my-5'><FaGithub /></a>
          &nbsp;&nbsp;&nbsp;
          -
          &nbsp;&nbsp;&nbsp;
          <a href='https://www.linkedin.com/in/diebraga'  target="_blank" className='text-white h2 my-5'><GrLinkedin /></a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer;