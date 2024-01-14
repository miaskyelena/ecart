import React, {useEffect, useState} from 'react'
import { useUser } from '@supabase/auth-helpers-react'
import BannerImage from '../../components/banner/BannerImage'
import SellerBanner from '../../components/banner/SellerBanner'
import SearchBar from '../../components/Bar/SearchBar/SearchBar'
import CardCarousel from '../../components/Carousel/CardCarousel'
import Footer from '../../components/footer/Footer'
import FilterBar from '../../components/Filter/FilterBar/FilterBar'
import './HomePage.css'
import Card from '../../components/Card/Card'
const HomePage = ( props ) => {
  const user = useUser()
  const [selectedFilter, setSelectedFilter] = useState(null)
  const [likes, setLikes] = useState([])
  const [products, setProducts ] = useState([])
  const handleFilterSelect = (filter)  => {
    setSelectedFilter(filter)
  }

  console.log(selectedFilter)

  const productByCategory = selectedFilter ? props.data.filter((product) => product.category === selectedFilter) : props.data

  useEffect(() => {
    setProducts(props.data)
  }
  , [props])

  useEffect(() => {
    const fetchLikes = async () => {
        const response = await fetch(`http://localhost:3001/user-likes/${user.email}`)
        const data = await response.json()
        setLikes(data)
    }
    fetchLikes()
  }
  , [user])
  
  const likedProductIds = likes.map(like => like.productid)
  const likedProducts = products.filter(product => likedProductIds.includes(product.id))





  console.log(likedProductIds)

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
        title='Your Recently Viewed Items'
        subtitle='Browse all products.'
        data={props.data}
        />
        <CardCarousel
        title='Your Watched Items'
        subtitle='Products you are watching.'
        data={likedProducts}
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
                        <h3 className='text-left'
                        style={{
                            fontWeight: 'bold',
                            fontFamily: 'Arial',
                        }}
                        >Shop {selectedFilter}</h3>
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
        title='All products'
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