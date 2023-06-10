import React, { useState, useEffect } from 'react';
import {Button,Card } from 'react-bootstrap'
import { getDatabase, ref, onValue,remove } from "firebase/database";
import { blogInformation } from '../slice/BlogDetails';
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import { useDispatch} from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2'

const TabAllBlog = () => {

    const db = getDatabase()
    const dispatch = useDispatch()
    const [UiShow, setUiShow] = useState([]);

    useEffect(()=>{
        onValue(ref(db, 'blog'), (snapshot) => {
          let arr = []
          snapshot.forEach((item)=>{
            
            arr.push({...item.val(), id: item.key})
            
          });
          setUiShow(arr);
          });
    }, [])

    let handleDetails=(item)=>{
        dispatch(blogInformation(item))
        localStorage.setItem("blogInfo", JSON.stringify(item))
    }

    let handleBlogDelete =(id)=>{
        Swal.fire({
        title: 'Are you sure?',
        text: "Deleted your's blog",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#162030',
        confirmButtonBorder: 'border-none',
        confirmButtonMarginTop: '10px',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        padding:"70px",
        }).then((result) => {
        if (result.isConfirmed) {
            remove(ref(db, 'blog/' + id))
            Swal.fire(
            'Deleted!',
            'Your post has been deleted.',
            'success'
            )
        }
        })
        
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
                    <div className='delete_Button--Align'>

                    <div className='view_details'>

                      <Link to="/blogInfo"><Button className='text-white font-bold Allbtn'>View Details</Button></Link> 
                    </div>
                   
                    <Button onClick={()=>handleBlogDelete(item.id)} variant="danger">Delete
                        <AiFillDelete className=''></AiFillDelete>
                    </Button>
                   
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