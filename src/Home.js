import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Vehiculo from "./vehiculo";

const { useEffect, useState } = require("react");

function Home(){

    const [vehiculos, setVehiculos] = useState([]);
    
    useEffect(() => {
        const URL =
          "https://raw.githubusercontent.com/BorisNRR/ParcialWeb_1/main/data/datos.json";
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {
            setVehiculos(data);
          });
      }, []);

    return(
        <Container className="mt-3">
            <h2>Listado de ehículos</h2>
            <hr></hr>
            <Row>
            {vehiculos.map((vehiculo) => (
                <Col key={vehiculo.carModel}>
                <Vehiculo vehiculo={vehiculo} />
                </Col>
            ))}
            </Row>
        </Container>
    )
}


export default Home;