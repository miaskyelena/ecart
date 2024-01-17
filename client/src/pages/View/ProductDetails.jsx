import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { AiFillHeart, AiOutlineHeart, AiOutlineForm } from 'react-icons/ai'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import SearchBar from '../../components/bar/Searchbar/SearchBar'

const ProductDetails = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [liked, setLiked] = useState(false)
    const { id } = useParams()
    const user = useUser()
    const supabase = useSupabaseClient()

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
                <div className='d-flex justify-content-between'>
                    <h3 
                    style={
                        {
                            fontWeight: 'bold',
                        }
                    }

                    >{product.title}</h3>
                    { liked ?
                    <AiFillHeart size={30} color='red' onClick={() => setLiked(false)} />
                    :
                    <AiOutlineHeart size={30} onClick={() => setLiked(true)} />
                    }

                </div>
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
                    }>${product.price} </h4>
                    <p className='small text-muted'>+ Shipping</p>
                </div>
                <br />
                <Button variant='dark' className='w-100'>Add to Cart</Button>
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
                <div className='d-flex justify-content-between'>
                    <h6 className='text-dark'>Size</h6>
                    <p className='small text-muted'>{product.size}</p>
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
                    <Link to='/login' className='w-100'>
                        <Button variant='dark' className='w-100'>
                            Add to Cart
                        </Button>
                    </Link>
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