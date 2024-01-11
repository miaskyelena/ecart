import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import ReactPaginate from 'react-paginate'
import SearchBar from '../../components/Bar/SearchBar/SearchBar'
import FilterSideBar from '../../components/Filter/SideBar/FilterSideBar'
import FilterBar from  '../../components/Filter/FilterBar/FilterBar'
import SortBar from '../../components/Filter/SortBar/SortBar'
import { Stack } from '@mui/material'
import './ReadProducts.css'
const ReadProducts = ( props ) => {
    const [listings, setListings] = useState([])
    const [selectedFilter, setSelectedFilter] = useState(null)

    const handleFilterChange = (filter)  => {
      setSelectedFilter(filter)
    }
    
    const handleSort = (sortType) => {
        if (sortType === 'priceLowToHigh') {
            setListings([...listings].sort((a, b) => a.price - b.price))
        } else if (sortType === 'priceHighToLow') {
            setListings([...listings].sort((a, b) => b.price - a.price))
        }
        else if (sortType === 'newest') {
            setListings([...listings].sort((a, b) => b.id - a.id))
        }
        else if (sortType === 'oldest') {
            setListings([...listings].sort((a, b) => a.id - b.id))
        }
    }

    console.log(selectedFilter)

  

    useEffect(() => {
        setListings(props.data)
    }, [props])

    const [pageNumber, setPageNumber] = useState(0)
    const listingsPerPage = 9
    const pagesVisited = pageNumber * listingsPerPage
    const pageCount = Math.ceil(listings.length / listingsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <div className="ReadProducts">
            <SearchBar/>
            <div className="container">
                <FilterBar />
                <Row>
                <div className="mt-3">
                <div className='d-flex justify-content-between'>
                    <div><nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Products</li>
                    </ol>
                    </nav></div>
                    <p className='small text-muted'>Showing {listings.length} results</p>
                </div>
                    <div className="d-flex justify-content-between">
                        <div>
                        <h1 className='text-left' style={{ fontWeight:'bold', fontFamily:'Arial'}}>All Listings</h1>
                        <span className='text-muted'>Have something to sell? <Link to='/create'>Create a listing.</Link></span>
                        </div>

                    </div>
                </div>
                <Col md={2}>
                    <FilterSideBar
                    onFilterChange={handleFilterChange}
                     />
                </Col>
                <Col>
                <SortBar
                onSort={handleSort}
                />
                <div className="row mx-auto">
                    {listings.slice(pagesVisited, pagesVisited + listingsPerPage).map((listing) => (
                        <div className="col-md-4 mb-3">
                            <Card
                            id={listing.id} 
                            title={listing.title}
                            size={listing.size}
                            image={listing.image}
                            condition={listing.condition}
                            category={listing.category}
                            color={listing.color}
                            price={listing.price}
                            submittedBy={listing.submittedby}
                            submittedOn={listing.submittedon}
                            likes={listing.likes}
                            />
                        </div>
                    ))}
                </div>
                </Col>
                </Row>
                <ReactPaginate
                    className='react-paginate'
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination justify-content-center"}
                    previousLinkClassName={"page-link"}
                    nextLinkClassName={"page-link"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
             
            </div>
        </div>
    )
}
export default ReadProducts;