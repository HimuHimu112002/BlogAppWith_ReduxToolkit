import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footerBG'>
      <Container>
        <Row>
          <Col md="4">
            <h3>Menu Item</h3>
            <ul>
            <Link to="/"><Nav.Link>Home</Nav.Link></Link>
            <Link to="/allblog"><Nav.Link>Blog</Nav.Link></Link> 
            <Link to="/about"><Nav.Link>About</Nav.Link></Link>
            <Link to="/contact"><Nav.Link>Contact</Nav.Link></Link>
            <Link to="/uploadBlog"><Nav.Link>Upload Your Blog</Nav.Link></Link>
            </ul>
          </Col>
          <Col md="4">
          <h3>Contact Information</h3>
            <ul>
              <li>0175845545</li>
              <li>JonesDevas@gmali.com</li>
            </ul>
          </Col>
          <Col md="4">
          <h3>Location</h3>
            <ul>
              <li>Dhaka Bangladesh</li>
              <li>405, city main road</li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer