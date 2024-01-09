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

  const handleFilterSelect = (filter)  => {
    setSelectedFilter(filter)
  }

  console.log(selectedFilter)

  const productByCategory = selectedFilter ? props.data.filter((product) => product.category === selectedFilter) : props.data
  console.log(productByCategory)

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
        title='All products.'
        subtitle='Browse all products.'
        data={props.data}
        />
        <CardCarousel
        title='Popular products.'
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
        <div className="row">
                    <div className="col-md-12"> 
                        <h2 className='text-left'
                        style={{
                            fontFamily: 'Arial',
                            fontWeight: 'bold',
                        }}
                        >Browse {selectedFilter}.</h2>
                        <p className='text-left'
                        style={{
                            fontFamily: 'Arial',
                        }}
                        >{productByCategory.length} results in {selectedFilter}.</p>
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
                &nbsp;
        <CardCarousel
        title='All products.'
        subtitle='Browse all products.'
        data={props.data}
        />
        <Footer />
    </div>
    }
    </>   
  )
}

export default HomePage