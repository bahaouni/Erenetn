import Recss from './Reviews.module.css';
import React from 'react'

const Reviews = () => {
  return (
    

  <div className={Recss.reviewbox} id="revv">
     <div id={Recss.reviewstxt}> users reviews </div>
    <div className={Recss.cloudshape}></div>
    <div className={Recss.usercomment}>
      "I absolutely loved this website! It exceeded my expectations and I will definitely recommend it to my friends."
    </div>
    <div className={Recss.userinfo}>
      <span className={Recss.username}>james Dan</span>
      <span className={Recss.date}>october 22, 2022</span>
    </div>
    <div className={Recss.cloudshape}></div>
    <div className={Recss.usercomment}>
      "this service made accomodation a lot  easier for me,I highly recommend this website to anyone looking for a comfortable and convenient place to stay. "
    </div>
    <div className={Recss.userinfo}>
      <span className={Recss.username}>mike rich</span>
      <span className={Recss.date}>May 5, 2022</span>
    </div>
    <div className={Recss.cloudshape}></div>
    <div className={Recss.usercomment}>
    "I recently rented a house and was extremely satisfied with my experience. The house was clean, well-maintained, and in a great location. The owner was responsive and helpful throughout the rental process. "
    </div>
    <div className={Recss.userinfo}>
      <span className={Recss.username}>Jane cale</span>
      <span className={Recss.date}>june 15, 2022</span>
    </div>
  
    
  </div>
  
  
  )
}

export default Reviews;