// AdminFeed.jsx
import React from 'react';
import './DonorFeed.css';
import Posts from '../Posts/Posts';
import { Posts as DummyPosts } from '../../dummyData';

const DonorFeed = () => {
  return (
    <div className='DonorFeed'>
      <div className='UserFeedWrapper'>
        
        {DummyPosts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default DonorFeed;
