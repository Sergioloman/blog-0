import React from "react";

import PostForm from "../components/Post.Form/Form";
import PostList from "../components/Post.List/List";
import Navigation from "../components/Nav.Bar/Nav";

import { Col ,Row} from 'react-bootstrap'

const user = "MechaWizardSword"

const Home = () => {
    return (
        <main>
            <Navigation/>
            <Col >
                <Row className="justify-content-md-center">
                    <PostForm />
                </Row>
                <Row>
                    <PostList
                        posts={user.posts}
                        title={`${user.username} says...`}></PostList>
                </Row>
            </Col>
        </main>

    )
}

export default Home