
import React, { useState } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import SearchBar from '../../components/Bar/SearchBar/SearchBar';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';

const UserDashboard = () => {
    const user = useUser();
    const supabase = useSupabaseClient();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleWebsiteChange = (event) => {
        setWebsite(event.target.value);
    };

    const handleSave = async () => {
        // Save the user profile data to the database using supabase
        // You can use supabase.client to interact with the database
        // For example:
        // const { data, error } = await supabase.client
        //   .from('users')
        //   .update({ username, email, website })
        //   .eq('id', user.id);

        // Handle success or error response
    };

    return (
        <>
        <SearchBar />
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>Profile</Card.Header>
                        <Card.Img variant="top" src={user?.user_metadata.avatar_url} style={
                            {
                                height: '200px',
                                width: '200px',
                                objectFit: 'contain',
                                objectPosition: 'center',
                            }
                        }/>
                        <Card.Body>
                            <Card.Title>{user?.user_metadata.full_name}</Card.Title>
                            <Form>
                                <Form.Group className="mb-3" controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formWebsite">
                                    <Form.Label>Website</Form.Label>
                                    <Form.Control type="text" placeholder="Enter website" value={website} onChange={handleWebsiteChange} />
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={handleSave}>
                                    Save
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        
        </>
    
    );
};

export default UserDashboard;

