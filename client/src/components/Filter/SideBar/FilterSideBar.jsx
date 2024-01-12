import React, {useState} from 'react';
import './FilterSideBar.css';
const FilterSideBar = ({ onCategorySelect }) => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
        onCategorySelect(category)
    }
    return (
        <>
        <div className="div">
        <div className="sidebar mt-2">
            <span>Category</span>
         
            <ul className='mt-3 ms-3'>
                { selectedCategory === null ? 
                <>
                <li
                className='category'
                value='Tops'
                id='Tops'
                name='Tops'
                onClick={() => handleCategoryClick('Tops')}
                >Tops</li>
                <li
                className='category'
                value='Bottoms'
                id='Bottoms'
                name='Bottoms'
                onClick={() => handleCategoryClick('Bottoms')}
                >Bottoms</li>
                <li
                className='category'
                value='Dresses'
                id='Dresses'
                name='Dresses'
                onClick={() => handleCategoryClick('Dresses')}
                >Dresses</li>
                <li
                className='category'
                value='Shoes'
                id='Shoes'
                name='Shoes'
                onClick={() => handleCategoryClick('Shoes')}
                >Shoes</li>
                <li
                className='category'
                value='Handbags'
                id='Handbags'
                name='Handbags'
                onClick={() => handleCategoryClick('Handbags')}
                >Handbags</li>
                <li
                className='category'
                value='Skirts'
                id='Skirts'
                name='Skirts'
                onClick={() => handleCategoryClick('Skirts')}
                >Skirts</li>
                <li 
                className='category'
                value='Sweaters'
                id='Sweaters'
                name='Sweaters'
                onClick={() => handleCategoryClick('Sweaters')}
                >Sweaters</li>
                </>
                :
                <>
                 <li
                className='category'
                value='Tops'
                id='Tops'
                name='Tops'
                onClick={() => handleCategoryClick('Tops')}
                >Tops</li>
                <li
                className='category'
                value='Bottoms'
                id='Bottoms'
                name='Bottoms'
                onClick={() => handleCategoryClick('Bottoms')}
                >Bottoms</li>
                <li
                className='category'
                value='Dresses'
                id='Dresses'
                name='Dresses'
                onClick={() => handleCategoryClick('Dresses')}
                >Dresses</li>
                <li
                className='category'
                value='Shoes'
                id='Shoes'
                name='Shoes'
                onClick={() => handleCategoryClick('Shoes')}
                >Shoes</li>
                <li
                className='category'
                value='Handbags'
                id='Handbags'
                name='Handbags'
                onClick={() => handleCategoryClick('Handbags')}
                >Handbags</li>
                <li
                className='category'
                value='Skirts'
                id='Skirts'
                name='Skirts'
                onClick={() => handleCategoryClick('Skirts')}
                >Skirts</li>
                <li 
                className='category'
                value='Sweaters'
                id='Sweaters'
                name='Sweaters'
                onClick={() => handleCategoryClick('Sweaters')}
                >Sweaters</li>
                <li 
                className='category'
                value='All'
                id='All'
                name='All'
                onClick={() => handleCategoryClick(null)}
                >All</li>
                </>
                }
            </ul>
        </div>
        </div>
        </>

    );
};

export default FilterSideBar;
