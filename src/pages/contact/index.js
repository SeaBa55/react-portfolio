import React from "react";
import { Button, Card, Col, Container, Form } from "react-bootstrap";
import './style.css';

function Contact() {

    return (
        <Container>
            <Col md={12}>
                <Card className="mt-4">
                    <Card.Body id="grad1">
                        <Card.Title className="card-text">Contact</Card.Title>
                        {/* line divider between heading and image */}
                        <div className="line"/>
                        <Form>
                            <Form.Group className="form-group-1">
                                <Form.Label className="card-text">Name</Form.Label>
                                <Form.Row>
                                    <Col>
                                        <Form.Control placeholder="First name"/>
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name"/>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="card-text">Email address</Form.Label>
                                <Form.Control type="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="card-text">Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Type message here"></Form.Control>
                            </Form.Group>
                            <Button type="submit" className="btn btn-primary">Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
}
  
export default Contact;