import React, {useState, useEffect} from 'react'
import { Divider } from '@nextui-org/react'
import Chip from '@mui/joy/Chip';
import ChipDelete from '@mui/joy/ChipDelete';
import { DeleteForever } from '@mui/icons-material/DeleteForever';
import './FilterTagsBar.css'

const FilterTagsBar = () => {
  const [selectedTags, setSelectedTags] = useState([])

  const handleTagChange = (event) => {
    if (event.target.checked) {
      setSelectedTags((prevTags) => [...prevTags, event.target.value]);
    } else {
      setSelectedTags((prevTags) => prevTags.filter(tag => tag !== event.target.value));
    }
  }

  const handleDeleteTag = (tag) => {
    setSelectedTags((prevTags) => prevTags.filter(prevTag => prevTag !== tag));
  }

  const clearAllFilters = () => {
    setSelectedTags([])
    window.location.reload()
    
  }

 



  return (
    <>
    <div className='filter-tags-bar'>
    
    <div className='filter-tags-container'>
      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Condition
        </button>
        <ul class="dropdown-menu">
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input " type="checkbox" value="Pristine" id="flexCheckDefault" onChange={handleTagChange} checked={selectedTags.includes('Pristine')} />
            <label class="form-check-label" for="flexCheckDefault">
              Pristine
            </label>
          </div>
          </li>
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input" type="checkbox" value="Like New" id="flexCheckDefault" onChange={handleTagChange} checked={selectedTags.includes('Like New')}/>
            <label class="form-check-label" for="flexCheckDefault">
              Like New
            </label>
          </div>
          </li>
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input" type="checkbox" value="Used" id="flexCheckDefault" onChange={handleTagChange} checked={selectedTags.includes('Used')}/>
            <label class="form-check-label" for="flexCheckDefault">
              Gently Used
            </label>
          </div>
          </li>
        </ul>
      </div>

      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Size
        </button>
        <ul class="dropdown-menu">
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input " type="checkbox" value="Xsmall" id="flexCheckDefault" onChange={handleTagChange} checked={selectedTags.includes('Xsmall')}/>
            <label class="form-check-label" for="flexCheckDefault">
              XS
            </label>
          </div>
          </li>
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input" type="checkbox" value="Small" id="flexCheckDefault" onChange={handleTagChange} checked={selectedTags.includes('Small')}/>
            <label class="form-check-label" for="flexCheckDefault">
              S
            </label>
          </div>
          </li>
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input" type="checkbox" value="Medium" id="flexCheckDefault" onChange={handleTagChange} checked={selectedTags.includes('Medium')}/>
            <label class="form-check-label" for="flexCheckDefault">
              M
            </label>
          </div>
          </li>
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input" type="checkbox" value="Large" id="flexCheckDefault" onChange={handleTagChange} checked={selectedTags.includes('Large')}/>
            <label class="form-check-label" for="flexCheckDefault">
              L
            </label>
          </div>
          </li>
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input" type="checkbox" value="Xlarge" id="flexCheckDefault" onChange={handleTagChange} checked={selectedTags.includes('Xlarge')}/>
            <label class="form-check-label" for="flexCheckDefault">
              XL
            </label>
          </div>
          </li>
        </ul>
      </div>

      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Color
        </button>
        <ul class="dropdown-menu">
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input " type="checkbox" value="Black" id="flexCheckDefault" onChange={handleTagChange} checked={selectedTags.includes('Black')}/>
            <label class="form-check-label" for="flexCheckDefault">
              Black
            </label>
          </div>
          </li>
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input" type="checkbox" value="White" id="flexCheckDefault" onChange={handleTagChange} checked={selectedTags.includes('White')}/>
            <label class="form-check-label" for="flexCheckDefault">
              White
            </label>
          </div>
          </li>
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input" type="checkbox" value="Blue" id="flexCheckDefault" onChange={handleTagChange} checked={selectedTags.includes('Blue')}/>
            <label class="form-check-label" for="flexCheckDefault">
              Blue
            </label>
          </div>
          </li>
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input" type="checkbox" value="Red" id="flexCheckDefault" onChange={handleTagChange} checked={selectedTags.includes('Red')}/>
            <label class="form-check-label" for="flexCheckDefault">
              Red
            </label>
          </div>
          </li>
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input" type="checkbox" value="Green" id="flexCheckDefault" onChange={handleTagChange} checked={selectedTags.includes('Green')}/>
            <label class="form-check-label" for="flexCheckDefault">
              Green
            </label>
          </div>
          </li>
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input" type="checkbox" value="Yellow" id="flexCheckDefault" onChange={handleTagChange}/>
            <label class="form-check-label" for="flexCheckDefault">
              Yellow
            </label>
          </div>
          </li>
          <li className='ms-1'>
          <div class="form-check
          ms-1">
            <input class="form-check-input" type="checkbox" value="Pink" id="flexCheckDefault" onChange={handleTagChange}/>
            <label class="form-check-label" for="flexCheckDefault">
              Pink
            </label>
          </div>
          </li>
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input" type="checkbox" value="Purple" id="flexCheckDefault" onChange={handleTagChange}/>
            <label class="form-check-label" for="flexCheckDefault">
              Purple
            </label>
          </div>
          </li>
          <li className='ms-1'>
          <div class="form-check ms-1">
            <input class="form-check-input" type="checkbox" value="Orange" id="flexCheckDefault" onChange={handleTagChange}/>
            <label class="form-check-label" for="flexCheckDefault">
              Orange
            </label>
          </div>
          </li>
        </ul>
      </div>
    </div>


    { selectedTags.length > 0 ?
    <>
    <div className='selected-tags'>
      <Chip 
      variant='outlined'
      label='Clear All'
      onClick={clearAllFilters}
      endDecorator={<ChipDelete icon={<DeleteForever />} />}
      >
        Clear Filters
      </Chip>
      {selectedTags.map((tag, index) => (
        <Chip
          key={index}
          variant='outlined'
          endDecorator={<ChipDelete onClick={() => handleDeleteTag(tag)} />}
        >
          {tag}
        </Chip>
      ))}
    </div>

    <Divider />
    </>
    :
    null
    }

    </div>
    </>
  )
}

export default FilterTagsBar;
