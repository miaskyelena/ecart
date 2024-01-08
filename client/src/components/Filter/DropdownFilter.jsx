import React, {useState} from 'react'

const DropdownFilter = ({ onFilterSelect } ) => {
  const [selectedFilter, setSelectedFilter] = useState(null)

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
       <li><a class="dropdown-item" value='Tops' id='Tops' name='Tops' onClick={() => handleFilterClick('Tops')}>Tops</a></li>
        <li><a class="dropdown-item" value='Tops' id='Bottoms' name='Bottoms' onClick={() => handleFilterClick('Bottoms')}>Bottoms</a></li>
        <li><a class="dropdown-item" value='Dresses' id='Dresses' name='Dresses' onClick={() => handleFilterClick('Dresses')}>Dresses</a></li>
        <li><a class="dropdown-item" value='Shoes' id='Shoes' name='Shoes' onClick={() => handleFilterClick('Shoes')} >Shoes</a></li>
       <li><a class="dropdown-item" value='Handbags' id='Handbags' name='Handbags' onClick={() => handleFilterClick('Handbags')} >Handbags</a></li>
       <li><a class="dropdown-item" value='Skirts' id='Skirts' name='Skirits' onClick={() => handleFilterClick('Skirts')} >Skirts</a></li>

    </ul>
    </div>
  )
}

export default DropdownFilter
