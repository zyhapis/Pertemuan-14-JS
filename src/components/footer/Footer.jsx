import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} Pilih Prabowo</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;