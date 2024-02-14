import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import Card from '../../components/Card/Card'
import ReactPaginate from 'react-paginate'
import SearchBar from '../../components/Bar/Search/SearchBar'
import FilterSideBar from '../../components/Filter/SideBar/FilterSideBar'
import FilterBar from  '../../components/Filter/FilterBar/FilterBar'
import SortBar from '../../components/Filter/SortBar/SortBar'
import FilterBtnGroup from '../../components/Filter/FilterBtnGroup'
import ListView from '../../components/Filter/SortBar/ListView'
import ListCard from '../../components/Card/ListCard'
import { useNavigate } from 'react-router-dom'
import './ReadProducts.css'
const ReadProducts = ( props ) => {
    const [listings, setListings] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [listView, setListView] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState({
        condition: '',
        size: '',
        color: '',
        brand: ''
      });

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
    
    }
    const handleFilterSelect = (filterCategory, filterValue) => {
        setSelectedFilter(prevFilter => ({
          ...prevFilter,
          [filterCategory]: filterValue
        }));
      };

    const productByCategory = selectedCategory ? props.data.filter((product) => product.category === selectedCategory) : props.data

    
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

    
    const handleListView = () => {
        setListView(!listView)
    }


    useEffect(() => {
        setListings(productByCategory)
    }, [selectedCategory])

    const filteredListings = listings.filter(listing => 
        (!selectedFilter.condition || listing.condition === selectedFilter.condition) &&
        (!selectedFilter.size || listing.size === selectedFilter.size) &&
        (!selectedFilter.color || listing.color === selectedFilter.color)
      );

    useEffect(() => {
        setListings(filteredListings)
    }, [selectedFilter])

    useEffect(() => {
        setListings(props.data)
    }, [props])



    const [pageNumber, setPageNumber] = useState(0)
    const listingsPerPage = 12
    const pagesVisited = pageNumber * listingsPerPage
    const pageCount = Math.ceil(listings.length / listingsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <div className="ReadProducts">
            <SearchBar
            onCategorySelect={handleCategoryClick}
            />
            <div className="container-lg">
                <FilterBar />
                <Row>
                <div className="mt-3 ">
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
                    <span className='text-muted'>Have something to sell? <Link to='/create'>Create a new listing here.</Link></span>
                </div>
                <div className="read-listing-banner">
                    <div className="d-flex justify-content-left mt-5">
                        <div className=''>
                        { selectedCategory === null ?
                        <>
                        <h2 style={{ fontFamily:'Arial'}}>All Listings</h2>
                        </>
                        :
                        <>
                        <h2  style={{ fontFamily:'Arial'}}>{selectedCategory}</h2>
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
                    onCategorySelect={handleCategoryClick}
                     />
                </Col>
                <Col>
                <div className="d-flex mt-4">
                <FilterBtnGroup 
                onFilterSelect={handleFilterSelect}
                />
                <SortBar
                onSort={handleSort}
                />
                <ListView
                toggleListView={handleListView}
                 />
                
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