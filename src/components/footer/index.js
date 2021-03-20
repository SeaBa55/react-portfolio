import React from "react";

import './style.css';

function Footer() {
    return (
        <footer class="footer mt-auto bg-dark">
            <div class="container2 d-flex justify-content-between align-items-center">
                {/* <!-- Button trigger modal --> */}
                <div type="button" class="foot-link" data-toggle="modal" data-target="#resumeModalLong">
                    <i class="fas fa-file-pdf fa-2x"></i>
                </div>
                {/* <!-- Git Hub Profile Link --> */}
                <a class="foot-link" href="https://github.com/SeaBa55"><i class="fab fa-github fa-2x"></i></a>
                {/* <!-- Site version info --> */}
                <span class="my-foot-text bangers-font-small">© 2020 v 4.1 - updated: 10/04</span>
                {/* <!-- LinkedIn Profile Link --> */}
                <a class="foot-link" href="https://www.linkedin.com/in/sebastian-arrazola-b92571b8/"><i class="fab fa-linkedin fa-2x"></i></a>
                {/* <!-- Email info popover --> */}
                <div class="foot-link"  data-container="body" data-toggle="popover" data-placement="top"><i class="far fa-envelope fa-2x"></i></div>
            </div>
        </footer>
    );
}

export default Footer;