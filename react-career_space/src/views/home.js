import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Home = () => {
	return (
		<div className="Home">
			<div className="OpenPossibilities ">
				<Card className="bg-dark text-white">
					<Card.Img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1pYW1pJTIwdGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60/100px270" alt="Card image" />
					<Card.ImgOverlay>
						<Card.Title><h1>Open New Opportunities</h1></Card.Title>
						<Card.Text>
							Something here. This is a wider card with supporting text below as a natural lead-in
							to additional content. This content is a little bit longer.
						</Card.Text>
						<Card.Text>Something here</Card.Text>
					</Card.ImgOverlay>
				</Card>
			</div>

			<div className="HomeIntro">
				<Card className="bg-dark text-white">
					<Card.Img src="https://images.unsplash.com/photo-1551989858-b296d6bf011a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1pYW1pJTIwdGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60/100px270" alt="Card image" />
					<Card.ImgOverlay>
						<Card.Title><h1>You need a job in the tech industry.</h1></Card.Title>
						<Card.Title><h1>South Florida needs you.</h1></Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in
							to additional content. This content is a little bit longer.
						</Card.Text>
						<Card.Text>Last updated 3 mins ago</Card.Text>
					</Card.ImgOverlay>
				</Card>
			</div>


			{/* stop here */}

			<br />

			<div className="WelcomeTo container">
				<Card className="text-center">
					<Card.Header>There's no time like the present</Card.Header>
					<Card.Body>
						<Card.Title>
							<h1>Welcome to South FL Dev Jobs</h1>
						</Card.Title>
						<Card.Text>
							All of South Florida tech sector jobs. All in one place.
						</Card.Text>
						<div className="WelcomeToButtons" >
							<Link to={'/signup'}>
								<button>Signup</button>
							</Link>
							<Link to={'/login'}>
								<button>Log In</button>
							</Link>
						</div>


						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
					<Card.Footer className="text-muted">SOMETHING HERE</Card.Footer>
				</Card>
				{/* something here */}


			</div>

			<br />
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






