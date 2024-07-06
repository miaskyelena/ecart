import React, { useState, useEffect } from 'react'
import { useShoppingCart } from '../../../context/CartContext'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'
import DropdownFilter from '../../Filter/Dropdown/DropdownFilter';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import './SearchBar.css'
const SearchBar = ({ onCategorySelect, setSearchInput }) => {
  const user = useUser()
  const supabase = useSupabaseClient()
  const { cart, isOpen, toggleCart } = useShoppingCart();

 
  return (
    <Navbar className='search-bar'>
        <Navbar.Brand href='/' className='me-5 brand-title'>eCart</Navbar.Brand>
        <Nav className=' search-bar-container'>
         
          <SearchInput setSearchInput={setSearchInput}/>
          <Nav.Link href='/user/likes'>
            <AiOutlineHeart size={25}/>
          </Nav.Link>
          <Nav.Link href='/user'>
            { user == null ? <BiUserCircle size={25}/> : <Avatar 
            alt={user.email}
            src={user.user_metadata.avatar_url}
            sx={{ width: 25, height: 25 }}
            /> }
          </Nav.Link>
          <Nav.Link onClick={toggleCart}>
            <Badge badgeContent={cart.length} color="primary">
              <AiOutlineShoppingCart size={25}/>
            </Badge>
          </Nav.Link>         
        </Nav>
    </Navbar>
  )
}

export default SearchBar