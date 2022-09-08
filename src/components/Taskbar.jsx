import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Taskbar.css'


function Taskbar(){
  
    return (
        <Navbar className="navbar" bg="primary" expand="lg">
        <Container className="container" fluid>
          <Row>
            <Col>
              <Navbar.Brand className="heading" href="#home">Reeves Family Chores</Navbar.Brand>
            </Col>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navItems me-auto">
                    <Nav.Link className="navLink" href="./">Login</Nav.Link>
                    <Nav.Link className="navLink" href="./profile">Profile</Nav.Link>
                    <Nav.Link className="navLink" href="./chores">Chores To-Do</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Row>
        </Container> 
      </Navbar>
       
    )
}

export default Taskbar;