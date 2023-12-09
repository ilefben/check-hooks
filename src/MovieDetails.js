import React from 'react'
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
 function MovieDetails({ movie }) {
   return (
     <div>
       <h1>MovieDetails</h1>
       <Card style={{ width: "18rem" }}>
         <Card.Img variant="top" src={movie.posterURL} alt={movie.title} />
         <Card.Body>
           <Card.Title>{movie.title}</Card.Title>
           <Card.Text>
             {movie.trailer}
             {movie.moredetails}
           </Card.Text>
         </Card.Body>
       </Card>
     </div>
   );
 }
export default MovieDetails;