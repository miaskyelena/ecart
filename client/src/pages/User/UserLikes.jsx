import React, { useState, useEffect } from 'react';
import { useUser } from '@supabase/auth-helpers-react'
import SearchBar from '../../components/Bar/SearchBar/SearchBar';
import Stack from '@mui/joy/Stack';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import ListCard from '../../components/Card/ListCard';

const UserLikes = ( props ) => {
    const user = useUser();
    const [products, setProducts] = useState([]);
    const [likes, setLikes] = useState([]);
    const [liked, setLiked] = useState(true);

    useState(() => {
        setLiked(false)
    }, [])

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

    const likedProductIds = likes.map(like => like.productid)

    const userLikedProducts = products.filter(product => likedProductIds.includes(product.id))
    console.log(userLikedProducts)

    return (
        <>
        <SearchBar />
        <div className='container'>
            <div className='row'>
                <div className='col-12 mt-3 mb-3'>
                <div className='d-flex justify-content-between'>
                <div><nav aria-label="breadcrumb">
                    <ol className='breadcrumb'>
                        <li className='breadcrumb-item'><a href='/'>Home</a></li>
                        <li className='breadcrumb-item active' aria-current='page'>Favorites</li>
                    </ol>
                    </nav></div>
                    <div>
                        <span className='small text-muted'>Showing {userLikedProducts.length} results</span>
                    </div>
                </div>
                    <h3 style={{ fontFamily: 'Arial', fontWeight: 'bold'}}>Your Watched Items</h3>
                    <span className='ms-1'>Products you have liked will appear here.</span> 
                </div>
            </div>
            {userLikedProducts.map(product => (
                <ListCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                category={product.category}
                description={product.description}
                size={product.size}
                submittedby={product.submittedby}
                submittedon={product.submittedon}
                />
            ))}
        </div>
        
        </>
    )
}

export default UserLikes;