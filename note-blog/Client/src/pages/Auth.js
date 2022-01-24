import React from "react";
import "../App.css";

import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import { Row} from 'react-bootstrap'



const Auth = () => {
    return (
        <main >
                <Row>
                    <Login/>
                </Row>
                <Row>
                    <SignUp/>
                </Row>
        </main>

    )
}

export default Auth