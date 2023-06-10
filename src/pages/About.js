import React, { useState, useEffect } from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])
  return (
    <Container>
        <Row>
        <h1 className='text-center py-5'>About Us</h1>
            <Col data-aos="fade-right" md="6">
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
            </Col>
            <Col data-aos="fade-left" md="6">
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
            </Col>
        </Row>

        <Row className='mt-5'>
        
            <Col data-aos="fade-right" md="6">
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
            </Col>
            <Col data-aos="fade-left" md="6">
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
            </Col>
            <Link to="/"><Button className='Allbtn'>Back to home </Button></Link>
        </Row>
    </Container>
  )
}

export default About