import Racss from './Rayek.module.css';
import React from 'react'

const Rayek = () => {
  return (
    <div>
 
  <ul className={Racss.navv}><li><h1>House Rent Offers</h1></li><li><button style={{borderRadius:"10px"}}>Home</button></li></ul>
  <div className={Racss.offers}>
    <div className={Racss.offer}>
      
      <form>
        <input type="radio" name="reaction" value="like"/> Like< br/>
        <input type="radio" name="reaction" value="dislike"/> Dislike< br/>
      </form>
      <form>
        <pre>

          <label for="comment">Leave a comment:</label>< br/>
          <textarea id={Racss.comment} name="comment" ></textarea>< br/>
          <input type="submit" value="Send"/>< br/>
        </pre>
      </form>
      <div className={Racss.comments}>
        <div className={Racss.comment}>
          <div className={Racss.commentauthor}>Amin</div>
          <div className={Racss.commentdate}>Jan 1, 2023</div>
          <div>This looks like a great deal!</div>
        </div> 
        <div className={Racss.comment}>
          <div className={Racss.commentauthor}>Ahmed</div>
          <div className={Racss.commentdate}>Jan 2, 2023</div>
          <div>I'm not sure about the location.</div>
        </div>
      </div>
      </div>
      <div className={Racss.offerinfo}>
        <div name="contact">
            <h3>Contact the renter</h3>
            <label for="name">Name:</label>< br/>
            <input type="text" id={Racss.name} name="name" />< br/>
            <label for="email">Email:</label>< br/>
            <input type="email" id={Racss.email} name="email" />< br/>
            <label for="phone">Phone:</label>< br/>
            <input type="tel" id={Racss.phone} name="phone"/>< br/>
            <label for="message">Message:</label>< br/>
            <textarea id={Racss.message} name="message" rows="5" cols="50"></textarea>< br/>
            <button type="submit">Send</button>
          
    
    </div>
    </div>
    </div>
    </div>
    


  )
}

export default Rayek;
