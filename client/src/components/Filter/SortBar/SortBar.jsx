import React, {useState} from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';

import './SortBar.css'

const SortBar = ({ onSort }) => {
  const [listView, setListView] = useState(false)
  const handleSort = (sortType) => {
    onSort(sortType)
  }

  const handleView = () => {
    setListView(!listView)
  }



  return (
    <div className='d-flex justify-content-end'>
      <div class="dropdown">
        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sort by
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#" onClick={() => handleSort('priceLowToHigh')}>Price: Low to High</a></li>
          <li><a class="dropdown-item" href="#" onClick={() => handleSort('priceHighToLow')}>Price: High to Low</a></li>
          <li><a class="dropdown-item" href="#" onClick={() => handleSort('newest')}>Newest</a></li>
          <li><a class="dropdown-item" href="#" onClick={() => handleSort('oldest')}>Oldest</a></li>
        </ul>
      </div>
      &nbsp;
      <div class="dropdown">
        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <GridViewIcon 
            sx={{ fontSize: 20 }}
          />
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#" onClick={() => handleView()}>
            List View &nbsp;
            <FormatListBulletedIcon
              sx={{ fontSize: 20 }}
            />
            </a></li>
        </ul>
      </div>
    </div>
  )
}

export default SortBar
