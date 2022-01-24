import React from 'react';
import { Card } from 'react-bootstrap';

const Archive = ({posts, username }) => {
  if (!posts) {
    return (
      <Card>
        <Card.Title>Notes</Card.Title>
        <Card.Body>Nothing here yet...</Card.Body>
      </Card>
    )
    
  }

  return (
    <div>
      <h3>By {username}</h3>
      {posts.map(post => (
          <ul key={post._id} className="card mb-3">
            <li className="card-header">
             
                {post.postText}
              
              posted on {post.createdAt}
            </li>
          </ul>
        ))}
    </div>
  );
};

export default Archive;
