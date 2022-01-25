import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Archive = ({posts}) => {
  if (!posts) {
    return (
      <Card className="mb-1 p-5 bg-dark">
        <Col className='md-6'>
        <Card.Title className="text-light fw-bold">Notes :</Card.Title>
        <Card.Body className="text-light">Nothing here yet...</Card.Body>
        </Col>
      </Card>
    )
  }

  return (
    <div>
      <h3>Everything has already been said ... </h3>
      {posts.map(post => (
          <Card key={post._id} className="mb-1 p-5 bg-dark">
            <Col className='md-6'>
            <Card.Body className="text-light r">
              {post.postText}
              <br/>
              by <span className='fw-bold'>
                {post.username} on {post.createdAt}
                </span>
            </Card.Body>
            </Col>
          </Card>
        ))}
    </div>
  );
};

export default Archive;
