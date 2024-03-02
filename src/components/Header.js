import React from "react";
// import { Container, NavItem, NavLink, Navbar, NavbarBrand } from "react-bootstrap";
// import "./Headerstyle.css";
import { Container, Nav, Navbar } from "react-bootstrap";


function Header () {
    return(<>
{/*      
     <Container className="header">
     <Navbar.Brand className="justify-content-start " >PORTFOLIO</Navbar.Brand> */}
    <Nav className=" header  justify-content-end  p-3  position-relative " expand="lg" activeKey="/home">
       <Nav.Item>
          <Nav.Link href="/home" className="text-light">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/About" className="text-light">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/Project" className="text-light">Project</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/Blog" className="text-light">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/Contact" className="text-light">Contact</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link eventKey="disabled" className="text-light" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item> */}
      </Nav>
      {/* </Container> */}
  
   
  

    </>);
}
export default Header;