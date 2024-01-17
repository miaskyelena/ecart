import React, { useState, useEffect } from 'react';
import Stack from '@mui/joy/Stack';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

const ListCard = ( props ) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [likes, setLikes] = useState([])
    const user = useUser()

    const handleLike = async (event) => {
        event.preventDefault()
        

        setLiked(!liked)

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId: props.id,
                userEmail: user.email,
            }),
        }

        const response = await fetch ('http://localhost:3001/user-likes', options)
        const data = await response.json()

    }
    const handleUnlike = async (event) => {
        event.preventDefault()
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId: event.target.id,
                userEmail: user.email,
            }),
        }

        const response = await fetch (`http://localhost:3001/user-likes/`, options)
        const data = await response.json()
        window.location = '/user/likes'
    }

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
    const isLiked = likedProductIds.includes(props.id)

    

    return (
        <>
        <div className='row'>
        <div className='col-12'>
        <Stack>
            <Card key={props.id} className='mb-3' >
                <div className='row g-0 mt-3 mb-3'>
                    <div className='d-flex justify-content-end align-items-end' style={
                        {position: 'absolute', marginLeft: '-1rem'}
                    }>
                        {isLiked ? <AiFillHeart size={25} onClick={handleUnlike} className='heart-icon' color='red' id={props.id} /> : <AiOutlineHeart size={25} onClick={handleLike} className='heart-icon' id={props.id} />}
                    </div>
                    <div className='col-md-3 mx-auto'>
                        <img src={props.image} alt='...' style={{ height: '15rem', width: '100%', objectFit: 'contain' }} />
                    </div>
                    <div className='col-md-9 mx-auto'>
                        <div className='card-body'>
                        <span className='small text-muted'>in {props.category}</span>
                        <h4>{props.brand}</h4>
                        <div className='d-flex justify-content-between'>
                            <Link to={`/products/${props.id}`} className='text-decoration-none'>
                            <h6 className='card-title'
                           
                            >{props.title}</h6>
                            </Link>
                        </div>
                            <p className='card-text' style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '20px'}}>${props.price}.00</p>
                            { props.description ? 
                            <>
                            <p className='card-text'>{props.description}</p>
                            </>
                            : null
                            }
                            <div className='d-flex justify-content-between'>
                            <span className='small'> Size {props.size}</span>
                            <span className='small'> In Stock</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                            <span className='small mb-0'>Condition {props.condition}</span>
                            <button className='btn btn-outline-dark'>Add to cart</button>
                            </div>


              
                    </div>
                    </div>
                </div>
                            
                <div className='card-footer'>
                    
                    <div className='d-flex justify-content-between'>
                    <small className='text-muted'>Sold by {props.submittedby}</small>
                    <small className='text-muted'>Posted {props.submittedon}</small>
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