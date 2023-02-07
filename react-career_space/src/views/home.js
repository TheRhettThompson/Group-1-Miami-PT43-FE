import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom"

export const Home = () => {

	return (
		<div className="home">
			 <div>
				<h1>
					Welcome to The Career Space Project
				</h1>
			 </div>
			 <div className="buttons">
				<Link to={'/register'}>
					<button>Register</button>
				</Link>	
				<Link to={'/login'}>
					<button>Log In</button>
				</Link>
			</div>
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

 
 
 


