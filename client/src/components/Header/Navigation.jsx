import React, {useEffect, useState} from 'react'
import { useUser } from '@supabase/auth-helpers-react'
import { Navbar, Nav } from 'react-bootstrap'
import './Navigation.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Navigation = () => {
    const user = useUser()
    
    
    if (!user) {
    return (
        <>
        <Navbar bg='light' variant='light' expand='lg'>
        <Navbar.Brand href='/'className='ms-3 brand-title'>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto me-2'>
                <Nav.Link href='/login'>Sign in</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    )
} else {
    return (
        <>
        <Navbar bg='light' variant='light' expand='lg'>
        <Navbar.Brand href='/'className='ms-3'>
        </Navbar.Brand>
            <Nav className='ms-1'>
                Welcome, {user.email}
            </Nav>
            <Nav className='ms-auto me-2'>
                <Nav.Link href='/logout'>Sign out</Nav.Link>
            </Nav>
        </Navbar>
        </>
    )}
} 

export default Navigation;

