import React, {useState} from 'react'

const DropdownFilter = ({ onFilterSelect } ) => {
  const [selectedFilter, setSelectedFilter] = useState('')

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter)
    onFilterSelect(filter)
  }

  return (
    <div class="dropdown">
    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      categories
    </button>
    <ul class="dropdown-menu">
       <li><a class="dropdown-item" onClick={() => handleFilterClick('Tops')}>Tops</a></li>
        <li><a class="dropdown-item" onClick={() => handleFilterClick('Bottoms')}>Bottoms</a></li>
        <li><a class="dropdown-item" onClick={() => handleFilterClick('Dresses')}>Dresses</a></li>
        <li><a class="dropdown-item" onClick={() => handleFilterClick('Shoes')} >Shoes</a></li>
       <li><a class="dropdown-item" onClick={() => handleFilterClick('Handbags')} >Handbags</a></li>
    </ul>
    </div>
  )
}

export default DropdownFilter
