import React, {useState} from 'react';
import './FilterBtnGroup.css';
const FilterBtnGroup = ({ onFilterSelect }) => {
    const [filters, setFilters] = useState({
        condition: '',
        size: '',
        color: '',
        brand: '',
    })

    const handleSelect = (category, value) => {
        setFilters(prevFilters => ({
          ...prevFilters,
          [category]: value
        }));
        onFilterSelect(category, value)
      };
    
    return (
    <>
    <div className='btn-group filter-btn-group filters mb-4' role='group' aria-label='Filter buttons'>
        <div className='dropdown'> 
            <button className='btn btn dropdown-toggle filter' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Condition
            </button>
            <ul className='dropdown-menu'>
                <li><a className='dropdown-item' href='#' name='pristine' value='pristine' onClick={() => handleSelect('condition', 'Pristine')}>Pristine</a></li>
                <li><a className='dropdown-item' href='#' name='like new' value='like new' onClick={() => handleSelect('condition', 'Like New')}>Like New</a></li>
                <li><a className='dropdown-item' href='#' name='like new' value='like new' onClick={() => handleSelect('condition', 'Used')}>Gently Used</a></li>
            </ul>
        </div>
        <div className='dropdown'> 
            <button className='btn btn dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Size
            </button>
            <ul className='dropdown-menu'>
                <li><a className='dropdown-item' href='#' name='small' value='small' onClick={() => handleSelect('size', 'Small')}>Extra Small</a></li>
                <li><a className='dropdown-item' href='#' name='small' value='small' onClick={() => handleSelect('size', 'Small')}>Small</a></li>
                <li><a className='dropdown-item' href='#' name='medium' value='medium' onClick={() => handleSelect('size', 'Medium')}>Medium</a></li>
                <li><a className='dropdown-item' href='#' name='large' value='large' onClick={() => handleSelect('size', 'Large')}>Large</a></li>
            </ul>
        </div>
        <div className='dropdown'> 
            <button className='btn btn dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Color
            </button>
            <ul className='dropdown-menu'>
                <li><a className='dropdown-item' href='#' name='red' value='red' onClick={() => handleSelect('color', 'Red')}>
                    <span className='small mb-0' style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: `red`,
                        display: 'inline-block',}}>
                    </span> Red
                    </a></li>
                <li><a className='dropdown-item' href='#' name='blue' value='blue' onClick={() => handleSelect('color', 'Blue')}>
                <span className='small mb-0' style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: `blue`,
                        display: 'inline-block',}}>
                    </span> Blue
                    </a></li>
                <li><a className='dropdown-item' href='#' name='green' value='green' onClick={() => handleSelect('color', 'Green')}>
                <span className='small mb-0' style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: `green`,
                        display: 'inline-block',}}>
                    </span> Green
                    </a></li>
                    <li><a className='dropdown-item' href='#' name='tan' value='tan' onClick={() => handleSelect('color', 'Tan')}>
                <span className='small mb-0' style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: `Tan`,
                        display: 'inline-block',}}>
                    </span> Tan
                    </a></li>
                    <li><a className='dropdown-item' href='#' name='like new' value='like new' onClick={() => handleSelect('color', 'Brown')}>
                <span className='small mb-0' style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: `Brown`,
                        display: 'inline-block',}}>
                    </span> Brown
                    </a></li>
                    <li><a className='dropdown-item' href='#' name='white' value='white' onClick={() => handleSelect('color', 'White')}>
                <span className='small mb-0' style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        outline: '1px solid black',
                        backgroundColor: `White`,
                        display: 'inline-block',}}>
                    </span> White
                    </a></li>
                    <li><a className='dropdown-item' href='#' name='black' value='black' onClick={() => handleSelect('color', 'Black')}
                    >
                <span className='small mb-0' style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        outline: '1px solid black',
                        backgroundColor: `Black`,
                        display: 'inline-block',}}>
                    </span> Black
                    </a></li>
            </ul>
        </div>
       
       </div>
    </>
    );
};

export default FilterBtnGroup
