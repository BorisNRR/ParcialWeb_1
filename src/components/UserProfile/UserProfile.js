import { Button, Form, Row, Col } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function UserProfile(){

    const [userData, setUserData] = useState({})
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const setFields =  (field, value) =>{
        setUserData({...userData,[field]:value })
        if(!!errors[field]){
            setErrors({...errors , [field]:null})
        }
    }

    const handleSubmitButton = ((e) =>{
        if((userData.email && userData.email.includes("@")) && (userData.password && userData.password.length >=8)){
            e.preventDefault()
            navigate("/Home")}
        else{
            alert("Todos los campos son obligatorios. Revise que su entrada cumple con los criterios.")
        }
    })


    return(
        <div className="container"> 
        <h1>LogIn</h1>
        <Row className="justify-content-md-center">

        <Form>

            <Form.Group className="mb-6" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Email" 
                    onChange={(e)=> setFields('email', e.target.value)}
                    value={userData.email}
                />
                <Form.Text className="text-muted">Your email must include @</Form.Text>
            </Form.Group>

            <Form.Group className="mb-6" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setFields('password', e.target.value)} 
                    value={userData.password}
                />
                <Form.Text className="text-muted">Your password must be at least 8 characteres</Form.Text>
            </Form.Group>

            <a href="https://www.google.com/"> Forgot password? </a>

            <Row>
                <Col>
                    <Button onClick={handleSubmitButton}>
                        Submit
                    </Button>
                </Col>
                <Col>
                    <Button onClick={console.log("Proximamente")}>
                        Register
                    </Button>
                </Col>
            </Row>
            
        </Form>
        
        </Row>

        </div>
    )
}