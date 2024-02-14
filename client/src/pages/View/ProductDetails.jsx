import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { AiFillHeart, AiOutlineHeart, AiOutlineForm } from 'react-icons/ai'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useShoppingCart } from '../../context/CartContext'
import SearchBar from '../../components/Bar/Search/SearchBar'
import formatCurrency from '../../utilities/formatCurrency'
import formatBrand from '../../utilities/formatBrand'

const ProductDetails = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
    const { id } = useParams()
    const user = useUser()
    const supabase = useSupabaseClient()
    const { addToCart } = useShoppingCart()

    const handleAddToCart = () => {
        addToCart(product)
    }

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`http://localhost:3001/products/${id}`)
            const data = await response.json()
            setProduct(data)
            setLoading(false)
        }
        fetchProduct()
    }
    , [id])

    const handleLike = async (event) => {
        event.preventDefault()
        setLiked(!liked)
        incrementLikeCount()
    }

    const incrementLikeCount = async () => {
        const response = await fetch(`http://localhost:3001/products/${id}/like`, { method: 'POST' })
        const data = await response.json()
        setLikeCount(data.likes)
    }

    useEffect(() => {
        const fetchLikeCount = async () => {
            const response = await fetch(`http://localhost:3001/products/${id}/like`)
            const data = await response.json()
            setLikeCount(data.likes)
        }
        fetchLikeCount()
    }, [id])


  return (
    <>
    <SearchBar />
    <Container className='view-listing'>
    <div className='ms-4'><nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item"><a href="/products">Products</a></li>
                        <li className='breadcrumb-item active' aria-current="page">{product.category}</li>

                    </ol>
        </nav></div>
        <Row className='mt-5'>
            <Col className='mt-5 w-50 mb-5' xs={6} sm={4} md={6} lg={8} xl={8}>
                <Card className=' mx-auto' style={
                    {
                        width: '100%',
                        height: '100%',
                        borderRadius: '10px',
                        border: 'none',
                        overflow: 'hidden',
                    }
                }>
                    <Card.Img variant='top' src={product.image} style={
                        {
                            width: '100%',
                            height: '600px',
                            objectFit: 'contain',
                        }
                    
                    } />
                </Card>
            </Col>
            <Col className='me-5 ms-5 ps-1 pe-1'
            xs={12}
            sm={10}
            md={4}
            lg={4}
            xl={4}
            >
                <div className='heart-icon-container d-flex justify-content-end align-items-end'>
                    <span>
                        <p className='text-muted mb-0'>
                            {product.num_likes === 0 ? '' : likeCount}
                        </p>
                    </span>
                    <span>
                    {liked  ? <AiFillHeart size={25} className='heart-icon' color='red' /> : <AiOutlineHeart size={25} onClick={
                        handleLike
                    } className='heart-icon' />}
                    </span>
                </div>
                <div className='d-flex justify-content-between'>
                    <h3 
                    style={{fontWeight: 'bold',}}>
                        {product.brand}
                    </h3>
                </div>
                <div className='d-flex justify-content-between'>
                    <h5 className='text-dark'>{product.title}</h5>
                </div>
                <span className='small text-muted'>Size {product.size}</span>
                <div className='d-flex justify-content-between'>
                    <p className='small'><a href='' className='text-muted'>
                        In {product.category}
                        </a></p>
                    <p className='small text-muted'>In Stock</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <h4 className='text-dark' style={
                        {
                            fontFamily: 'Arial',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                        }
                    }>
                        {formatCurrency(product.price)}
                    </h4>
                    <p className='small text-muted'>+ Shipping</p>
                </div>
                <br />
                <Button 
                variant='outline-dark' 
                className='w-100'
                onClick={() => handleAddToCart(product)}
                >
                    Add to Cart
                </Button>
                <br />
                <br />
                <h5 className='text-dark'>Description</h5>
                <p className='small text-muted'>{product.description}</p>
                <div className='d-flex justify-content-between'>
                    <h6 className='text-dark'>Condition</h6>
                    <p className='small text-muted'>{product.condition}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <h6 className='text-dark'>Color</h6>
                    <p className='small text-muted'>{product.color}</p>
                </div>
              
                <hr />
                <h5 className='text-dark' style={
                    {
                        fontFamily: 'Arial',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                    }
                }>Seller</h5>
                <p className='small text-muted'>Sold by 
                    <a href='' className='text-muted'> {product.submittedby}</a>
                    <p className='small text-muted'>{product.submittedon}</p>
                </p>
              
                <div className='d-flex justify-content-between mt-5'>
                    { user == null ? 
                    <>
                    

                    </>
                    :
                    <>
                   
                    &nbsp;
                    <Link to={`/edit/${id}`} className='w-50'>
                        <Button variant='outline-primary' className='w-100'>
                            <AiOutlineForm size={20} />
                            &nbsp;
                            Edit
                        </Button>
                    </Link>
                    </>
                    }
                </div>
            
            </Col>
        </Row>

    </Container>
    </>

  )
}

export default ProductDetails;