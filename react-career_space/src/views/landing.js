import React from 'react';
import "../styles/landing.css"
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


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
            <h3>Your next tech job could be under the sun</h3>
            <p>Search here for jobs in South Florida.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 myimage2"
            src="https://images.unsplash.com/photo-1546709344-8be01dfbc721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Work magic in the Magic City</h3>
            <p>Enter here for jobs in Miami-Dade, Broward, and South Florida.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 myimage3"
            src="https://images.unsplash.com/photo-1506812574058-fc75fa93fead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Why work in Silicon Valley when you could have endless beaches?</h3>
            <p>
              Search for tech jobs in Miami and South Florida here.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div >
        <h1>Career Space</h1>
        <p>The easiest way to search for tech industry jobs in South Florida</p>

        {/* <h1>By siGning up for Career Space, you agree to Career Space's Terms of Service & Privacy Policy,
            each one has a hyperlink to those pages</h1> */}
      </div>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Find your next tech job in South Florida now.</Form.Label>
          <Form.Control type="email" placeholder="Enter your email address" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="backGroundColor= #8e793e" type="submit">
        Start now
      </Button>
      </Form>

      <div className="cardGroupTestimonial">
        <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0YXJ0dXAlMjBvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60/100px180" />
          <Card.Body>
            <Card.Title><h2>Free to use</h2></Card.Title>
            <Card.Text>
              that's right. Find actual tech job listings at no cost.
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1506606352681-649023fac596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wJTIwb24lMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60/100px180" />
          <Card.Body>
            <Card.Title><h2>Find jobs based in South Florida</h2></Card.Title>
            <Card.Text>
            Work from home...on the beach. Or on-site, with beautiful views.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0YXJ0dXB8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60/100px180" />
          <Card.Body>
            <Card.Title><h2>Jobs of all tech levels available</h2></Card.Title>
            <Card.Text>
            From junior and entry level, to c-suite, Career Space has it all.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <ButtonGroup aria-label="Companies" size="lg" className="mb-2">
        <Button variant="light">Neoris Logo</Button>
        <Button variant="light">Ryder System Logo </Button>
        <Button variant="light">Chewy Logo</Button>
        <Button variant="light">Citadel Logo</Button>
        <Button variant="light">Brightstar Logo</Button>
        <Button variant="light">TracFone Wireless Logo</Button>
        <Button variant="light">ClearSale Logo</Button>
        <Button variant="light">goTRG Logo</Button>
        <Button variant="light">Mi9 Retail Logo</Button>
        <Button variant="light">Alienware Logo</Button>
        <Button variant="light">OpenEnglish Logo</Button>
      </ButtonGroup>

      <Card>
        <Card.Header>Live your best life</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              If you would have told me that I would be able to find a web dev job for an innovative startup that could easily fit in Silicon Valley, but I get to code on the beach, I would have never believed it. Until I found Career Space, of course!{' '}
            </p>
            <footer className="blockquote-footer">
              Jackie Smith <cite title="Source Title">web developer, PalmFrond.com</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>

            
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>I love Career Space!</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>









       
  


      <div className='cardGroup'>
        <Card>
          {/* <Card.Header>Testimonials</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                I thought I'd have to leave Miami to get a job in coding.
                But not anymore, with Career Space I know the opportunities are right here!{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body> */}
        </Card>



        {/* <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="371x380"
            src="https://media.istockphoto.com/id/1212615578/photo/overweight-mature-latin-woman-doing-freelance-work-outdoors-on-laptop.jpg?s=612x612&w=0&k=20&c=69Ttt9FhyKwgwTK8QB_S0pf0149YmVad9j33ChfFcrs="
          />
          <Figure.Caption style={{color: "red", marginRight: "50px" , backgroundColor: "white"}}> 
            South Florida is on its way to becoming the East Coast Silicon Valley. I want to be a part of it, and Career Space makes it easy!
          </Figure.Caption>
        </Figure> */}



        {/* <Card>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1573164574001-518958d9baa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" />
          <Card.Body>
            <Card.Text>
              South Florida is by far one of the best places for tech professionals to develop careers.
              Career Space is the best tool to do that!
            </Card.Text>
          </Card.Body>
        </Card> */}



        {/* <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                I thought I'd have to leave Miami to get a job in coding.
                But not anymore, with Career Space I know the opportunities are right here!{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card> */}
        {/* 
        <br />
        <Card>
          <Card.Img variant="top" src="https://www.istockphoto.com/search/2/image?phrase=computer%20palm%20tree&alloweduse=availableforalluses&excludenudity=true&sort=best&mediatype=photography&utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcomputer-palm-tree&utm_term=computer%20palm%20tree%3A%3A%3A" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br /> */}

        {/* <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card> */}
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