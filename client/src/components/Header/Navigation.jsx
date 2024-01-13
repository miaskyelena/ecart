import React, {useEffect, useState} from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useNavigate } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './Navigation.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";
const Navigation = () => {
    const user = useUser()
    const supabase = useSupabaseClient()
    const navigate = useNavigate()

    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (error) console.log('Error signing out:', error.message)
        navigate('/')
    }

    console.log(user)

    return (
        <>
        <Navbar bg='light' variant='light' expand='lg'>
        { user == null ? 
        <>
        <Navbar.Brand href='/'className='ms-3 brand-title'>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto me-2'>
                <Nav.Link href='/login'>Sign in</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </>
        :
        <>
        <Navbar.Brand href='/'className='ms-5 brand-title'>
        </Navbar.Brand>
        <Nav.Item className=' me-2'>
        <span className='fi fi-us mt-1 ms-1'></span>&nbsp;
        Welcome, {user.email} 
        </Nav.Item>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto me-2'>
                <Nav.Link onClick={signOut}>Sign out</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </>
        }
        </Navbar>
        </>
    )
}

export default Navigation;

