import React from 'react'
import TabContentForm from '../component/TabContentForm';
import { Col,Row,Button,Nav,Tab} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import TabAllBlog from '../component/TabAllBlog';

const UploadBlog = () => {
  return (
    <>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="tab_bg flex-column">

            <Nav.Item className='py-3'>
              <Nav.Link eventKey="first">Upload New Blog</Nav.Link>
            </Nav.Item>

            <Nav.Item className='py-3'>
              <Nav.Link eventKey="second">Your All Blogs</Nav.Link>
            </Nav.Item>

            <Nav.Item className='py-3'>
              <Nav.Link eventKey="four">Delete Your Blog</Nav.Link>
            </Nav.Item >

            <Nav.Item className='py-3'>
              <Nav.Link eventKey="five">Your All Blogs</Nav.Link>
            </Nav.Item>

            <Nav.Item className='py-3'>
              <Nav.Link eventKey="six">Your All Blogs</Nav.Link>
            </Nav.Item>

            <Nav.Item className='py-3'>
              <Nav.Link eventKey="seven">Your All Blogs</Nav.Link>
            </Nav.Item>

          <Link to="/"><Button className='mt-5 mx-2' variant="primary">Back to home</Button></Link>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
          
            <Tab.Pane eventKey="first">
              <TabContentForm></TabContentForm>
            </Tab.Pane>

            <Tab.Pane eventKey="second">
                <TabAllBlog></TabAllBlog>
            </Tab.Pane>

          </Tab.Content>
        
        </Col>
      </Row>
    </Tab.Container>
    </>
  )
}

export default UploadBlog