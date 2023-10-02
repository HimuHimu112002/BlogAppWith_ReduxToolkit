import React, { useState, useEffect } from 'react';
import {Button,Card, Form } from 'react-bootstrap'
import { getDatabase, ref, onValue } from "firebase/database";
import { blogInformation } from '../slice/BlogDetails';
import { Link, useNavigate } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import { useDispatch} from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AllBlog = () => {
    const db = getDatabase()
    const dispatch = useDispatch()
    const [UiShow, setUiShow] = useState([]);
    let [SearchArray, setSearchArray] = useState([])
    let [load, setload] = useState(true)

    setTimeout(()=>{
      setload(false)
    },3000)
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

    // Aos animation ===========
    useEffect(()=>{
      AOS.init({duration: 3000})
    },[])



    // Search Section
    let handleUserListSearch=(e)=>{
      let SearchFilterArray = []
      if (e.target.value.length == 0) {
          setSearchArray([])
          // array value faka thakle sokol userlist data dekhabe 
      }else{
        UiShow.filter((item)=>{
              if(item.title.toLowerCase().includes(e.target.value.toLowerCase())){
                  SearchFilterArray.push(item)
                  setSearchArray(SearchFilterArray)
              }
          })
      }
  }

  return (
    <>
    <ScrollToTop smooth/>

    <h1 className='text-center py-5'>All Blogs</h1>
    <section className='py-4 container'>
    <div className='Search_section'>
      <Link to="/"><Button className='my-6 text-white Allbtn'>Back</Button></Link>

      <div className='Total_blog'>
        <p>Total Blog : {UiShow.length}</p>
      </div>
      <div className='flex w-25'>

        <p>Search blog title name</p>
        <Form className="d-flex mb-3">
          <Form.Control onChange={handleUserListSearch}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>

      </div>
    </div>

    {load ?<Skeleton count={15}/> :
    
      SearchArray.length > 0 
      ?
      (<div className='row justify-content-center'>

        {SearchArray.map((item)=>(
          <div data-aos="fade-right" onClick={()=>handleDetails(item)} className='col-11 col-md-6 col-lg-4 mx-0 mb-4'>
            
            <div className='card p-0 overflow-hidden h-100 shadow p-2' >
              <Card.Img className='img_height' src={item.image} variant="top"></Card.Img>
                  
              <Card.Body>
                  <Card.Title> Title :{item.title} </Card.Title>
                  <div className='view_details'>

                    <Link to="/blogInfo"><Button className='text-white font-bold Allbtn'>View Details</Button></Link> 
                  </div> 

              </Card.Body>
            </div>
                  
          </div>
        ))}
        
      </div>) 
      : 
      (<div className='row justify-content-center'>

        {UiShow.map((item)=>(
          <div data-aos="fade-right" onClick={()=>handleDetails(item)} className='col-11 col-md-6 col-lg-4 mx-0 mb-4'>
            
            <div className='card p-0 overflow-hidden h-100 shadow p-2' >
              <Card.Img className='img_height' src={item.image} variant="top"></Card.Img>
                  
              <Card.Body>
                  <Card.Title> Title :{item.title} </Card.Title>

                  <div className='view_details'>

                    <Link to="/blogInfo"><Button className='text-white font-bold Allbtn'>View Details</Button></Link> 
                  </div>

              </Card.Body>
            </div>
                  
          </div>
        ))}
        
      </div>)

    }
    


    </section> 
    </>
  )
}

export default AllBlog