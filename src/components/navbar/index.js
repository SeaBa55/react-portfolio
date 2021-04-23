import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import NavLink from "react-router-dom/NavLink";
import Nav from 'react-bootstrap/Nav';
import './style.css';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand className="bangers-font" bsPrefix to="/about">Sebastian Arrazola</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink className="bangers-font-med" to="/about">About</NavLink>
                    <NavLink className="bangers-font-med" to="/">Portfoilio</NavLink>
                    <NavLink className="bangers-font-med" to="/contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;