import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'
import DropdownFilter from '../../Filter/DropdownFilter';
import './SearchBar.css'
const SearchBar = ({ onFilterSelect }) => {
 
  return (
    <Navbar className='search-bar'>
        <Navbar.Brand href='/' className='ms-5 brand-title'>eCart</Navbar.Brand>
        <Nav className=' search-bar-container me-2'>
          <DropdownFilter onFilterSelect={onFilterSelect} />
          <SearchInput />
          <Nav.Link href='/products'>
            <AiOutlineHeart size={25}/>
          </Nav.Link>
          <Nav.Link href='/user'>
            <BiUserCircle size={25}/>
          </Nav.Link>
          <Nav.Link href='/'>
            <MdOutlineShoppingBag size={25}/>
          </Nav.Link>         
        </Nav>
    </Navbar>
  )
}

export default SearchBar