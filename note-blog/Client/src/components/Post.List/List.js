import React from 'react';
import {Link} from 'react-router-dom'

const PostList = ({posts, title }) => {
  if (!posts) {
    return <h3>Nothing here yet...</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {posts.map(post => (
          <ul key={post._id} className="card mb-3">
            <li className="card-header">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {post.username}
              </Link>{' '}
              posted on {post.createdAt}
            </li>
          </ul>
        ))}
    </div>
  );
};

export default PostList;
