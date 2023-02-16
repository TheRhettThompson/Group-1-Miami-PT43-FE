// import React, { useContext } from "react";
// import { Context } from "../store/appContext";
// import { Link } from "react-router-dom"
// import '../styles/Favorites.css';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Jobs from 



// const Favorites = () => {
//     const { store, actions } = useContext(Context)
//     const favList = store.favorites.map((fav) => {

//         return (
//             <Link to={fav.job}>
//                 <div key={fav.name}>



//                     <Card border="info" style={{ width: '18rem' }}>
//                         <Card.Header>{job.company.name}</Card.Header>
//                         <Card.Body>
//                             <Card.Title>{job.job_title_text}</Card.Title>
//                             <Card.Text>
//                                 {job.location_name}
//                             </Card.Text>
//                             <Button variant="info">Delete Job</Button>

//                         </Card.Body>
//                     </Card>
//                     <br />

//                 </div>
//             </Link>


//         )



//     })
// }



// export default Favorites;
