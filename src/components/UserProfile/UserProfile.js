import { Button, Form, Row, Col } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormattedMessage } from "react-intl"

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
        <h1><FormattedMessage id="Title"/></h1>
        <Row className="justify-content-md-center">

        <Form>

            <Form.Group className="mb-6" controlId="username">
                <FormattedMessage id="Username"/>
                <Form.Control 
                    type="text" 
                    placeholder="Username" 
                    onChange={(e)=> setFields('username', e.target.value)}
                    value={userData.username}
                />
            </Form.Group>

            <Form.Group className="mb-6" controlId="fullname">
                <FormattedMessage id="CompeteName"/>
                <Form.Control 
                    type="text" 
                    placeholder="Nombre completo" 
                    onChange={(e)=> setFields('fullname', e.target.value)}
                    value={userData.fullname}
                />
            </Form.Group>

            <Form.Group className="mb-6" controlId="description">
                <FormattedMessage id="Description"/>
                <Form.Control 
                    type="text" 
                    placeholder="Descripción del perfil" 
                    onChange={(e)=> setFields('description', e.target.value)}
                    value={userData.description}
                />
            </Form.Group>

            <Form.Group className="mb-6" controlId="URL">
                <FormattedMessage id="Website"/>
                <Form.Control 
                    type="text" 
                    placeholder="URL pagina personal" 
                    onChange={(e)=> setFields('URL', e.target.value)}
                    value={userData.URL}
                />
            </Form.Group>

            <Button><FormattedMessage id="Save"/></Button>
            
        </Form>
        
        </Row>

        </div>
    )
}