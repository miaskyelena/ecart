import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BannerPhoto1 from '../../assets/images/miumiu1.jpg'
import BannerPhoto2 from '../../assets/images/miumiu2.jpg'
import './BannerImage.css'
const BannerImage = () => {
  return (
    <>
    <div className='row g-0 '>
    <div className='col-md-6'>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner banner-container mt-4">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={BannerPhoto1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={BannerPhoto2} class="d-block w-100" alt="..." />
    </div>
  </div>
  <div className='banner-overlay'>
    <h1 className='banner-text'>Buy, sell, and shop trending fashion.</h1><br/>
    <span className='banner-text'>
      Explore the latest fashion trends in clothing, shoes, and accessories.
    </span>
    &nbsp;
  </div>

    </div>
    </div>
    <div className='col-md-6'>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner banner-container mt-4">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={BannerPhoto1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={BannerPhoto2} class="d-block w-100" alt="..." />
    </div>
  </div>
  <div className='banner-overlay'>
    <h1 className='banner-text'>Buy, sell, and shop trending fashion.</h1><br/>
    <span className='banner-text'>
      Explore the latest fashion trends in clothing, shoes, and accessories.
    </span>
    &nbsp;
  </div>

    </div>
    </div>
</div>
    </>
  )
}

export default BannerImage