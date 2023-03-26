import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const ContactFrom = () => {
  return (
    <Container>
        <Row>
            <Col md="6" className='mb-5 from_main--section'>
            
                <h1 className='text-center text-white py-5'>Contact With Us</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='text-white'>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='text-white'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='text-white'>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='text-white'>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <div className='Count_contact-button mb-5'>

                        <Button className='px-5 py-2' variant="primary">sent</Button>

                    </div>
                </Form>

            </Col>

           
        </Row>

    </Container>
  )
}

export default ContactFrom