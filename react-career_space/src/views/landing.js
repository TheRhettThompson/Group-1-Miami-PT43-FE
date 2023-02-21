import React from 'react';
import "../styles/landing.css"
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';
import ryderLogo from '../assets/ryder-system-inc-logo-vector.png';
import chewyLogo from '../assets/chewy_logo.png';
import citadelLogo from '../assets/citadel_securities.png';
import neorisLogo from '../assets/neoris_logo.png';
import cloudLogo from '../assets/cloud_logo.jpg';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="Landing">

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 myimage1"
            src="https://images.unsplash.com/photo-1562517634-baa2da3acfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <Card.Title><h1>Your next tech job could be under the sun</h1></Card.Title>
            <Card.Text>Search here for jobs in South Florida.</Card.Text>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 myimage2"
            src="https://images.unsplash.com/photo-1546709344-8be01dfbc721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <Card.Title><h1>Work magic in the Magic City</h1></Card.Title>
            <Card.Text>Enter here for jobs in Miami, Ft Lauderdale, and the Palm Beaches.</Card.Text>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 myimage3"
            src="https://images.unsplash.com/photo-1506812574058-fc75fa93fead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Card.Title><h1>Why work in down in a Valley</h1></Card.Title>
            <Card.Title><h1>when you could have endless beaches?</h1></Card.Title>
            <Card.Text>Search for tech jobs in South Florida here.</Card.Text>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className='StartNow container'>
        <Card>
          <Card.Body>
            <div className='callToActionImput'>
              <div className='callToActionBox'>
                <Card.Title><h1>SouthFLDevJobs</h1></Card.Title>
                <Card.Text>The easiest way to search for tech industry jobs in South Florida.</Card.Text>
              </div>

              <Form >
                <Form.Group className="mb-3 formEmailContainer container" controlId="formBasicEmail">
                  <Form.Label><h2>Find your next tech job in South Florida now.</h2></Form.Label>

                  <div className='formControlBox'>
                    <Form.Control className='formEmailImput' type="email" placeholder="Enter your email address" />
                    <Button variant="mb-3" type="submit">
                      Start now
                    </Button>
                  </div>
                </Form.Group>


              </Form>
            </div>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else. By signing up for SouthFLDevJobs,
              you agree to our <Link to='/termsofserviceprivacy'>Terms of Service & Privacy Policy</Link>

            </Form.Text>
          </Card.Body>
        </Card>
      </div>



      <div className="cardGroupTestimonial container">
        <Card border="info" style={{ width: '18rem' , margin:'1rem' }} >
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0YXJ0dXAlMjBvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60/100px180" />
          <Card.Body>
            <Card.Title><h2>Free to use</h2></Card.Title>
            <Card.Text>
              that's right. Find actual tech job listings at no cost.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="info" style={{ width: '18rem' , margin:'1rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1506606352681-649023fac596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wJTIwb24lMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60/100px180" />
          <Card.Body>
            <Card.Title><h2>Find jobs based in South Florida</h2></Card.Title>
            <Card.Text>
              Work from home...on the beach. Or on-site, with beautiful views.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="info" style={{ width: '18rem' , margin:'1rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0YXJ0dXB8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60/100px180" />
          <Card.Body>
            <Card.Title><h2>Jobs of all tech levels available</h2></Card.Title>
            <Card.Text>
              From junior and entry level, to c-suite, SouthFLDevJobs has it all.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <ButtonGroup aria-label="Companies" size="lg" className="mb-2">
        <Button variant="light"><a href='https://ryder.com/careers' target='_blank' >
          <img className='companyLogos' src={ryderLogo} /> </a>
        </Button>

        <Button variant="light"><a href='https://careers.chewy.com/us/en/technology-and-product-careers/' target='_blank'>
          <img className='companyLogos' src={chewyLogo} /> </a>
        </Button>

        <Button variant="light"><a href='https://www.citadelsecurities.com/careers/open-opportunities/' target='_blank'>
          <img className='companyLogos' src={citadelLogo} /></a>
        </Button>

        <Button variant="light"><a href='https://careers.neoris.com/' target='_blank'>
          <img className='companyLogos' src={neorisLogo} /></a>
        </Button>

        <Button variant="light"><a href='https://careers.cloud.com/CloudCareers/' target='_blank'>
          <img className='companyLogos' src={cloudLogo} /></a>
        </Button>


      </ButtonGroup>

      <br>
      </br>
      <div className='quoteCard container'>
        <Card border="info">
          <Card.Header>Live your best life</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                If you would have told me that I would be able to find a web dev job for an innovative startup that could easily fit in Silicon Valley, but I get to code on the beach, I would have never believed it. Until I found SouthFLDevJobs, of course!{' '}
              </p>
              <footer className="blockquote-footer">
                Jackie Smith <cite title="Source Title">web developer, PalmFrond.com</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>

      <div>
        <div style={{ display: 'flex' }}>
          <Card className='testimonyCard' border="info">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1573164574001-518958d9baa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwd29tYW4lMjB3b3JraW5nJTIwb24lMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60/100px160" />
            <Card.Body>
              <Card.Title>Be a pioneer</Card.Title>
              <Card.Text>
                South Florida is on its way to becoming the East Coast Silicon Valley.
                I want to be a part of it, and SouthFLDevJobs makes it easy!
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='testimonyCard' border="info">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1635768229592-8c2532d33cb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ1fHx3b3JraW5nJTIwb24lMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60/100px160" />
            <Card.Body>
              <Card.Title>Right in my backyard</Card.Title>
              <Card.Text>
                I thought I'd have to leave Miami to get a job in coding.
                But not anymore, with SouthFLDevJobs I know the opportunities are right here!
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div style={{ display: 'flex' }}>
          <Card className='testimonyCard' border="info">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1613324996029-f6190a17838f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzkwfHx3b3JraW5nJTIwb24lMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60/100px160" />
            <Card.Body>
              <Card.Title>SOME BLURB HERE</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='testimonyCard' border="info">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHdvcmtpbmclMjBvbiUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60/100px160" />
            <Card.Body>
              <Card.Title>The best jobs for the best talent</Card.Title>
              <Card.Text>
                South Florida is by far one of the best places for tech professionals
                to develop careers. SouthFLDevJobs is the best tool to do that!
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <ButtonGroup aria-label="SocialMedia" size="lg" className="mb-2">
        <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-linkedin"></i></Button>
        <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-github"></i></Button>
        <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-facebook"></i></Button>
        <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-google"></i></Button>
      </ButtonGroup>

    </div>
  )
}

export default Landing