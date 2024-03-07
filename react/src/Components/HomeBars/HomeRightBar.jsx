import React from 'react'
import "./HomeRightBar.css"

const HomeRightBar = () => {
  return (
    <div className='RightBar'>
      <div className='RightBarWrapper'>
        <div className='TrendBox'>
          <div className='Trend'><h2>Trends</h2></div>
          <div className='TrendTopic'>
            <div className='TrendTitle'>Something</div>
            <div className='TrendLikes'>11 Likes</div>
          </div>
          <div className='TrendTopic'>
            <div className='TrendTitle'>Something</div>
            <div className='TrendLikes'>11 Likes</div>
          </div>
          <div className='TrendTopic'>
            <div className='TrendTitle'>Something</div>
            <div className='TrendLikes'>11 Likes</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeRightBar