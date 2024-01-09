import React from 'react'
import Bottoms from '../../assets/images/bottoms.jpg'
import Dresses from '../../assets/images/dresses.jpg'
import Handbags from '../../assets/images/handbags.jpg'
import Shoes from '../../assets/images/shoes.jpg'
import Skirts from '../../assets/images/skirts.jpg'
import Tops from '../../assets/images/tops.jpg'
import Sweaters from '../../assets/images/sweaters.jpg'

const CategoryFilter = () => {
    const categories = [
        { name: 'Tops', value: 'tops', image: './assets/images/tops.jpg' },
        { name: 'Bottoms', value: 'bottoms', image: {Bottoms} },
        { name: 'Dresses', value: 'dresses', image: {Dresses} },
        { name: 'Shoes', value: 'shoes', image: {Shoes} },
        { name: 'Handbags', value: 'handbags', image: {Handbags} },
        { name: 'Skirts', value: 'skirts', image: {Skirts} },
        { name: 'Sweaters', value: 'sweaters', image: {Sweaters} },
    ]
    
  return (
    <div>
        <div className="category-filter">
            <h3>Categories</h3>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <img src={category.image} />
                        <a href={`/category/${category.value}`}>{category.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>

  )
}

export default CategoryFilter