import { Link } from 'react-router-dom';
import React from 'react';
//Neil H 301373003 Layout.jsx
export default function Layout() {
  return (
    <>
      
      <h1><img src='/img/nLogo.png' width={100}></img>My Portfolio</h1>
    
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/service">Service</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
      </nav>


      
    </>
  );
}


