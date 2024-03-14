import { Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home(props){
    
    const [userData, setUserData] = useState({})
    const [userPhotos, setUserPhotos] = useState({})
    const navigate = useNavigate()

    useEffect(() =>{
        const URL = "https://picsum.photos/350"
        fetch(URL).then(data => data.json()).then(data => {
            setUserPhotos(data.results)
        })},[])

    useEffect(() =>{
        const URL = "https://raw.githubusercontent.com/BorisNRR/ParcialWeb_1/main/src/data.json"
        fetch(URL).then(data => data.json()).then(data => {
            setUserData(data.results)
        })},[])
        

    return(
    <div className="container">
        <Row>
            <Col>
            <img src={"https://picsum.photos/350"} alt="Profile Photo"></img>
            <Button onClick={navigate("/UserProfile")}> See Detail </Button>
            </Col>
            <Col>
                <Row>
                    <h4>Username</h4>
                </Row>
                <Row>
                    <p>UserA UserB dasshdsdfghjgfds</p>
                    <p><a href="https://www.google.com/">www.website.com</a></p>
                </Row>
                <Row><p>{} posts {} followers {} following</p></Row>
            </Col>
        </Row>
        <Row>
            <Row>
                <Col><img src={"https://picsum.photos/350"} alt="post Photo" ></img></Col>
                <Col><img src={"https://picsum.photos/350"} alt="post Photo" ></img></Col>
                <Col><img src={"https://picsum.photos/350"} alt="post Photo" ></img></Col>
            </Row>
            <Row>
                <Col><img src={"https://picsum.photos/350"} alt="post Photo" ></img></Col>
                <Col><img src={"https://picsum.photos/350"} alt="post Photo" ></img></Col>
                <Col><img src={"https://picsum.photos/350"} alt="post Photo" ></img></Col>
            </Row>
            <Row>
                <Col><img src={"https://picsum.photos/350"} alt="post Photo" ></img></Col>
                <Col><img src={"https://picsum.photos/350"} alt="post Photo" ></img></Col>
                <Col><img src={"https://picsum.photos/350"} alt="post Photo" ></img></Col>
            </Row>
            <Row>
                <Col><img src={"https://picsum.photos/350"} alt="post Photo" ></img></Col>
                <Col><img src={"https://picsum.photos/350"} alt="post Photo" ></img></Col>
                <Col><img src={"https://picsum.photos/350"} alt="post Photo" ></img></Col>
            </Row>
            
        </Row>
    </div>
    )
}