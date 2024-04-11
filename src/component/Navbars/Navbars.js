import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import tedAi from "../../asstes/AI-1.png";
import "./index.css"
const Navbars = () => {
  return (
    <Navbar expand="lg" className="">
    <Container>
      <Navbar.Brand href="#home" className='logo-css'><img src={tedAi} alt="logo" width={60} height={60}/> TedAI</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbars