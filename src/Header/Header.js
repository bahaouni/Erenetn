import { Link } from 'react-router-dom'

import HeadCss from './Header.module.css'
const header = () => {
  return (
    <div className={HeadCss.wa2}>    
      <header>
        <div className={HeadCss.nav}>
            <input type="checkbox" name="" id={HeadCss.menu}/>
            <label for="menu" className={HeadCss.bx} id={HeadCss.menuicon}></label>
            <ul className={HeadCss.navbar}>
            <li><img src="erentilog3.png" alt="" id="photonav"></img></li>

              <li> <a href="/#"></a><a href="#home"> Home</a></li>
              <li><a href="/#"></a><a href="#properties">Properties</a></li>
              <a href="#features"></a>
              <li><a href="/#"></a><a href="#revv">Reviews</a></li>
              <li><a href="/#"></a><a href="#about">about us</a></li>
              </ul>
            <Link to="/Login" className={HeadCss.btn}>Log In</Link>
           </div>

      </header>
    </div>
  )
}

export default header