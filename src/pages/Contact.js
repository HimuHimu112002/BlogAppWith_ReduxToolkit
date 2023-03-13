import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <Container>
        <Row>
            <Col>
            
                <h1 className='text-center py-5'>Contact With Us</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>

            </Col>

            <div>

            <Button className='contact_button' variant="info">sent</Button>
            <Link to="/"><Button variant="info">Bank Home</Button></Link>
            </div>
        </Row>
    </Container>
  )
}

export default Contact