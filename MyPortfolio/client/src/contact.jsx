import React from 'react';
//Neil H 301373003 contact.jsx
export default function Contact() {
  return (
    <>
      <div className="myInfo">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong>nhontano@my.centennialcollege.ca</p>
        <p><strong>Phone:</strong> (647) 575-8896</p>
        <p><strong>Address:</strong> 100 Mornelle Crt, Scarborough, Ontario</p>
      </div>

      <div className="contactForm">
        
        <h2>Send a Message</h2>
        <form action='/'>
        <fieldset>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />

          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="tel" id="contactNumber" name="contactNumber" required />

          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label><br></br>
          <textarea id="message" name="message" rows="10" cols="70"  required></textarea><br></br>

          <button type="submit">Send Message</button>
          </fieldset>
        </form>

      </div>
    </>
  );
}
