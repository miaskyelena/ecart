import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import ReactPaginate from 'react-paginate'
import SearchBar from '../../components/Bar/Search/SearchBar'
import FilterSideBar from '../../components/Filter/SideBar/FilterSideBar'
import FilterTagsBar from '../../components/Filter/TagsBar/FilterTagsBar'
import FilterBar from  '../../components/Filter/FilterBar/FilterBar'
import SortBar from '../../components/Filter/SortBar/SortBar'
import ListView from '../../components/Filter/SortBar/ListView'
import ListCard from '../../components/Card/ListCard'
import './ReadProducts.css'
import { select } from '@nextui-org/react'
const ReadProducts = ( props ) => {
    const [listings, setListings] = useState([])
    const [selectedTags , setSelectedTags] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [listView, setListView] = useState(false)

    useEffect(() => {
        setListings(props.data)
    }, [props.data])



    //SortBar Component Sorting Logic
    const handleSort = (sortType) => {
        if (sortType === 'priceLowToHigh') {
            const sortedListings = [...listings].sort((a, b) => a.price - b.price)
            setListings(sortedListings)
        } else if (sortType === 'priceHighToLow') {
            const sortedListings = [...listings].sort((a, b) => b.price - a.price)
            setListings(sortedListings)
        }
        else if (sortType === 'newest') {
            const sortedListings = [...listings].sort((a, b) => new Date(b.submittedon) - new Date(a.submittedon))
            setListings(sortedListings)
        }
        else if (sortType === 'oldest') {
            const sortedListings = [...listings].sort((a, b) => new Date(a.submittedon) - new Date(b.submittedon))
            setListings(sortedListings)
        }
        console.log(sortType)
    }

    //FilterSideBar Component Sorting Logic
    const handleFilter = (filter) => {
        setSelectedCategory(filter)
        const filteredListing = [...listings].filter((listing) => listing.category === filter);
        setListings(filteredListing);
    }

    const handleTagFilter = (tag) => {
        const filteredListing = [...listings].filter((listing) => listing.tags.includes(tag));
        setListings(filteredListing);
    }






    //Pagination
    const [pageNumber, setPageNumber] = useState(0)
    const listingsPerPage = 12
    const pagesVisited = pageNumber * listingsPerPage
    const pageCount = Math.ceil(listings.length / listingsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <div className="ReadProducts">
            <SearchBar/>
            <div className="container-lg">
                <FilterBar 
                
                />
                <Row>
                <div className="mt-3 ">
                <div className='topbar'>
                <div className='d-flex justify-content-between'>
                    <div><nav aria-label="breadcrumb">
                    { selectedCategory === null ?
                    <>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Products</li>
                    </ol>
                    </>
                    :
                    <>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item"><a href='/products'>Products</a></li>
                        <li className='breadcrumb-item active' aria-current='page'>{selectedCategory}</li>
                    </ol>
                    </>
                    }

                    </nav></div>
                    <div>
                    </div>
                    <span className='text-muted'>Have something to sell? <Link to='/create'>Create a listing here.</Link></span>
                </div>
                </div>
                <div className="read-listing-banner">
                    <div className="d-flex justify-content-left mt-5">
                        <div className=''>
                        { selectedCategory === null ?
                        <>
                        <h2 >All Listings</h2>
                        </>
                        :
                        <>
                        <h2 >{selectedCategory}</h2>
                        </>
                        }
                        
                        </div>                        
                    </div>
                    <div className='d-flex justify-content-left'>
                        <span className='text-muted'>Showing {listings.length} results</span>
                    </div>
                </div>
                </div>
                <Col md={2}>
                    <FilterSideBar
                    onCategorySelect={handleTagFilter}
                     />
                </Col>
                <Col>
               
                <div className="d-flex mt-4">
                <FilterTagsBar />
                <div className='d-flex justify-content-end'> 
                <SortBar
                onSortSelect={handleSort} 
                /> 
                <ListView
                />          
                </div>
                </div>
                <div className='d-flex justify-content-end mt-1'>
                
                </div>
                
                <div className="row mx-auto mt-3">
            
                { listView === false ?
                <>
                    {listings.slice(pagesVisited, pagesVisited + listingsPerPage).map((listing) => (
                        <div className="col-md-3 mb-3">
                            <Card
                            id={listing.id} 
                            title={listing.title}
                            brand={listing.brand}
                            description={listing.description}
                            size={listing.size}
                            image={listing.image}
                            condition={listing.condition}
                            category={listing.category}
                            color={listing.color}
                            price={listing.price}
                            likes={listing.num_likes}
                            submittedBy={listing.submittedby}
                            submittedOn={listing.submittedon}
                            />
                        </div>
                    ))}
                </>
                :
                <>
                { listings.slice(pagesVisited, pagesVisited + listingsPerPage).map((listing) => (
                    <div className="col-md-12 mb-3">
                        <ListCard
                        id={listing.id} 
                        title={listing.title}
                        brand={listing.brand}
                        size={listing.size}
                        image={listing.image}
                        condition={listing.condition}
                        category={listing.category}
                        color={listing.color}
                        price={listing.price}
                        likes={listing.num_likes}
                        submittedby={listing.submittedby}
                        submittedon={listing.submittedon}
                        />
                    </div>
                ))}
                </>
                }
                </div>
                </Col>
                </Row>
                <div className="d-flex justify-content-center mt-4">
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
        </div>
    )
}
export default ReadProducts;