import React, { useState, useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useShoppingCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import formatBrand from '../../utilities/formatBrand';
import formatCurrency from '../../utilities/formatCurrency';
import './Card.css';

const Card = (props) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [likes, setLikes] = useState([])
    const user = useUser()

    const { addToCart, removeFromCart, cart } = useShoppingCart();

    const handleAddToCart = () => {
        addToCart(props)
    }

    console.log(props)


    const handleRemoveFromCart = () => {
        removeFromCart(props)
    }

    const productInCart = cart.find(product => product.id === props.id)
    const quantity = productInCart ? productInCart.quantity : 0

    const handleLike = async (event) => {
        event.preventDefault()
        setLiked(!liked)
        incrementLikeCount()
        addLikedProduct()

    }

    //add liked product to user likes 
    const addLikedProduct = async () => {
        const response = await fetch(`http://localhost:3001/products/user-likes/`, { method: 'POST' })
        const data = await response.json()
        setLikes(data)
    }

    
    //increment like count
    const incrementLikeCount = async () => {
        const response = await fetch(`http://localhost:3001/products/${props.id}/like`, { method: 'POST' })
        const data = await response.json()
        setLikeCount(data.likes)

    }

    //fetch updated like count
    useEffect(() => {
        const fetchLikeCount = async () => {
            const response = await fetch(`http://localhost:3001/products/${props.id}/like`)
            const data = await response.json()
            setLikeCount(data.likes)
        }
        fetchLikeCount()
    }, [props.id])


    console.log(likeCount)
       

    

    return (
        <div className='card' style={{ 
            border: 'none',
            }}>
            <div className='heart-icon-container d-flex justify-content-end align-items-end me-2 mt-2'>
                <span>
                    <p className='text-muted mb-0'>
                        {likeCount === 0 ? '' : likeCount}
                    </p>
                </span>
                <span style={{ cursor: 'pointer', zIndex: '1' }}>
                {liked  ? <AiFillHeart size={25} className='heart-icon' color='red' /> : <AiOutlineHeart size={25} onClick={
                 handleLike
                } className='heart-icon' />}
                </span>
            </div>
            <img src={props.image} className='card-img-top' style={{ height: '270px', objectFit: 'contain' }} alt='...' />
            <div className='card-body'>
                <div className='d-flex justify-content-center align-items-center' style={
                    { 
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        display: 'block',
                        direction: 'ltr',
                    }
                
                }>
                <span className='brand'>
                    {formatBrand(props.brand)}
                </span>
                </div>
                <div className='d-flex justify-content-center' style={{
                    width: '100%',
                    fontSize: '0.9rem',
                }}> {/* Decreased spacing */}
                    <div>
                        <Link to={`/products/${props.id}`}>
                            <h6 className='mb-0 card-title'>
                                <span className='d-flex justify-content-center'
                                
                                >
                                    {props.title}
                                </span>
                            </h6>
                        </Link>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <p className='small text-muted mb-0'>Size: {props.size}</p>
                </div>
               
                <div className='d-flex justify-content-center align-items-center'>
                    <p className='small text-dark mb-0'>
                        {formatCurrency(props.price)}
                    </p>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    { quantity === 0 ? 
                    <>
                    <p className='small text-muted mb-0'> 
                     <button 
                     className='btn btn-sm btn-outline-secondary'
                     onClick={handleAddToCart}
                     >Add to cart</button></p>
                    </>
                    :
                    <>
                    <div className='d-flex align-items-center flex-column' style={{gap: ".5rem"}}>
                        <div className='d-flex align-items-center justify-content-center' style={{gap: ".5rem"}}>
                             <button className='btn btn-sm btn-outline-secondary'>-</button>
                             <div>
                                <span className='small'>{quantity}  in cart</span>
                             </div>
                             <button 
                             className='btn btn-sm btn-outline-secondary'
                             onClick={handleAddToCart}
                             >+</button>
                        </div>
                        <button variant='danger'
                        className='btn btn-sm btn-outline-danger'
                        onClick={handleRemoveFromCart}
                        >Remove</button>
                    </div>
                    </> 
                     }
                </div>
                
            </div>
        </div>
    )
}

export default Card;