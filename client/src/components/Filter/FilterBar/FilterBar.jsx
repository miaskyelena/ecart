import React from 'react'
import { Link } from 'react-router-dom'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import './FilterBar.css'
const FilterBar = () => {
  const user = useUser()
  const supabase = useSupabaseClient()
  return (
    <div className='filter-bar-container'>
        <div className='filter-bar-item'>
          <Link to='/products' className='filter-bar-button'>SHOP</Link>
        </div>
        <div className='filter-bar-item'>
          { user == null ? 
            <>
            <Link to='/login' className='filter-bar-button'>SELL</Link>
            </>
            :
            <>
            <Link to='/create' className='filter-bar-button'>SELL</Link>
            </>
          }
        </div>
        <div className='filter-bar-item'>
            <Link to='/about' className='filter-bar-button'>ABOUT</Link>
        </div>
    </div>
  )
}

export default FilterBar