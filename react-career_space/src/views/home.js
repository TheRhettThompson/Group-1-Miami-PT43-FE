import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

export const Home = () => {
	return (
		<div className="Home">
			<div className="OpenPossibilities ">
				<Card className="bg-dark text-white">
					<Card.Img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1pYW1pJTIwdGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60/100px270" alt="Card image" />
					<Card.ImgOverlay className="homeImgOverTop">
						<Card.Title><h1>Open New Opportunities</h1></Card.Title>
						<Card.Text>
							Your next tech job could be under the sun.
						</Card.Text>
						{/* <Card.Text>Something here</Card.Text> */}
					</Card.ImgOverlay>
				</Card>
			</div>

			<div className="HomeIntro">
				<Card className="bg-dark text-white">
					<Card.Img className="homeIntroImg" src="https://images.unsplash.com/photo-1551989858-b296d6bf011a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1pYW1pJTIwdGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60/100px270" alt="Card image" />
					<Card.ImgOverlay className="homeIntroOverlay">
						<Card.Title><h1>You need a job in the tech industry.</h1></Card.Title>
						<Card.Title><h1>South Florida tech industry needs you.</h1></Card.Title>
						{/* <Card.Text>
							This is a wider card with supporting text below as a natural lead-in
							to additional content. This content is a little bit longer.
						</Card.Text> */}
					</Card.ImgOverlay>
				</Card>
			</div>

			<br />

			<div className="WelcomeTo container">
				<Card className="text-center">
					{/* <Card.Header>There's no time like the present</Card.Header> */}
					<Card.Body>
						<Card.Title>
							<h1>Welcome to South FL Dev Jobs</h1>
						</Card.Title>
						<Card.Text>
							All of the South Florida tech sector jobs. All in one place.
						</Card.Text>

						<div className=" " >
							<Link to={'/signup'}>
								<button className="WelcomeToButtons">Signup</button>
							</Link>
							<Link to={'/login'}>
								<button className="WelcomeToButtons">Log In</button>
							</Link>
						</div>




					</Card.Body>
					{/* <Card.Footer className="text-muted">SOMETHING HERE</Card.Footer> */}
				</Card>
				{/* something here */}


			</div>



			<div className="TriCounties container">
				<CardGroup>
					<Card>
						<Card.Img variant="top" src="https://images.unsplash.com/photo-1577172249844-716749254893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvdXRoJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60/100px160" />
						<Card.Body>
							<Card.Title>Broward</Card.Title>
							<Card.Text>
								Tech jobs in Fort Lauderdale, Hollywood, Coral Springs, Pompano Beach.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted"><Button variant="primary">Find tech jobs in Broward</Button>{' '}</small>
						</Card.Footer>
					</Card>
					
					
					<Card>
						<Card.Img variant="top" src="https://images.unsplash.com/photo-1623424461995-c418632a2b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG93bnRvd24lMjBtaWFtaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60/100px160" />
						<Card.Body>
							<Card.Title>Miami-Dade</Card.Title>
							<Card.Text>
								Tech jobs in the Miami metropolitan area. <br /> South Beach, Coral Gables, Doral, Kendall down to the Florida Keys.
							</Card.Text>
						</Card.Body>
						<Card.Footer> 
							<small className="text-muted"><Button variant="primary">Find tech jobs in Miami-Dade</Button>{' '}</small>
						</Card.Footer>
					</Card>

					

					<Card>
						<Card.Img variant="top" src="https://images.unsplash.com/photo-1549399541-337e17f70ad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdlc3QlMjBwYWxtJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60/100px160" />
						<Card.Body>
							<Card.Title>Palm Beaches</Card.Title>
							<Card.Text>
								Tech jobs in Boca Raton, West Palm Beach, Delray Beach, Lake Worth and beyond.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted"><Button variant="primary">Find tech jobs in Palm Beaches</Button>{' '}</small>
						</Card.Footer>
					</Card>
				</CardGroup>






			</div>
			<br />


			{/* <div>
				<h1>Career Advice</h1>
			</div> */}
			{/* 
			<div>
					<h1>Latest happenings and events</h1>
			</div> */}

			{/* <br />
			<Card className="bg-dark text-white">
				<Card.Img src="https://images.unsplash.com/photo-1597535973747-951442d5dbc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fG1pYW1pJTIwdGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60/100px270" alt="Card image" />
				<Card.ImgOverlay>
					<Card.Title><h1>114,000 job opportunities.* Hundreds of tech companies.</h1></Card.Title>
					<Card.Text>
						don't wait. Transform your life something something here. This is a wider card with supporting text below as a natural lead-in
						to additional content. This content is a little bit longer.
					</Card.Text>
					<Card.Text>EMAIL BAR HERE</Card.Text>
				</Card.ImgOverlay>
			</Card>

			<div>
				<h1>Software developer recruiters</h1>
			</div> */}


			{/* THIS IS FOR THE BUTTONS */}
			{/* <div className="buttons">
				<Link to={'/register'}>
					<button>Register</button>
				</Link>
				<Link to={'/login'}>
					<button>Log In</button>
				</Link>
			</div> */}
			{/* BUTTONS END HERE */}

		</div>
	);
};

// function Home() {
//   const { store, actions } = useContext(Context);
//   useEffect(() => {
//     actions.getJobsTest();

//   }, []);
//   return (
//     <div className="Home">
//       <h1>This is the Home page</h1>
//     </div>
//   )
// }

export default Home






