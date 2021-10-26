import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
    return (

        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand><Link to="/"> Online Car Rental System </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link to="/allCars">Cars </Link></Nav.Link>
                        <Nav.Link ><Link to="/newCar"> New Car</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
