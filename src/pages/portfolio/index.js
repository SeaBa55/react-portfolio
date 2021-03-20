import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
// import './style.css';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

function Portfolio() {

    return (
        <ReactBootstrap.Container id="portfolio">
            <ReactBootstrap.Form>
                <ReactBootstrap.Form.Group controlId="formBasicEmail">
                    <ReactBootstrap.Form.Label>Email address</ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control type="email" placeholder="Enter email" />
                    <ReactBootstrap.Form.Text className="text-muted">
                    We'll never share your email with anyone ELSE.
                    </ReactBootstrap.Form.Text>
                </ReactBootstrap.Form.Group>

                <ReactBootstrap.Form.Group controlId="formBasicPassword">
                    <ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control type="password" placeholder="Password" />
                </ReactBootstrap.Form.Group>
                <ReactBootstrap.Form.Group controlId="formBasicCheckbox">
                    <ReactBootstrap.Form.Check type="checkbox" label="Check me out" />
                </ReactBootstrap.Form.Group>
                <ReactBootstrap.Button variant="primary" type="submit">
                    Submit
                </ReactBootstrap.Button>
            </ReactBootstrap.Form>
        </ReactBootstrap.Container>
    );
}
  
export default Portfolio;