import React from "react";
import PostForm from "../components/Post.Form/Form";
import PostList from "../components/Post.List/List";

import { Navbar, Nav, Container} from 'react-bootstrap'

const user = "MechaWizardSword"

const Home = () => {
    return (
        <main>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className="display-4">Sergiohness
                            <br />
                            <div className="h6" >Here, then, and nowhere...</div >
                        </div>
                    </Navbar.Brand>

                    <Nav className="flex-row-reverse">
                        <Nav.Link href="#home" className= "h6" id="navbarToggleExternalContent">About</Nav.Link>
                        <Nav.Link href="#home" className= "h6" id="navbarToggleExternalContent">Archive</Nav.Link>
                        <Nav.Link href="#home" className= "h6" id="navbarToggleExternalContent">Stuff</Nav.Link>
               

                    </Nav>
                </Container>
            </Navbar>
            <div>
                <div>
                    <PostForm />
                </div>
                <div>
                    <PostList
                        posts={user.posts}
                        title={`${user.username} says...`}></PostList>
                </div>
            </div>
        </main>

    )
}

export default Home