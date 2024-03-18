import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"

export function Home(){
    
    const [userData, setUserData] = useState({})
    const [selectedUserId, setSelectedUserId] = useState(10)
    
    const navigate = useNavigate()
    const navigateToUserPRofile = () => {
        navigate("/UserProfile")
    }

    useEffect(()=>{
        const URL = "https://raw.githubusercontent.com/BorisNRR/ParcialWeb_1/main/src/data.json"
        fetch(URL).then((data) => data.json())
                  .then((data) => (
                    setUserData(data[selectedUserId-1])
        ))
    }, [selectedUserId])
    
    const getImageGrid = () => {
        if (window.innerWidth > 800) {
          const images = [];
          for (let i = 0; i < 12; i++) {
            images.push(<Col key={i}><img src={"https://picsum.photos/350"} alt="post Photo"></img></Col>);
          }
          return (
            <Row>{images}</Row>
          );
        } else if (window.innerWidth > 500) {
          const images = [];
          for (let i = 0; i < 12; i++) {
            images.push(<Col key={i}><img src={"https://picsum.photos/350"} alt="post Photo"></img></Col>);
          }
          return (
            <Row>
              <Col>{images[0]}</Col>
              <Col>{images[1]}</Col>
              <Col>{images[2]}</Col>
              <Col>{images[3]}</Col>
              <Row>
                <Col>{images[4]}</Col>
                <Col>{images[5]}</Col>
                <Col>{images[6]}</Col>
              </Row>
              <Row>
                <Col>{images[7]}</Col>
                <Col>{images[8]}</Col>
                <Col>{images[9]}</Col>
              </Row>
              <Row>
                <Col>{images[10]}</Col>
                <Col>{images[11]}</Col>
              </Row>
            </Row>
          );
        } else {
          const images = [];
          for (let i = 0; i < 12; i++) {
            images.push(<Col key={i}><img src={"https://picsum.photos/350"} alt="post Photo"></img></Col>);
          }
          return (
            <Row>
              <Col>{images[0]}</Col>
              <Col>{images[1]}</Col>
              <Row>
                <Col>{images[2]}</Col>
                <Col>{images[3]}</Col>
              </Row>
              <Row>
                <Col>{images[4]}</Col>
                <Col>{images[5]}</Col>
              </Row>
              <Row>
                <Col>{images[6]}</Col>
                <Col>{images[7]}</Col>
              </Row>
              <Row>
                <Col>{images[8]}</Col>
                <Col>{images[9]}</Col>
              </Row>
              <Row>
                <Col>{images[10]}</Col>
                <Col>{images[11]}</Col>
              </Row>
            </Row>
          );
        }
      }

    return(
    <div className="container">
        <Row>
            <Col>
                <a onClick={navigateToUserPRofile}>
                    <img className="profilePhoto" width="150" height="150" src={"https://picsum.photos/350"} alt="Profile Photo"></img>
                </a>
            </Col>
            <Col>
                <Row>
                    <h4>Username</h4>
                </Row>
                <Row>
                    <p>UserA UserB dasshdsdfghjgfds</p>
                    <p><a href="https://www.google.com/">www.website.com</a></p>
                </Row>
                <Row><p>{userData.posts} posts {userData.followers} followers {userData.following} following</p></Row>
            </Col>
        </Row>
        <Row>
            {getImageGrid()}
        </Row>
    </div>
    )
}