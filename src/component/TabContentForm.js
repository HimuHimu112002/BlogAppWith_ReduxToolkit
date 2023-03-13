import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Col, Container, Row,Button} from 'react-bootstrap'
import { getDatabase, push, ref, set } from "firebase/database";
import { getStorage, ref as storageref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TabContentForm = () => {

const db = getDatabase()
const storage = getStorage()
const navigate = useNavigate()

let [title, setTitle] = useState("")
let [author, setAuthor] = useState("")
let [categoris, setCategoris] = useState("")
let [date, setDate] = useState("")
let [discriptions, setDiscriptions] = useState("")
let [image, setImg] = useState([])


let handleImageUpload = (e)=>{
  const storageRef = storageref(storage, e.target.files[0].name);

  const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
  uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    }, 
  (error) => {
    console.log(error)
  },() => {
  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setImg(downloadURL)
      console.log(downloadURL)
  
  });
}
);
}

let handleTitle = (e)=>{
  setTitle(e.target.value)
}

let handleAuthor = (e)=>{
  setAuthor(e.target.value)
}

let handleCategori = (e)=>{
  setCategoris(e.target.value)
}

let handleDate = (e)=>{
  setDate(e.target.value)
}

let handleDiscription = (e)=>{
  setDiscriptions(e.target.value)
}

let handleSubmit =()=>{
  toast.success("Blog Upload Successfull.");
  if(setTitle && setAuthor && setCategoris && setDate && setDiscriptions){
    set(push(ref(db, "blog")),{
      title:title,
      author:author,
      categori:categoris,
      date:date,
      discription:discriptions,
      image: image,
  
    }).then(()=>{
      setTimeout(()=>{
        navigate("/")
      },3000)
    })
  }
}
  
  return (
    <Container>
    <ToastContainer position="top-right" theme="dark"/>

      <Row>
        <Col md="8">
          <Form>
          <h1 className='py-5'>Uploding Your New Blog</h1>

            <Form.Group onChange={handleTitle} className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Blog Title</Form.Label>
              <Form.Control type="text" placeholder="Blog Title" />
            </Form.Group>

            <Form.Group onChange={handleAuthor} className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Author Name</Form.Label>
              <Form.Control type="text" placeholder="Blog Title" />
            </Form.Group>

            <Form.Group onChange={handleCategori} className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Blog Categoris</Form.Label>
              <Form.Control type="text" placeholder="Blog Title" />
            </Form.Group>

            <Form.Group onChange={handleImageUpload} className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Blog Thumbnil</Form.Label>
              <Form.Control type="file" placeholder="Blog Title" />
            </Form.Group>

            <Form.Group onChange={handleDate} className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Uploding Date</Form.Label>
              <Form.Control type="date" placeholder="Blog Title" />
            </Form.Group>

            <Form.Group onChange={handleDiscription} className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Blog Discriptions</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button onClick={handleSubmit} variant="primary">Upload</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default TabContentForm