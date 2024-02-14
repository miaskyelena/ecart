import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import FilterSideBar from './SideBar/FilterSideBar'

const DropdownFilter = ({ onCategorySelect } ) => {
  const navigate = useNavigate()  
  const [category, setSelectedCategory] = useState(null)


  const handleFilterClick = (filter) => {
    setSelectedCategory(filter)
    onCategorySelect(filter);   
   
  }

  return (
    <div class="dropdown">
    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={
      () => navigate('/products')
    }>
      categories
    </button>
    <ul class="dropdown-menu">
       <li><a class="dropdown-item" value='Tops' id='Tops' name='Tops' onClick={() => onCategorySelect('Tops')}>Tops</a></li>
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
