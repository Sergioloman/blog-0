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
                        <Nav.Link href="/Auth" className= "h6" id="navbarToggleExternalContent">Key...</Nav.Link>
                        <Nav.Link href="/Archive" className= "h6" id="navbarToggleExternalContent">Log...</Nav.Link>
                        <Nav.Link href="/" className= "h6" id="navbarToggleExternalContent">Ideas...</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    )
}

export default Navigation