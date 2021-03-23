import React from "react";
import './style.css';

function Footer() {
    return (
        <footer className="footer mt-auto bg-dark">
            <div className="footer-container d-flex justify-content-between align-items-center">
                {/* <!-- Button trigger modal --> */}
                <div type="button" className="foot-link" data-toggle="modal" data-target="#resumeModalLong">
                    <i className="fas fa-file-pdf fa-2x"></i>
                </div>
                {/* <!-- Git Hub Profile Link --> */}
                <a className="foot-link" href="https://github.com/SeaBa55"><i className="fab fa-github fa-2x"></i></a>
                {/* <!-- Site version info --> */}
                <span className="my-foot-text bangers-font-small">© 2021 v 4.2 - updated: 03/22</span>
                {/* <!-- LinkedIn Profile Link --> */}
                <a className="foot-link" href="https://www.linkedin.com/in/sebastian-arrazola-b92571b8/"><i className="fab fa-linkedin fa-2x"></i></a>
                {/* <!-- Email info popover --> */}
                <div className="foot-link"  data-container="body" data-toggle="popover" data-placement="top"><i className="far fa-envelope fa-2x"></i></div>
            </div>
        </footer>
    );
}

export default Footer;