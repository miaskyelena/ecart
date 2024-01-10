import React, {useState} from 'react'
import './FilterSideBar.css'
const FilterSideBar = () => {
    const [ expanded, setExpanded ] = useState(false)

    const handleExpand = () => {
        setExpanded(!expanded)
    }



    return (
        <div className="FilterSideBar ">
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
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            Pristine
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Like New
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
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
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            XS
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />   
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            S
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            M
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            L
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
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
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: 'red',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />   
                            <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: 'orange',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                             <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: 'yellow',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: 'green',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: 'blue',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: 'pink',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
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
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <span className='small mb-0' style={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: 'black',
                                display: 'inline-block',}}>
                            </span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
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
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            Tops
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />   
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Bottoms
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Dresses
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Shoes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Handbags
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
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
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            Chanel
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />   
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Missoni
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />   
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                            Marni
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
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
