import React, { useState, useEffect } from 'react';
import Stack from '@mui/joy/Stack';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useShoppingCart } from '../../context/CartContext';
import formatBrand from '../../utilities/formatBrand';
import formatCurrency from '../../utilities/formatCurrency';
import './Card.css';
const ListCard = ( props ) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [likes, setLikes] = useState([])
    const user = useUser()

    const { addToCart, cart, removeFromCart } = useShoppingCart();

    const productInCart = cart.find(product => product.id === props.id)
    const quantity = productInCart ? productInCart.quantity : 0

    const handleAddToCart = () => {
        addToCart(props)
    }

    const handleRemoveFromCart = () => {
        removeFromCart(props)
    }


    const handleLike = async (event) => {
        event.preventDefault()

        setLiked(!liked)
        incrementLikeCount()

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

    

    return (
        <>
        <div className='row'>
        <div className='col-12'>
        <Stack>
            <Card key={props.id}
            style={{ width: '100%', border: 'none', boxShadow: 'none' }}
            >
                <div className='row g-0 mt-3 mb-3'>
                    <div className='d-flex justify-content-end align-items-end' style={
                        {position: 'absolute', marginLeft: '-1rem'}
                    }>
                        {liked ? <AiFillHeart size={25} className='heart-icon' color='red' id={props.id} /> : <AiOutlineHeart size={25} onClick={handleLike} className='heart-icon' id={props.id} />}
                        {likeCount > 0 ? 
                    <div >
                        <span className='small text-muted'>{likeCount} likes</span>
                    </div>
                    : null}
                    </div>
                    <div className='col-md-3 mx-auto'>
                        <img src={props.image} alt='...' style={{ height: '15rem', width: '100%', objectFit: 'contain' }} />
                    </div>
                    <div className='col-md-9 mx-auto'>
                        <div className='card-body'>
                        <span className='small text-muted'>in {props.category}</span>
                        <h4 className='brand'>
                            {formatBrand(props.brand)}
                        </h4>
                        <div className='d-flex justify-content-between'>
                            <Link to={`/products/${props.id}`} className='text-decoration-none'>
                            <h6 className='card-title'>{props.title}</h6>
                            </Link>
                        </div>
                            <p className='card-text' style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '20px'}}>
                                {formatCurrency(props.price)}
                            </p>

                            <div className='d-flex justify-content-between'>
                            <span className='small'> Size {props.size}</span>
                            <span className='small'> In Stock</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                            <span className='small mb-0'>Condition {props.condition}</span>
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
                    </div>
                </div>
            </Card>
        </Stack>
        </div>
        </div>
        </>
    )
}

export default ListCard;