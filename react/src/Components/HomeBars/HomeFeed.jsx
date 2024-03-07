// AdminFeed.jsx
import React from 'react';
import './HomeFeed.css';
import Posts from '../Posts/Posts';
import { Posts as DummyPosts } from '../../dummyData';

const HomeFeed = () => {
  return (
    <div className='HomeFeed'>
      <div className='UserFeedWrapper'>
        
        {DummyPosts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomeFeed;
