import React from 'react'
import './FilterSideBar.css'
const FilterSideBar = () => {

    return (
        <div className="FilterSideBar">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className='text-left'>Filter by</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h6 className='text-left'>Category</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h6 className='text-left'>Size</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h6 className='text-left'>Color</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h6 className='text-left'>Condition</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterSideBar
