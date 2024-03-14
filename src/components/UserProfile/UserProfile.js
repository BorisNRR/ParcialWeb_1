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

        if(true){
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

            <Form.Group className="mb-6" controlId="username">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Username" 
                    onChange={(e)=> setFields('username', e.target.value)}
                    value={userData.username}
                />
            </Form.Group>

            <Form.Group className="mb-6" controlId="fullname">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Nombre completo" 
                    onChange={(e)=> setFields('fullname', e.target.value)}
                    value={userData.fullname}
                />
            </Form.Group>

            <Form.Group className="mb-6" controlId="description">
                <Form.Label>Descripción del perfil</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Descripción del perfil" 
                    onChange={(e)=> setFields('description', e.target.value)}
                    value={userData.description}
                />
            </Form.Group>

            <Form.Group className="mb-6" controlId="URL">
                <Form.Label>URL pagina personal</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="URL pagina personal" 
                    onChange={(e)=> setFields('URL', e.target.value)}
                    value={userData.URL}
                />
            </Form.Group>

            <Button>Guardar Cambios</Button>
            
        </Form>
        
        </Row>

        </div>
    )
}