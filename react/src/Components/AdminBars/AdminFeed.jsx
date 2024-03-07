// AdminFeed.jsx
import React from 'react';
import './AdminFeed.css';
import Share from '../Share/Share';
import Posts from '../Posts/Posts';
import { Posts as DummyPosts } from '../../dummyData';

const AdminFeed = () => {
  return (
    <div className='AdminFeed'>
      <div className='AdminFeedWrapper'>
        <Share />
        {DummyPosts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AdminFeed;
