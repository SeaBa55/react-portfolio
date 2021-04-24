import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import NavLink from "react-router-dom/NavLink";
import Nav from 'react-bootstrap/Nav';
import './style.css';

function NavBar() {
    const [navExpanded, setNavExpanded] = useState(false);

    const toggle = (expanded) => {
        setNavExpanded(expanded);
    };

    const collapsNav = () => {
        // protection against erratice toggling of navExpanded
        if(navExpanded) {
            setNavExpanded(false);
        };
    };

    return (
        <Navbar onToggle={toggle} expanded={navExpanded} expand="lg" bg="dark" variant="dark" sticky="top" className="nav-bar">
            <Navbar.Brand className="bangers-font" bsPrefix>
                <NavLink
                    to="/about"
                    style= {{color: "inherit"}}
                    activeStyle= {{color: "#F1FA8C", textShadow: "1px 2px rgb(0, 0, 0), 0 0 15px rgb(255, 255, 255)"}}
                    className= "nav-bar-name text-decoration-none"
                >
                    Sebastian Arrazola
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="bangers-font-med">
                        <NavLink
                            exact to="/about"
                            style= {{color: "inherit"}}
                            activeStyle= {{color: "#F1FA8C", textShadow: "-1px 2px rgb(0, 0, 0), 0 0 8px rgb(255, 255, 255)"}}
                            className= "nav-bar-link text-decoration-none"
                            onClick={collapsNav}
                        >
                            About
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link className="bangers-font-med">
                        <NavLink
                            exact to="/"
                            style= {{color: "inherit"}}
                            activeStyle={{color: "#F1FA8C", textShadow: "-1px 2px rgb(0, 0, 0), 0 0 8px rgb(255, 255, 255)"}}
                            className="nav-bar-link text-decoration-none"
                            onClick={collapsNav}
                        >
                            Portfolio
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link className="bangers-font-med">
                        <NavLink 
                            exact to="/contact"
                            style= {{color: "inherit"}}
                            activeStyle={{color: "#F1FA8C", textShadow: "-1px 2px rgb(0, 0, 0), 0 0 8px rgb(255, 255, 255)"}}
                            className="nav-bar-link text-decoration-none"
                            onClick={collapsNav}
                        >
                            Contact
                        </NavLink>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;