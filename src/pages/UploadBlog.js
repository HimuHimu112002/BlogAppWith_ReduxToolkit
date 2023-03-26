import React from 'react'
import TabContentForm from '../component/TabContentForm';
import { Col,Row,Button,Nav,Tab,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import TabAllBlog from '../component/TabAllBlog';
import DeleteTabBlog from '../component/DeleteTabBlog'

const UploadBlog = () => {
  return (
    <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2} className="mt-5">
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

            <Link to="/"><Button className='mt-5 mx-2' variant="primary">Back to home</Button></Link>
          </Nav>
        </Col>

        <Col sm={10} className="mt-5">
          <Tab.Content>
          
            <Tab.Pane eventKey="first">
              <TabContentForm></TabContentForm>
            </Tab.Pane>

            <Tab.Pane eventKey="second">
                <TabAllBlog></TabAllBlog>
            </Tab.Pane>

            <Tab.Pane eventKey="four">
               <DeleteTabBlog></DeleteTabBlog>
            </Tab.Pane>

          </Tab.Content>
        
        </Col>
      </Row>
    </Tab.Container>
    </Container>
  )
}

export default UploadBlog