import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './SearchInput.css'
import { BiSearch } from 'react-icons/bi'
import SearchButton from './SearchButton'
const SearchInput = ({ setSearchInput }) => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setSearchInput(e.target.value)

  }

  const redirect = () => {
    navigate('/products')
  }

  return (
    <div 
    className='search-input'
    onClick={redirect}
    >
        <input 
        type='text' 
        placeholder='Search for anything.'
        value={search}
        onChange={handleSearch}
    >
        </input>
        <BiSearch size={25} className='search-icon' style=
        {{position: 'relative', marginLeft: '-3rem'}}/>
    </div>
  )
}

export default SearchInput