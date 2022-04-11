import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import './style.css';

function About() {

    return (
        <Container>
            <Row className="justify-content-center">
            <Col md={12}>
                <Card className="mt-4">
                    <div className="banner d-flex justify-content-center image-cap">
                        <div className="image-cap-cut"> 
                            {/* <!-- Portfolio about profile image --> */}
                            <Card.Img className="rounded-circle shadow-lg p-1" src="images/LinkedIn_Photos/IMG_3121_square.jpg" alt="Picture of Sebastian Arrazola" data-holder-rendered="true"/>
                        </div>
                    </div>
                    {/* <!-- Card Title --> */}
                    <Card.Title className="d-flex justify-content-center mt-2">About Me</Card.Title>
                    {/* <!-- line divider between heading and image --> */}
                    <div className="line-short"/>
                    <Card.Body id="grad1">
                        <div className="about-me-text">
                            <p>
                                I am a Full Stack Web Developer with 5+ years background in mechanical and electrical engineering and 4 years of team
                                leading experience in a fast-paced, test-oriented, automotive software development environment. 
                            </p>
                            <p>
                                I have experience working with remote teams and global stakeholders involving markets in the North American, South American, and European regions.
                            </p>
                            <p>
                                I believe in the “no stone unturned” approach to problem-solving, while setting realistic and efficient expectations to meet product deadlines and team requirements. 
                            </p>
                            <p>
                                Experience includes, but is not limited to:
                            </p>
                            <ul>
                                <li>SQL &amp; NoSQL, including MySQL, PostgreSQL, MongoDB, Cassandra</li>
                                <li>Version Control Systems (Git) &amp; Continious Deployment/Integration (Jenkins, TravisCI)</li>
                                <li>Containerization &amp; container orchestration (Docker, OpenShift, Kubernetes)</li>
                                <li>RESTful API Development</li>
                                <li>Languages: C/C++, English, Javascript, Java EE, Matlab, Python, Spanish</li>
                                <li>Behavior/Test Driven Development (Cucumber, Jasmine, Jest, JUnit)</li>
                                <li>Debugging experience with both client &amp; serverside code</li>
                                <li>Data aggregation/analysis &amp; Event monitoring (Matlab, Splunk)</li>
                                <li>Documentation &amp; Ticketing (Javadoc, JSDoc, Swagger, Confluence, Jira)</li>
                            </ul>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
    );
}
  
export default About;