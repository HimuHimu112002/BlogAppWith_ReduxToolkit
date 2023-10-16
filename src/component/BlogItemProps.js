import React, { useState, useEffect } from 'react';
import {Card, Col, Container,Row } from 'react-bootstrap'
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch} from 'react-redux';
import { blogInformation } from '../slice/BlogDetails';
import { Link } from 'react-router-dom';
import {Form } from 'react-bootstrap'
import 'react-loading-skeleton/dist/skeleton.css'
import ListGroup from 'react-bootstrap/ListGroup';
const BlogItemProps = () => {

  const db = getDatabase()
  const dispatch = useDispatch()

  const [UiShow, setUiShow] = useState([]);
  let [SearchArray, setSearchArray] = useState([])

  useEffect(()=>{
    onValue(ref(db, 'blog'), (snapshot) => {
      let arr = []
      snapshot.forEach((item)=>{
        arr.push(item.val())
        
      });
      setUiShow(arr);
      });
  }, [])

  let handleDetails=(item)=>{
    dispatch(blogInformation(item))
    localStorage.setItem("blogInfo", JSON.stringify(item))
  }

  // Search Section
  let handleUserListSearch=(e)=>{
    console.log("ggg",e.target.value)
    let SearchFilterArray = []
    if (e.target.value === "All") {
      setSearchArray([])
        // array value faka thakle sokol userlist data dekhabe 
    }else{
      UiShow.filter((item)=>{
            if(item.categori.toLowerCase().includes(e.target.value.toLowerCase())){
                SearchFilterArray.push(item)
                setSearchArray(SearchFilterArray)
            }
        })
    }
  }

return (

  <>
    <Container>
      <Row>
        <Col md={3}>
          {/* Search Section ===========================*/}
          
      
            <h4 className='py-4'>Search By Blog Categori</h4>           
      
              {/* <Form.Select onChange={handleUserListSearch} className='home_search' aria-label="Default select example">
                  <option>All</option>
                  {UiShow.map((item)=>(
                  <>
                  <option>{item.categori}</option>
                  </>
                  ))}
              </Form.Select> */}
      
              <ListGroup>
                  <ListGroup.Item action variant="secondary">
                      All
                  </ListGroup.Item>
                  {UiShow.map((item)=>(
                  <>
                    <ListGroup.Item onClick={handleUserListSearch} action variant="secondary">
                    {item.categori}
                    </ListGroup.Item>
                  </>
                  ))}
              </ListGroup>
        </Col>
        <Col md={9}>

          <section className='py-4 container'>
          
            <div className='row justify-content-center'>
            
              {SearchArray.length > 0 
              ?
              (SearchArray.map((item)=>(
                <div onClick={()=>handleDetails(item)} className='col-11 col-md-6 col-lg-6 mx-0 mb-4'>
                  
                  <div className='card shadow-sm p-1'>
                    <Card.Img className='img_height img-fluit' src={item.image} variant="top"></Card.Img>
                        
                    <Card.Body>
                        <p className='published'>Published</p>
                        <Card.Title> Title :{item.title} </Card.Title>
                        <p> Categori :{item.categori} </p>
                        <div className='view_details'>
            
                          <Link to="/blogInfo">Read more >>></Link> 
                        </div>  
            
                    </Card.Body>
                  </div>
                  
                </div>
            
              ))) 
              :
              UiShow.map((item)=>(
                <div onClick={()=>handleDetails(item)} className='col-11 col-md-6 col-lg-6 mx-0 mb-4'>
                  
                  <div className='card shadow-sm p-2' >
                    <Card.Img className='img_height' src={item.image} variant="top"></Card.Img>
                        
                    <Card.Body>
                        <p className='published'>Published</p>
                        <Card.Title> Title :{item.title} </Card.Title>
                        <p> Categori :{item.categori} </p>
                        <div className='view_details'>
                        {/* <Button className='text-white font-bold Allbtn'>View Details</Button> */}
                        <Link to="/blogInfo">Read more >>></Link> 
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

export default BlogItemProps


