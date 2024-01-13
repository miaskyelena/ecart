import React, { useState, useEffect } from 'react';
import Stack from '@mui/joy/Stack';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const ListCard = ( props ) => {
    const [likes, setLikes] = useState([]);
    const [liked, setLiked] = useState(true);

    useState(() => {
        setLiked(false)
    }, [])

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

    return (
        <>
        <div className='row'>
        <div className='col-12'>
        <Stack spacing={1}>
            <Card key={props.id} className='mb-3'>
                <div className='row g-0 mt-3 mb-3'>
                    <div className='col-md-2'>
                        <img src={props.image} alt='...' style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                    </div>
                    <div className='col-md-9'>
                        <div className='card-body'>
                        <span className='small text-muted'>in {props.category}</span>
                        <div className='d-flex justify-content-between'>
                            <Link to={`/products/${props.id}`} className='text-decoration-none'>
                            <h5 className='card-title'
                            style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', display: 'block', fontWeight: 'bold' }}
                            >{props.title}</h5>
                            </Link>
                            <div>
                                <span className='small text-muted'>
                                    <AiOutlineHeart size={30} className='heart-icon' />
                                </span>
                            </div>
                        </div>
                            <p className='card-text' style={{ fontWeight: 'bold'}}>${props.price}</p>
                            <p className='card-text'>{props.description}</p>
                            <div className='d-flex justify-content-between'>
                            <span className='small text-muted'>Size {props.size}</span>
                            <div>
                                <button className='btn btn-outline-dark' id={props.id} onClick={handleUnlike}>Add to Cart</button>
                            </div>
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