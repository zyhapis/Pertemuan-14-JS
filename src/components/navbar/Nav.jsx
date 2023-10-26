import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">Portofolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about" className="ml-auto">About</Nav.Link>
                        <Nav.Link href="#experience" className="ml-auto">Experience</Nav.Link>
                        <Nav.Link href="#contact" className="ml-auto">Contact</Nav.Link>
                    </Nav>
                    <Button variant="outline-danger" className="ml-2">Hire Me</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;