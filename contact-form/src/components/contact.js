import React from 'react';
import "../app.css"
const Contact = () => {
  return (
    <form className='form'>
        <h1>contact form</h1>
      
      <label>Name</label>
      <input placeholder='Name'/>

      <label>Email</label>
      <input placeholder='Email'/>

      <label>Name</label>
      <textarea placeholder='Message'></textarea>

    < button type="submit">
        submit
    </button>
    


    </form>
  );
};

export default Contact;


