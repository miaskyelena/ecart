import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BannerPhoto1 from '../../assets/images/banner2.jpg'
import BannerPhoto2 from '../../assets/images/miumiu2.jpg'
import BannerPhoto3 from '../../assets/images/banner3.jpg'
import BannerPhoto4 from '../../assets/images/miumiu1.jpg'
import BannerPhoto5 from '../../assets/images/miumiu4.jpg'
import BannerPhoto6 from '../../assets/images/minimalist1.jpg'
import BannerPhoto7 from '../../assets/images/minimalist2.jpg'
import './BannerImage.css'
const BannerImage = () => {
  
  return (
  <div className='relative-container'> {/* Add this */}
    <div className='row g-0 '>
      <div className='col-md-6'>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner banner-container mt-4" style={{borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}} >
            <img src={BannerPhoto7} class="d-block w-100" alt="..." />
          </div>

          <div className='banner-overlay' style={{borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}} >
            &nbsp;
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner banner-container mt-4" style={{borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}>
            <div class="carousel-item active" data-bs-interval="10000">
              <img src={BannerPhoto6} class="d-block w-100" alt="..." />
            </div>
            <div className='banner-overlay' style={{borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}>
              <h1 className='banner-text'></h1><br/>
              <span className='banner-text'>
      
              </span>
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='center-box'>
      <span>hello</span>
    </div>
  </div>
  )
}

export default BannerImage