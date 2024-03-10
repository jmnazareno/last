import React from 'react'
import "../Pages/NewHomepage/Tryy.css";



export default function PostsListItem({posts}) {
  return (
    <div className='body Ig'>
        <img
            src={posts.image_url}
            alt={posts.title}
            className='IDK'
        />
        <h4 className='Bold letter?'>{posts.title}</h4>
        <div
            dangerouslySetInnerHTML={{__html: posts.description}}
            className='idk again'>
        </div>


        <div className="feed">
        <div className="head">
          <div className="user">
            <div className="profile-photo">
              <img src="./Assets/images/profile-2.jpg" alt="Profile" />
            </div>
            <div className="info">
              <h3>ACN PHILIPPINES</h3>
              <small>Makati, 24 HOURS AGO</small>
            </div>
          </div>
          <span className="edit">
            <i className="uil uil-ellipsis-h"></i>
          </span>
        </div>

        <div className="photo">
          <img src={posts.image_url} alt={posts.title} />
        </div>
        <div className="action-button">
          <div className="interaction-buttons">
            <span><i className="uil uil-heart"></i></span>
            <span><i className="uil uil-comment-dots"></i></span>
            <span><i className="uil uil-share"></i></span>
          </div>
          <div className="bookmark">
            <span><i className="uil uil-bookmark"></i></span>
          </div>
        </div>

        <div className="caption">
          <p dangerouslySetInnerHTML={{ __html: survey.description }}><b>{posts.title}</b> </p>
        </div>
      </div>
    </div>

  )
}
