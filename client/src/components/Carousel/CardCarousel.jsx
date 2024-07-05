import React, {useEffect, useState}from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card from '../Card/Card';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import './CardCarousel.css';

const CardCarousel = ({ data, title, subtitle }) => {

    return (
        <div className='carousel-container'>
            <div className='container-xl'>
                <div className="row">
                   
                </div>
                <div className="row" style={
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                
                }>
                    <div className="col-md-12">
                        <OwlCarousel className='owl-theme'margin={10}
                         nav
                        responsive={{
                            0: {
                                items: 1,
                            },
                            600: {
                                items: 4,
                            },
                            1000: {
                                items: 5,
                            },
                        }}
                        >
                             <div className="col-md-12">
                        <h3 className='text-left'
                        style={{
                            fontFamily: 'Arial',
                        }}
                        >{title}</h3>
                        <p className='text-left'
                        style={{
                            fontFamily: 'Arial',
                           
                        }}
                    
                        >{subtitle}</p>
                    </div>
                            {data.map((item, index) => (
                                <Card
                                id={item.id}
                                key={index}
                                brand={item.brand}
                                title={item.title}
                                likes={item.num_likes}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                category={item.category}
                                size={item.size}
                                submittedBy={item.submittedby}
                                condition={item.condition}
                                color={item.color}
                                submittedOn={item.submittedOn}
                                />
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardCarousel; 