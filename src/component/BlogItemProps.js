import React, { useState, useEffect } from 'react';
import {Button,Card } from 'react-bootstrap'
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch} from 'react-redux';
import { blogInformation } from '../slice/BlogDetails';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Form } from 'react-bootstrap'


const BlogItemProps = () => {

  const db = getDatabase()
  const dispatch = useDispatch()

  const [UiShow, setUiShow] = useState([]);
  let [SearchArray, setSearchArray] = useState([])
  let [zero, setzero] = useState("")

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

  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])

  // Search Section
  let handleUserListSearch=(e)=>{
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
   
    <section className='py-4 container'>
      <div className='row justify-content-center'>

          <div>

            <p>Search blog Categori</p>           

              <Form.Select onChange={handleUserListSearch} className='home_search' aria-label="Default select example">
                  <option>All</option>
                  {UiShow.map((item)=>(
                  <>
                  <option>{item.categori}</option>
                  </>
                  ))}
              </Form.Select>

          </div>


        {SearchArray.length > 0 
        ?
        (SearchArray.map((item)=>(
          <div data-aos="zoom-in" onClick={()=>handleDetails(item)} className='col-11 col-md-6 col-lg-4 mx-0 mb-4'>
            
            <div className='card p-0 shadow p-2'>
              <Card.Img className='img_height' src={item.image} variant="top"></Card.Img>
                  
              <Card.Body>
                  <Card.Title> Title :{item.title} </Card.Title>
                  <p> Categori :{item.categori} </p>
                  <Link to="/blogInfo"><Button variant="primary">View Details</Button></Link> 

              </Card.Body>
            </div>
            
                  
          </div>
        ))) 
        :
        UiShow.map((item)=>(
          <div data-aos="zoom-in" onClick={()=>handleDetails(item)} className='col-11 col-md-6 col-lg-4 mx-0 mb-4'>
            
            <div className='card p-0 shadow p-2' >
              <Card.Img className='img_height' src={item.image} variant="top"></Card.Img>
                  
              <Card.Body>
                  <Card.Title> Title :{item.title} </Card.Title>
                  <p> Categori :{item.categori} </p>
                  <Link to="/blogInfo"><Button variant="primary">View Details</Button></Link> 

              </Card.Body>
            </div>
            
          </div>

        ))}
        
      </div>
    </section>
    
  </>

  )
}

export default BlogItemProps
