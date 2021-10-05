import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='shadow sticky-top'>
            <Navbar className="px-5" bg="light" expand="lg">
                <Navbar.Brand href="#"><img style={{ width: '70px' }} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto py-2 my-2 my-lg-0"
                        navbarScroll
                    >
                        <NavLink className='nav-link fw-bold' to="/home">Home</NavLink>
                        <NavLink className='nav-link fw-bold' to="/courses">Courses</NavLink>
                        <NavLink className='nav-link fw-bold' to="/about">About</NavLink>
                        <NavLink className='nav-link fw-bold' to="/contactus">Contact Us</NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button className="btn btn-dark mx-1">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;