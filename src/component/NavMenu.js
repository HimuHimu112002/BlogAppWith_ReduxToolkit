import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <>
        <Container fluid>
            <Row className='NavBg'>
                <Col>
                    <Navbar expand="lg">
                      <Container fluid>
                          <Navbar.Brand href="#"><img className='logo_img img-fluid' src='image/blog.png'></img></Navbar.Brand>

                          <Navbar.Toggle aria-controls="navbarScroll" />
                          <Navbar.Collapse id="navbarScroll">

                          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                              <Link to="/"><Nav.Link href="#action1">Home</Nav.Link></Link>
                              <Link to="/allblog"><Nav.Link href="#action2">Blog</Nav.Link></Link> 
                              <Link to="/about"><Nav.Link href="#action2">About</Nav.Link></Link>
                              <Link to="/contact"><Nav.Link href="#action2">Contact</Nav.Link></Link>
                              <Link to="/uploadBlog"><Nav.Link href="#action2">Upload Your Blog</Nav.Link></Link>
                                            
                          </Nav>
                          
                        </Navbar.Collapse>
                      </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default NavMenu