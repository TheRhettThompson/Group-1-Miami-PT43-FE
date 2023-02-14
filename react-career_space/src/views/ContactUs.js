import React, { useState } from 'react';
import "../styles/ContactUs.css"

  
function ContactUs() {
  return (
    <div>
    
    <h1>Looking for work?</h1>
      <Button variant="warning" onClick={handleShow}>
        Find your next tech job now
      </Button>
    </div>
     
  )
}
  
export default ContactUs