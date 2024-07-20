import React, {useEffect, useState}from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselCard from '../Card/CarouselCard';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import './CardCarousel.css';

const CardCarousel = ({ data, title, subtitle }) => {


    return (
    <div className='carousel-container mt-4'>
        <div className='container-xl'>
        <div className='row'>
            <div className='d-flex justify-content-between'>
                <h2>{title}</h2>
                
                <Link to='/products'>
                    <Button variant='outline-dark'>SHOP ALL</Button>
                </Link>
            </div>
        <div className='col'>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="carousel-bar"
                containerClass=""
                customTransition="all 1s linear"
                dotListClass=""
                draggable={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={true}
                renderDotsOutside={true}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 7,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 5,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={3}
                swipeable
            >

                {data.map((product) => (
                    <CarouselCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        brand={product.brand}
                        tags={product.tags}
                        category={product.category}
                    />
                ))}
            </Carousel>

        </div>
        </div>
        </div>
    </div>
    )
}


export default CardCarousel; 