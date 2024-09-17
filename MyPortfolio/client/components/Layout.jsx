import { Link } from 'react-router-dom';
import React from 'react';

export default function Layout() {
  return (
    <>
      <h1>My Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
      </nav>
      <hr />
      
    
      
    </>
  );
}


