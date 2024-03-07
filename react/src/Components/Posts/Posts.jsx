// Posts.jsx
import { MoreVert } from '@mui/icons-material';
import React, { useState } from 'react';
import './Posts.css';
import { Users } from '../../dummyData'; // Removed DummyPosts since it's not used

const Posts = ({ post }) => {
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className='Posts'>
      <div className='PostWrapper'>
        <div className='PostTop'>
          <div className='PostTopLeft'>
            <img
              className='PostProfileImg'
              src={Users.find((user) => user.id === post.userId)?.profilePicture}
              alt=''
            />
            <span className='PostUsername'>{Users.find((user) => user.id === post.userId)?.username}</span>
            <span className='PostDate'>{post.date}</span>
          </div>
          <div className='PostTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='PostCenter'>
          <span className='PostText'>{post.desc}</span>
          <img className='PostImg' src={post.photo} alt='' />
        </div>
        <div className='PostBottom'>
          <div className='PostBottomLeft'>
            <img
              className='LikeIcon'
              src='/Assets/like.png'
              onClick={likeHandler}
              alt=''
            />
            <img
              className='LikeIcon'
              src='/Assets/heart.png'
              onClick={likeHandler}
              alt=''
            />
            <span className='PostLikeCounter'>{like} people liked it</span>
          </div>
          <div className='PostBottomRight'>
            <span className='PostCommentText'>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
