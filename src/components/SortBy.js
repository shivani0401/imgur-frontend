import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaFilter, FaHeartbeat, FaPlay, FaTable} from 'react-icons/fa';


export default function SortBy() {
  return (
<div className='sortBy'>
    <div className='navBar'> 
        <div className='Dropdown'>
            <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
            <Nav>
            <NavDropdown
                id="nav-dropdown-dark-example"
                title="MOST VIRAL"
                menuVariant="dark"
            >
                <NavDropdown.Item href="#action/3.1">MOST VIRAL</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">USER SUBMITTED</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">HIGHEST SCORING</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
                id="nav-dropdown-dark-example"
                title="NEWEST"
                menuVariant="dark"
            >
                <NavDropdown.Item href="#action/3.1">POPULAR</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">NEWEST</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">BEST</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">RANDOM</NavDropdown.Item>
            </NavDropdown>
            {/* <FaFilter style={{color: 'white', fontSize: '20px'}}/> <FaPlay style={{color: 'white', fontSize: '20px'}}/> <FaTable style={{color: 'white', fontSize: '20px'}}/> */}
            </Nav>
            </Container>
            </Navbar>            
        </div>
    </div>
    
</div>
  )
}
