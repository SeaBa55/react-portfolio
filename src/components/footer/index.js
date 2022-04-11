import React, { useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import Resume from "../resume";
import './style.css';

function Footer() {

    const [show, setShow] = useState(false);

    const popover = (
        <Popover id="popover">
            <Popover.Title as="h5"><i class="fa fa-info-circle"></i> Contact Info</Popover.Title>
            <Popover.Content>
                <div>
                    Email: <a href="mailto:sebastianarrazola@gmail.com">sebastianarrazola@gmail.com</a>
                </div>
                <div>
                    Phone: <a href="tel:+12405053886">+1 (240) 505-3886</a>
                </div>
            </Popover.Content>
        </Popover>
    );

    return (
        <>
            <footer className="footer mt-auto bg-dark">
                <div className="footer-container d-flex justify-content-between align-items-center px-3">
                    {/* <!-- Button trigger modal --> */}
                    <div className="foot-link" onClick={() => {setShow(true)}}>
                        <i className="foot-icon-left fas fa-file-pdf fa-2x"></i>
                    </div>
                    {/* <!-- Git Hub Profile Link --> */}
                    <a className="foot-link" href="https://github.com/SeaBa55">
                        <i className="foot-icon-left fab fa-github fa-2x"></i>
                    </a>
                    {/* <!-- Site version info --> */}
                    <span className="my-foot-text bangers-font-small">© 2022 v 5.5 - updated: 04/11</span>
                    {/* <!-- LinkedIn Profile Link --> */}
                    <a className="foot-link" href="https://www.linkedin.com/in/sebastian-arrazola-b92571b8/">
                        <i className="foot-icon-right fab fa-linkedin fa-2x"></i>
                    </a>
                    {/* <!-- Email info popover --> */}
                    <OverlayTrigger trigger="click" rootClose placement="top" overlay={popover}>
                        <div className="foot-link">
                            <i className="foot-icon-right far fa-envelope fa-2x"></i>
                        </div>
                    </OverlayTrigger>
                </div>
            </footer>
            <Resume
                show={show}
                onHide={() => {setShow(false)}}
            />
        </>
    );
}

export default Footer;