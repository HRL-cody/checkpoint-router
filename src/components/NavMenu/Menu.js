import React from 'react';
import './nav.css';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Menu() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand ><Link to="/">Frameex</Link></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link ><Link to="/src/MovieApp.js">Home</Link></Nav.Link>
      
      
    </Nav>
    
    </Navbar>
    
        </div>
    )
}
