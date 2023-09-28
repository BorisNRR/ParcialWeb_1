import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export default function Detail() {
 const params = useParams();
 return (
    <div>
        <Row>
            <Col>
                <image style={{ width: "300", height: "200" }}>{params.vehiculoImage}</image>
            </Col>
            <Col>
                <h1>{params.vehiculoCarModel}</h1>
                <Row>
                    <Col>Car Maker</Col>
                    <Col>{params.vehiculoCarMaker}</Col>
                </Row>
                <Row>
                    <Col>Car Model</Col>
                    <Col>{params.vehiculoCarModel}</Col>
                </Row>
                <Row>
                    <Col>Car Year</Col>
                    <Col>{params.vehiculoCarYear}</Col>
                </Row>
                <Row>
                    <Col>Aviable Online</Col>
                    <Col>{params.vehiculoAviable}</Col>
                </Row>
                <Row>
                    <Col>Price</Col>
                    <Col>{params.vehiculoPrice}</Col>
                </Row>
                <Row> Description </Row>
                <Row> {params.vehiculoDescription} </Row>
            </Col>
        </Row>
    </div>
 );
}