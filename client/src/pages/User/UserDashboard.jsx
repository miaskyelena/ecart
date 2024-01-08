import React, {useEffect} from 'react'
import SearchBar from '../../components/Bar/SearchBar/SearchBar'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Container, Row, Col, Card, Button, Form} from 'react-bootstrap'

const UserDashboard = () => {
    const user = useUser()
    const supabase = useSupabaseClient()


  return (
   <>
    <SearchBar />
    <Container>
        <Row>
           <h3 className='mt-5'>Welcome, {user?.email} </h3>
           <Col>
           <img src={user?.user_metadata.avatar_url}
           alt='avatar' />
           <input type='file' />
              <Button>Upload</Button>
           </Col>
           <Col>
            <Form>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Username</Form.Label>&nbsp;
                    <Form.Control type='text' placeholder='This is how your name will appear on your listings' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='text' placeholder='' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Website</Form.Label>
                    <Form.Control type='text' placeholder='Add a link to your website' />
                </Form.Group>
                
                <Button variant='primary' type='submit'>
                    Update
                </Button>
            </Form>
            </Col>

        </Row>
    </Container>
   </>
  )
}

export default UserDashboard
