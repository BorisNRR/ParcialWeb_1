import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Vehiculo(props) {
 return (
   <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Img
       style={{ width: "300", height: "200" }}
       variant="top"
       src={props.vehiculo.image}
       alt={props.vehiculo.descripcion}
     />
     <Card.Body>
       <Card.Title>
         <Link to={"/vehiculos/" + props.vehiculo.carModel}>
           {props.mascota.carMaker}
         </Link>
       </Card.Title>
       <Card.Text>{props.vehiculo.price} + {" - "} + {props.vehiculo.carYear}</Card.Text>
     </Card.Body>
   </Card>
 );
}

export default Vehiculo;