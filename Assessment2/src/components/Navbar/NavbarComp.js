
import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    BrowserRouter as Router,Routes,
    Route,
    Link
  } from "react-router-dom";
import Login from "../../Login";
import { Switch } from "@material-ui/core";
import SignUp from "../../SignUp";

const NavbarComp =() => {
        return (
            <Router>
            <div>
    <Navbar className="navv">
      <Container fluid>
        <Navbar.Brand href="#" className="title">BookStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
            <Nav.Link as={Link} to={"/signup"}>SignUp</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Switch>
          <Route exact path="/login">
            <Login/>
            </Route>
            <Route exact path="/signup">
            <SignUp/>
            </Route>
        
    
    </Switch>
            </div>
            </Router>
        )
  
}
export default NavbarComp;