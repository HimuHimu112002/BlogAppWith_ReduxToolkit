import React, { useState, useEffect } from 'react';
import { Container, Row,Button, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { blogInformation } from '../slice/BlogDetails'
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch} from 'react-redux';
import {Card } from 'react-bootstrap'

import ScrollToTop from "react-scroll-to-top";

const ShowBlogInfo = () => {

    let data = useSelector((state)=> state.blogInformation.blogInfo)
    const db = getDatabase()
    const dispatch = useDispatch()

    const [UiShow, setUiShow] = useState([]);
  
    useEffect(()=>{
      onValue(ref(db, 'blog'), (snapshot) => {
        let arr = []
        snapshot.forEach((item)=>{
          let show =  item.val() 
          
          arr.push(show)
        });
        setUiShow(arr);
        });
    }, [])

    let handleDetails=(item)=>{
        dispatch(blogInformation(item))
        localStorage.setItem("blogInfo", JSON.stringify(item))
      }

  return (
    <>
        <Container>

        <ScrollToTop smooth />
            <Row>
                <Col md="9">
                    <section className='py-4 container'>
                        
                        <div  className='col-11 col-md-6 col-lg-4 mx-0 mb-4 w-100'>
                            
                            <div className='card p-0 overflow-hidden shadow-sm' >
                                <div className='showImg'>
                                    <img className='w-100' src={data.image}/>
                                </div>
                                
                                <Card.Body>
                                    <div className='Welcome d-flex py-2'>
                                        <p className='published'>Published</p>
                                        <p className='published p-1 rounded text-white px-2'>Upload Date : {data.date}</p>
                                        <p className='published p-1 rounded text-white px-2'>Welcome</p>
                                    </div>
                                    <h1>Title : {data.title}</h1>
                                    <h4>Categori : {data.categori}</h4>
                                    <p>Author Name : {data.author}</p>
                                    <p>Discription : {data.discription}</p>

                                    <div className='view_details'>

                                        <Link to="/"><Button className='text-white font-bold Allbtn'>Back Home</Button></Link> 
                                    </div>
                                </Card.Body>
                            </div>
                                
                        </div>
                            
                    </section>
                </Col>
                
                <Col md="3">
                    <section >
                        <div className='BlogShow-scroll py-4'>

                            {UiShow.map((item)=>(
                            <div onClick={()=>handleDetails(item)} className='col-11 col-md-6 col-lg-4 mb-2'>
                                
                                <div className='card shadow-sm card-sizing'>
                                   
                                    <Card.Body>
                                        <Card.Title> Title :{item.title} </Card.Title>
                                        <div className='view_details'>

                                            <Link to="/blogInfo">Read More >>></Link> 
                                        </div> 

                                    </Card.Body>
                                </div>
                                    
                            </div>
                            ))}

                        </div>
                    </section>
                </Col>
            </Row>
        </Container>
        
    </>
  )
}

export default ShowBlogInfo