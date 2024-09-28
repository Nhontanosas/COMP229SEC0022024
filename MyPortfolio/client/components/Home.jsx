import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for routing
//Neil H 301373003 Home.jsx
export default function Home() {
  return (
    <div> 
      
      <br />
      <br />
      <br />
      <h1>“Do one thing every day that scares you.” – Eleanor Roosevelt</h1>
      <img src="/img/welcome.jpg" alt="Me" className="welcomeImg" width="250" />

      <div className="welcome-section">
        <h2 className='welcomeMssge'>Welcome to My Website</h2>
        <p>
          Thank you for visiting! My name is Neil Tyrone Hontanosas, I am a student at Centennial College. I am currently studying Software Engineering Technology. Please feel free to explore more about my website!
        </p>
      </div>
      <div className="nav">
        <Link to="about" className="aboutBtn"><h2>Explore More</h2></Link>
       
      </div>
    </div>
  );
}
