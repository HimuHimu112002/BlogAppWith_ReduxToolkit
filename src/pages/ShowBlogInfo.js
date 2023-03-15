import React, { useState, useEffect } from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap'
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
                
                <section className='py-4 container'>
                    
                    <div  className='col-11 col-md-6 col-lg-4 mx-0 mb-4 w-100'>
                        
                        <div className='card p-0 overflow-hidden shadow' >
                            <div className='showImg'>
                            <Card.Img className='img_height1' src={data.image} variant="top"></Card.Img>

                            </div>
                            
                            <Card.Body>
                                <h1>Title : {data.title}</h1>
                                <h4>Categori : {data.categori}</h4>
                                <p>Author Name : {data.author}</p>
                                <p>Discription : {data.discription}</p>
                                <p>Upload Date : {data.date}</p>
                                <Link to="/"> <Button variant="primary">Back Home</Button></Link>
                            </Card.Body>
                        </div>
                            
                    </div>
                        
                </section>
               

                <section className='py-4 container'>
                    <div className='row justify-content-center'>

                        {UiShow.map((item)=>(
                        <div onClick={()=>handleDetails(item)} className='col-11 col-md-6 col-lg-4 mx-0 mb-4'>
                            
                            <div className='card p-0 overflow-hidden h-100 shadow p-2'>
                            <Card.Img className='img_height2' src={item.image} variant="top"></Card.Img>
                                
                            <Card.Body>
                                <Card.Title> Title :{item.title} </Card.Title>
                                <Link to="/blogInfo"><Button variant="primary">View Details</Button></Link> 

                            </Card.Body>
                            </div>
                                
                        </div>
                        ))}

                    </div>
                </section>

            </Row>
        </Container>
    </>
  )
}

export default ShowBlogInfo