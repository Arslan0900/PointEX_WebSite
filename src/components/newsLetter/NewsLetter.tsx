import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <div className="frame1">
            <p>Unlock the Secrets</p>
            <h3>Join Our Newsletter for Exclusive Insights!</h3>
        </div>
        <div className="frame2">
            <div className="searchbar">
                <input type="text" placeholder="Enter your Email" aria-placeholder="search"/>
            </div>
            <div className="btn">
                <p>Subscribe</p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter