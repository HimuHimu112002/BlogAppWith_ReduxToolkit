import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footerBG'>
      <Container>
        <Row>
          <Col md="4">
            <h3>Menu Item</h3>
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
              <li>Upload Blog</li>
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