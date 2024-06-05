import React, {useState} from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './SortBar.css'

const SortBar = ({ onSortSelect }) => {
  const [listView, setListView] = useState(false)
  
  const handleSort = (sortType) => {
    onSortSelect(sortType)
  }

  const handleView = () => {
    setListView(!listView)
  }



  return (
    <div className='d-flex justify-content-end'>
      <div className="btn-group" role="group" aria-label="Filter buttons"/>
      <div className='btn-group'>
      <div class="dropdown">
        <button class="btn btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sort by
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#" onClick={() => handleSort('priceLowToHigh')}>Price: Low to High</a></li>
          <li><a class="dropdown-item" href="#" onClick={() => handleSort('priceHighToLow')}>Price: High to Low</a></li>
          <li><a class="dropdown-item" href="#" onClick={() => handleSort('newest')}>Newest</a></li>
          <li><a class="dropdown-item" href="#" onClick={() => handleSort('oldest')}>Oldest</a></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default SortBar
