import React, { useState } from 'react';
import "../styles/ContactUs.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <div className='ContactUs'>

      <div className='contactUsimg'>
        <Card className=" text-white contactimg1">
          <Card.Img src="https://images.unsplash.com/photo-1506606352681-649023fac596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxsYXB0b3AlMjBvbiUyMHRoZSUyMGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60/887px180" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title><h1>We want to hear from you</h1></Card.Title>
            <Card.Text>
              Contact SouthFLDevJobs with questions or inquiries. This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div className='contactUsForm container'>

        <Form>
            <div className='nameEmailPhone container'>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="firstName" placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="lastName" placeholder="Last Name" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  {/* <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="phone" placeholder="Phone number" />
                </Form.Group>
              </Row>
            </div>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Florida</option>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>American Samoa</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Connecticut</option>
                <option>Delaware</option>
                <option>District of Columbia</option>
                <option>Florida</option>
                <option>Georgia</option>
                <option>Guam</option>
                <option>Hawaii</option>
                <option>Idaho</option>
                <option>Illinois</option>
                <option>Indiana</option>
                <option>Iowa</option>
                <option>Kansas</option>
                <option>Kentucky</option>
                <option>Louisiana</option>
                <option>Maine</option>
                <option>Maryland</option>
                <option>Massachusetts</option>
                <option>Michigan</option>
                <option>Minnesota</option>
                <option>Mississippi</option>
                <option>Missouri</option>
                <option>Montana</option>
                <option>Nebraska</option>
                <option>Nevada</option>
                <option>New Hampshire</option>
                <option>New Jersey</option>
                <option>New Mexico</option>
                <option>New York</option>
                <option>North Carolina</option>
                <option>North Dakota</option>
                <option>Northern Mariana Islands</option>
                <option>Ohio</option>
                <option>Oklahoma</option>
                <option>Oregon</option>
                <option>Pennsylvania</option>
                <option>Puerto Rico</option>
                <option>Rhode Island</option>
                <option>South Carolina</option>
                <option>South Dakota</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Trust Territories</option>
                <option>Utah</option>
                <option>Vermont</option>
                <option>Virginia</option>
                <option>Virgin Islands</option>
                <option>Washington</option>
                <option>West Virginia</option>
                <option>Wisconsin</option>
                <option>Wyoming</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter your message to us here:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>



          <Form.Text className="">
            By selecting Submit, any information you provide to
            SouthFLDevJobs will be used in accordance with SouthFLDevJobs'
            <Link to='/termsofserviceprivacy'>Terms of Service & Privacy Policy</Link>
            We may contact you regarding your submission.
          </Form.Text>

          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>


        </Form>
      </div>
    </div>

  )
}

export default ContactUs