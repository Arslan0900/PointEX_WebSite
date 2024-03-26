import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <div className="newsLetter_frame1">
            <p>Unlock the Secrets</p>
            <h3>Join Our Newsletter for Exclusive Insights!</h3>
        </div>
        <div className="newsLetter_frame2">
            <div className="searchbar">
                <input type="text" placeholder="Enter your Email" aria-placeholder="search"/>
            </div>
            <div className="Subscription_btn">
                <p>Subscribe</p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter