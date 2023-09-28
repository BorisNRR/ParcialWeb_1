import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import { useState } from "react";

function Login(){

    const [formValues, setFormValues] = useState({email:"", password:""})

    const handleEmailChange = ((e) => {
        setFormValues({...formValues, email: e.target.value})
    });

    const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value})
    });

    const clickSubmit = (() => {
        alert(JSON.stringify(formValues.email))
    });

    return(
        <Container className ="mt-5">
            <Row>
                <Col>
                    <h1>Acceder</h1>
                    <h3>Usa tu Cuenta de UniAlpes</h3>
                    <Form.Group className="mb-6" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Correo electrónico"
                        onChange={handleEmailChange} value={formValues.email}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-6" controlId="formBasicButtons">
                        <Row>
                        <a href="http://www.google.com">¿Olvidaste el correo electrónico?</a>
                        </Row>
                        <Row>
                        <Button onClick={clickSubmit}> Crear cuenta </Button>
                        <Button onClick={clickSubmit}> Siguiente </Button>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-6" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"
                        onChange={handlePasswordChange} value={formValues.password}/>
                    </Form.Group>

                    

                </Col>
            </Row>
        </Container>
    )
}

export default Login