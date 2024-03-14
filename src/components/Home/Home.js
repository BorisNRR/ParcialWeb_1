import { UserInfo } from "./UserInfo";
import { UserPosts } from "./UserPosts";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

export function Home(props){
    const [userData, setUserData] = useState({})
    
    useEffect(()=>{
        const URL = "";
        fetch(URL).then(data => data.json()).then(data => {
            setUserData(data.results)
        })},[])

    useEffect(()=>{
        console.log(userData)
    },[userData])


    return(

    <div className="container">
        <Row>
            <Col>

            </Col>
            <Col>
                <Row>
                    <h4>Username</h4>
                </Row>
                <Row>
                    <p>UserA UserB dasshdsdfghjgfds</p>
                    <p><a href="https://www.google.com/">www.website.com</a></p>
                </Row>
                <Row><p>{userData.adult} posts {userData.followers} followers {userData.following} following</p></Row>
            </Col>
        </Row>
    </div>
    )
}