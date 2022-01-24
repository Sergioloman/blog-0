import React from "react";
import "../App.css";
import PostForm from "../components/Post.Form/Form";
//import Login from "./Login";
//import SignUp from "./SignUp";
import { Row} from 'react-bootstrap'



const Home = () => {
    return (
        <main >
                <Row>
                    <PostForm />
                </Row>
        </main>

    )
}

export default Home