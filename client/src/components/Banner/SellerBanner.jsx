import React from 'react';
import { Card } from 'react-bootstrap';
import './SellerBanner.css';
import SellerImage from '../../assets/images/seller.jpg';
import SellerImage2 from '../../assets/images/seller2.jpg';
import SellerImage3 from '../../assets/images/seller3.jpg';
import SellerImage4 from '../../assets/images/miumiu5.jpg';

const SellerBanner = () => {
  return (
    <div className="seller-banner container-xl"> 
    <Card className="text-white mt-3" 
    style={{ 
      width: '100%',
      height: '25rem',
      display: 'flex',
      backgroundImage: `url(${SellerImage2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      }}
    >
      <Card.ImgOverlay
        style={{
            backgroundColor: 'rgba(0,0,0,0.1)',
        }}
      >
        <h1 className="text-center mt-5">Best Life Hack? Clean Out!</h1>
        <h4 className="text-center text-light">It doesn't get any more convenient (and sustainable) than this. Buy and sell preloved items with us-we'll do the rest.
        </h4>
        <Card.Text className="text-center">
          <button className="btn btn-light mt-2" style={
            {
              borderRadius: '50px',
                padding: '10px 30px',
                fontSize: '1.2rem',
                fontWeight: 'bolder',
                
            }
          
          }> Learn More</button>
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
    </div>
  );
};

export default SellerBanner;