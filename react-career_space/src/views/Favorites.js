// import React, { useContext } from "react";
// import { Context } from "../store/appContext";
// import { Link } from "react-router-dom"
// import '../styles/Favorites.css';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


// const Favorites = () => {
//     const { store, actions } = useContext(Context)
//     const favList = store.favorites.map((fav) => {

//         return (
//             <Link to={fav.job}>
//                 <div key={fav.name}>



//                     <Card border="info" style={{ width: '18rem' }}>
//                         <Card.Header>{fav.company.name}</Card.Header>
//                         <Card.Body>
//                             <Card.Title>{fav.job_title_text}</Card.Title>
//                             <Card.Text>
//                                 {fav.location_name}
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
