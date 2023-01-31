import React from 'react';
import "../styles/landing.css"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Landing() {
  return (
    <div className="Landing">
      <h1>This is the Landing page</h1>



      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Left</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Right</Button>
      </ButtonGroup>
    
    </div>
  )
}

export default Landing