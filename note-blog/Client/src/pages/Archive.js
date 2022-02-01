import React from 'react';
import PostList from '../components/Archive/Post-list';
import { Card, Col } from 'react-bootstrap';

const Archive = () => {
  
    return (
      <Card className="mb-1 p-5 bg-dark">
        <Col className='md-6'>
          <Card.Title className="text-light fw-bold">Notes :</Card.Title>
        </Col>
        <Col>
          <PostList/>
        </Col>
      </Card>
    )
  }

export default Archive;
