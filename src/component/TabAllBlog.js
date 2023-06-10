import React, { useState, useEffect } from 'react';
import {Button,Card } from 'react-bootstrap'
import { getDatabase, ref, onValue } from "firebase/database";
import { blogInformation } from '../slice/BlogDetails';
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import { useDispatch} from 'react-redux';

const TabAllBlog = () => {

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
    <div className='scroll'>
      <ScrollToTop smooth/>
      <section className='py-4 container'>
        <div className='row justify-content-center'>

          {UiShow.map((item)=>(
            <div onClick={()=>handleDetails(item)} className='col-11 col-md-6 col-lg-6 mx-0 mb-4'>
              
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
          
        </div>
      </section> 
    </div>
  )
}

export default TabAllBlog