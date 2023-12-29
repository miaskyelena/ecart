import React, {useEffect, useState} from 'react'
import { useUser } from '@supabase/auth-helpers-react'
import { useNavigate } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './Navigation.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import supabase from '../../Client'

const Navigation = ({ session }) => {

    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (error) console.log('Error signing out:', error.message)
    }

    if (session === null) {
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
                Welcome, 
                <span className='fi fi-us ms-2'></span>
            </Nav>
            <Nav className='ms-auto me-2'>
                <Nav.Link href='/login'>
                    <button className='btn btn-outline-dark' onClick={
                        () => signOut()
                    }>Sign out</button>
                </Nav.Link>
            </Nav>
        </Navbar>
        </>
    )}
} 

export default Navigation;

