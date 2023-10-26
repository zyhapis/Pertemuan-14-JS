import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <Container id="about" className="py-5 text-center">
            <Row>
                <Col>
                    <h2>About Me</h2>
                    <p>Saya Hanyalah Seorang Wibu.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;