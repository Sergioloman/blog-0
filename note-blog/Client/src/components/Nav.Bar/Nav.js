import React from "react"
import { Nav,Navbar,Container} from "react-bootstrap"
const Navigation =()=>{
    return (
        <Navbar bg="dark" variant="dark">
                <Container fluid className="p-1">
                    <Navbar.Brand href="#home">
                        <div className="display-4">Sergiohness
                            <br />
                            <div className="h6" >Here, then, and nowhere...</div >
                        </div>
                    </Navbar.Brand>
                    <Nav className="flex-row-reverse">
                        <Nav.Link href="#About" className= "h6" id="navbarToggleExternalContent">About</Nav.Link>
                        <Nav.Link href="#Archive" className= "h6" id="navbarToggleExternalContent">Archive</Nav.Link>
                        <Nav.Link href="#Stuff" className= "h6" id="navbarToggleExternalContent">Stuff</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    )
}

export default Navigation