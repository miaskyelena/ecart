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
            <SearchBar />
            <div className="container">
                <FilterBar />
                <Row>
                <Col md={2}>
                    <FilterSideBar />
                </Col>
                <Col>
                <SortBar />
                <div className="mt-3 ps-5">
                <div className='d-flex justify-content-between'>
                    <div><nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Products</li>
                    </ol>
                    </nav></div>
                    <p className='small text-muted'>Showing {listings.length} results</p>
                </div>
                    <div className="col-md-12 text-left">
                        <h2 className='text-left'>All Listings</h2>
                        <spam className='text-muted'>Have something to sell? <Link to='/create'>Create a listing.</Link></spam>
                    </div>
                </div>
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