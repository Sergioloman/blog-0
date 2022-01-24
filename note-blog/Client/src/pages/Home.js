import React from "react";
import "../App.css";
import PostForm from "../components/Post.Form/Form";
//import Login from "./Login";
//import SignUp from "./SignUp";
import Navigation from "../components/Nav.Bar/Nav";
import { Col ,Row} from 'react-bootstrap'



const Home = () => {
    return (
        <main >
            <Navigation/>
            <Col >
                <Row>
                    <PostForm />
                </Row>
                <Row>
                    
                </Row>
                <Row>
                    
                </Row>
            </Col>
        </main>

    )
}

export default Home