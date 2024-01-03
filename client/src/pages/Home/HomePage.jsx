import React, {useEffect, useState} from 'react'
import BannerImage from '../../components/banner/BannerImage'
import SellerBanner from '../../components/banner/SellerBanner'
import SearchBar from '../../components/Bar/SearchBar/SearchBar'
import CardCarousel from '../../components/Carousel/CardCarousel'
import Footer from '../../components/footer/Footer'
import FilterBar from '../../components/Bar/FilterBar/FilterBar'
import './HomePage.css'
import Card from '../../components/Card/Card'
const HomePage = ( props ) => {
  
  const [selectedFilter, setSelectedFilter] = useState(null)

  /*
  Hello, I want to track the state of the selectedFilter category in the DropdownFilter component across my application with the goal of being able to filder products by selected category in the HomePage component. The DropdownFilter component is rendered in the SearchBar component and the SearchBar component is rendered in the HomePage component so the prop data would be passing across three files and I just don't know how to implement this successfully.

  */

  const handleFilterSelect = (filter)  => {
    setSelectedFilter(filter)
  }

  console.log(selectedFilter)

  const productByCategory = selectedFilter ? props.data.filter((product) => product.category === selectedFilter) : props.data

  return (
    <>
    { selectedFilter === null ?
    <div className="container">
      <SearchBar 
      onFilterSelect={handleFilterSelect}
      />
      <FilterBar />
        <BannerImage />
        &nbsp;
        <CardCarousel
        title='All products'
        subtitle='Browse all products.'
        data={props.data}
        />
        <CardCarousel
        title='Popular products'
        subtitle='Explore the most popular products.'
        data={[...props.data].sort((a, b) => b.likes - a.likes).slice(0, 10)}
        />
        <Footer />      
    </div>
    :
    <div className="container">
      <SearchBar 
      onFilterSelect={handleFilterSelect}
      />
      <FilterBar />
        <BannerImage />
        &nbsp;
        <div className="row mx-auto">
                    <div className="col-md-12"> 
                        <h5 className='text-left'>Showing {selectedFilter} results</h5>
                    </div>
                    {productByCategory.map((listing) => (
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
                            />
                        </div>
                    ))}
                </div>
        <Footer />
    </div>
    }
    </>    
  )
}

export default HomePage