import React, { useState}from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import { useUser } from '@supabase/auth-helpers-react'
import SearchBar from '../../components/Bar/Search/SearchBar'
const CreateListing = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = year + '-' + month + '-' + day;

    const user = useUser()

    const [newProduct, setNewProduct] = useState({
        id: 0,
        title: '',
        brand: '',
        size: '',
        color: '',
        condition: '',
        category: '',
        price: '',
        image: '',
        description: '',
        submittedby: user.email,
        submittedon: currentDate,
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNewProduct( (prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const createProduct = (event) => {
        event.preventDefault() 

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        }

        fetch ('http://localhost:3001/products', options)
        window.location = '/'
    }
    

  return (
    <>

    <SearchBar />
    <Container className='view-listing'>
        <Link to=
        {`/`}
            className='text-muted ps-5'>Back to home</Link>
        <h3 className='ps-5 mt-2'>Create Listing</h3>
        <span className='text-muted ps-5'>
            Add a new listing to your store.
        </span>
        <Row>
            <Col className='w-50' xs={6} sm={4} md={6} lg={8} xl={8}>
                <Card className='shadow-sm mx-auto' style={
                    {
                        width: '100%',
                        height: '100%',
                        borderRadius: '10px',
                        border: 'none',
                        overflow: 'hidden',
                        borderColor: 'black',
                    }
                }>  
                    <Card.Img variant='top' src={newProduct.image} style={
                        {
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            padding: '20px',
                            opacity: '0.5',                            
                        }
                    } />

                </Card>
            </Col>
            <Col className='mx-auto ms-5 me-5' xs={12} sm={10} md={4} lg={4} xl={4}>
            <form className='create-product-form'>
                <h5 className='text-dark'>Title</h5>
                <input className='form-control' type='text-muted' id='title' name='title' value={newProduct.title} onChange={handleChange} placeholder='Title' required />
                <br />
                <div className='d-flex justify-content-between'>
                <input className='form-control' type='text-muted' id='brand' name='brand' value={newProduct.brand} onChange={handleChange} placeholder='Brand' /> &nbsp;
                <select
                className='form-control text-muted'
                name='size'
                id='size'
                value={newProduct.size}
                onChange={handleChange}
                >
                    <option value=''>Size</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='X-Large'>X-Large</option>
                </select> 
                &nbsp;
                <select
                className='form-control text-muted'
                name='color'
                id='color'
                value={newProduct.color}
                onChange={handleChange}
                required
                >
                    <option value=''>Color</option>
                    <option value='Red'>Red</option>
                    <option value='Orange'>Orange</option>
                    <option value='Yellow'>Yellow</option>
                    <option value='Green'>Green</option>
                    <option value='Blue'>Blue</option>
                    <option value='Purple'>Purple</option>
                    <option value='Pink'>Pink</option>
                    <option value='Brown'>Brown</option>
                    <option value='White'>White</option>
                    <option value='Black'>Black</option>
                    <option value='Gray'>Gray</option>
                    <option value='Multi'>Multi</option>
                </select>
                </div>
                <br />
                <div className='d-flex justify-content-between'>
                    <h5 className='text-dark'>Condition</h5>
                    <p className='small text-muted'>Required</p>
                </div>
                <select
                className='form-control text-muted'
                name='condition'
                id='condition'
                value={newProduct.condition}
                onChange={handleChange}
                required
                >
                    <option value=''>Select a condition</option>
                    <option value='Pristine'>Pristine</option>
                    <option value='New'>Like New</option>
                    <option value='Used'>Used</option>
                </select>
                <br />
                <div className='d-flex justify-content-between'>
                    <h5 className='text-dark'>Category</h5>
                    <p className='small text-muted'>Required</p>
                </div>
                <select
                className='form-control text-muted'
                name='category'
                id='category'
                value={newProduct.category}
                onChange={handleChange}
                >
                    <option value=''>Select a category</option>
                    <option value='Dresses'>Dresses</option>
                    <option value='Tops'>Tops</option>
                    <option value='Sweaters'>Sweaters</option>
                    <option value='Coats & Jackets'>Coats & Jackets</option>
                    <option value='Jeans'>Jeans</option>
                    <option value='Pants'>Pants</option>
                    <option value='Skirts'>Skirts</option>
                    <option value='Shorts'>Shorts</option>
                    <option value='Swimwear'>Swimwear</option>
                    <option value='Activewear'>Activewear</option>
                    <option value='Lingerie & Sleepwear'>Lingerie & Sleepwear</option>
                    <option value='Socks & Hosiery'>Socks & Hosiery</option>
                    <option value='Other'>Maternity</option>
                    <option value='Shoes'>Shoes</option>
                    <option value='Handbags'>Handbags</option>
                    <option value='Accessories'>Accessories</option>
                </select>             
                <br />
                <div className='d-flex'>
                    <h5
                    style={
                        {
                            fontFamily: 'Arial',
                            fontSize: '1.2rem',
                            marginTop: '0.5rem',
                        }
                    }
                    >$</h5>&nbsp; <h5 className='text-dark' style={
                        {
                            fontFamily: 'Arial',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                        }
                    }><input 
                    className='form-control'
                    type='text'
                    name='price'
                    id='price'
                    value={newProduct.price}
                    placeholder='Price ' 
                    onChange={handleChange}
                    required
                    /></h5>

                    &nbsp; <p className='small text-muted'>+ Shipping</p>
                </div>
                <input 
                    className='form-control'
                    type='text' 
                    name='image'
                    id='image'
                    value={newProduct?.image}
                    placeholder='Image url'
                    onChange={handleChange}
                    required
                     />
                <br />
                <h5 className='text-dark'>Description</h5>
                <p className='small text-muted'>
                    <textarea 
                    className='form-control'
                    type='text'
                    name='description'
                    id='description'
                    value={newProduct.description}
                    rows='5' 
                    placeholder='Describe your product below. Include all relevant information.'
                    onChange={handleChange}
                     />
                </p>
                <input type ='submit' className='btn btn-outline-dark w-100' value='Create Listing' onClick={createProduct} />
            </form>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default CreateListing