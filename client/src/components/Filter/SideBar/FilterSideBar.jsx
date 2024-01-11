import React, {useState} from 'react'
import './FilterSideBar.css'
const FilterSideBar = ({ onFilterChange }) => {
    const [ expanded, setExpanded ] = useState(false)
    const [selectedFilters, setSelectedFilters] = useState(null)

    const handleFilterChange = (category, filter) => {
        setSelectedFilters({ category, filter });
        onFilterChange(category, filter);
    }
  
    const handleExpand = () => {
        setExpanded(!expanded)
    }

    return (
        <div className="FilterSideBar">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={expanded} aria-controls="collapseOne" onClick={handleExpand}>
                        Condition
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="form-check">
                            <input className="form-check-input" 
                            type="checkbox" 
                            value="Pristine" 
                            name="Pristine" 
                            onChange={() => handleFilterChange('Condition', 'Pristine')} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            Pristine
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                              value="Like New"
                              name="Like New" 
                              onChange={() => handleFilterChange('Condition', 'Like New')} 
                              id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Like New
                            </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                              value="Used"
                              name="Used" 
                              onChange={() => handleFilterChange('Condition', 'Used')} 
                              id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Gently Used
                            </label>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded={expanded} aria-controls="collapseTwo" onClick={handleExpand}>
                        Size
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                              value="Small"
                              name="Small" 
                              onChange={() => handleFilterChange('Size','Small')} 
                              id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            XS
                            </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                              value="Small"
                              name="Small" 
                              onChange={() => handleFilterChange('Size','Small')} 
                              id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            S
                            </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                              value="Medium"
                              name="Medium"
                              onChange={() => handleFilterChange('Size','Medium')} 
                              id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            M
                            </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                              value="Large"
                              name="Large" 
                              onChange={() => handleFilterChange('Size','Large')} 
                              id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            L
                            </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                              value="Extra Large"
                              name="Extra Large" 
                              onChange={() => handleFilterChange('Size','Extra Large')} 
                              id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            XL
                            </label>
                        </div>
                    </div>
                    </div>
                </div>
            

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded={expanded} aria-controls="collapseThree" onClick={handleExpand}>
                        Color
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                              value="Red"
                              name="Red" 
                              onChange={() => handleFilterChange('Color','Red')} 
                              id="flexCheckDefault"
                            />
                            <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: 'red',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="Orange"
                                name="Orange"
                                onChange={() => handleFilterChange('Color','Orange')}
                                id="flexCheckDefault"
                            />
                            <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: 'orange',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="Yellow"
                                name="Yellow"
                                onChange={() => handleFilterChange('Color','Yellow')}
                                id="flexCheckDefault"
                            />
                             <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: 'yellow',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="Green"
                                name="Green"
                                onChange={() => handleFilterChange('Color','Green')}
                                id="flexCheckDefault"
                            />
                            <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: 'green',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="Blue"
                                name="Blue"
                                onChange={() => handleFilterChange('Color','Blue')}
                                id="flexCheckDefault"
                            />
                            <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: 'blue',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="Pink"
                                name="Pink"
                                onChange={() => handleFilterChange('Color', 'Pink')}
                                id="flexCheckDefault"
                            />
                            <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: 'pink',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="White"
                                name="White"
                                onChange={() => handleFilterChange('Color', 'White')}
                                id="flexCheckDefault"
                            />
                            <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                outline: '1px solid black',
                                backgroundColor: 'white',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="Black"
                                name="Black"
                                onChange={() => handleFilterChange('Color', 'Black')}
                                id="flexCheckDefault"
                            />
                            <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: 'black',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="Brown"
                                name="Brown"
                                onChange={() => handleFilterChange('Color', 'Brown')}
                                id="flexCheckDefault"
                            />
                            <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: 'brown',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                    </div>
                    </div>
                
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded={expanded} aria-controls="collapseFour" onClick={handleExpand}>
                        Category
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                              value="Tops"
                              name="Tops" 
                              onChange={() => handleFilterChange('Category','Tops')} 
                              id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            Tops
                            </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="Bottoms"
                                name="Bottoms"
                                onChange={() => handleFilterChange('Category','Bottoms')}
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Bottoms
                            </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="Dresses"
                                name="Dresses"
                                onChange={() => handleFilterChange('Category','Dresses')}
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Dresses
                            </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="Shoes"
                                name="Shoes"
                                onChange={() => handleFilterChange('Category','Shoes')}
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Shoes
                            </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" 
                                value="Handbags"
                                name="Handbags"
                                onChange={() => handleFilterChange('Category','Handbags')}
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Handbags
                            </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="Skirts"
                                name="Skirts"
                                onChange={() => handleFilterChange('Category','Skirts')}
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Skirts
                            </label>
                        </div>
                    </div>
                    </div>
                
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded={expanded} aria-controls="collapseFive" onClick={handleExpand}>
                        Brand
                    </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="Chanel"
                                name="Chanel"
                                onChange={() => handleFilterChange('Chanel')}
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            Chanel
                            </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="Missoni"
                                name="Missoni"
                                onChange={() => handleFilterChange('Missoni')}
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Missoni
                            </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="Marni"
                                name="Marni"
                                onChange={() => handleFilterChange('Marni')}
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Marni
                            </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                                value="Victoria"
                                name="Victoria"
                                onChange={() => handleFilterChange('Victoria')}
                                id="flexChdeckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            Victoria Beckham
                            </label>
                        </div>
                    </div>
                    </div>
                
                </div>
            </div>
        </div>

    )
}

export default FilterSideBar
