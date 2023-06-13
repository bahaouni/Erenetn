import React from 'react'
import Subcss from './Submit.module.css';

const Submit = () => {
  return (<div className={Subcss.hello}>
   
    <div className={Subcss.baha}>
    <div className={Subcss.row}> <span className={Subcss.heading}>user Rating</span>
    <span className={Subcss.fa} id={Subcss.checked}></span>
    <span className={Subcss.fa} id={Subcss.checked}></span>
    <span className={Subcss.fa} id={Subcss.checked}></span>
    <span className={Subcss.fa} id={Subcss.checked}></span>
    <span className={Subcss.fa} id={Subcss.checked}></span>
    <p>4.1 average based on 254 reviews.</p>
      <div className={Subcss.side}>
        <div>5 star</div>
      </div>
      <div className={Subcss.middle}>
        <div className={Subcss.barcontainer}>
          <div  className={Subcss.bar5}></div>
        </div>
      </div>
      <div className={Subcss.side} id={Subcss.right}>
        <div>150</div>
      </div>
      <div className={Subcss.side}>
        <div>4 star</div>
      </div>
      <div className={Subcss.middle}>
        <div className={Subcss.barcontainer}>
          <div  className={Subcss.bar4}></div>
        </div>
      </div>
      <div className={Subcss.side} id={Subcss.right}>
        <div>63</div>
      </div>
      <div className={Subcss.side}>
        <div>3 star</div>
      </div>
      <div className={Subcss.middle}>
        <div className={Subcss.barcontainer}>
          <div  className={Subcss.bar3}></div>
        </div>
      </div>
      <div className={Subcss.side} id={Subcss.right}>
        <div>15</div>
      </div>
      <div className={Subcss.side}>
        <div>2 star</div>
      </div>
      <div className={Subcss.middle}>
        <div className={Subcss.barcontainer}>
          <div  className={Subcss.bar2}></div>
        </div>
      </div>
      <div className={Subcss.side} id={Subcss.right}>
        <div>6</div>
      </div>
      <div className={Subcss.side}>
        <div>1 star</div>
      </div>
      <div className={Subcss.middle}>
        <div className={Subcss.barcontainer}>
          <div className={Subcss.bar1}></div>
        </div>
      </div>
      <div className={Subcss.side} id={Subcss.right}>
        <div>20</div>
      </div>
    </div>

    <div id={Subcss.rf}> <p id={Subcss.textr}> give us your review </p>
        
        <p className={Subcss.texto}><label for="name">name:</label></p>
                  <input type="text" id="name" placeholder='name' />  
        <p className={Subcss.texto}><label for="cmnt">comment:</label></p>
<p><textarea id="cmnt" name="story"
          rows="5" cols="33" >
</textarea></p>
<a href="sign-up.html" className={Subcss.btn}>send    </a>

        </div>
</div>
</div>
  )
}

export default Submit;