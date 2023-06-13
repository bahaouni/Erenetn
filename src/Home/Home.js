import Homecss from './Home.module.css';
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <div className={Homecss.wa3}>
    <section class={Homecss.container} id="home" >
       
    <div class={Homecss.hometext}>
        <h1>explore<br />our perfect<br />houses</h1>
        <Link to="/Login" className={Homecss.btn} id={Homecss.aymen}>Sign Up</Link>
       
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
    </div>
     <div className={Homecss.lower}>
     <div className={Homecss.herocontainer}>
  
    <input type="text" placeholder="write your state"/>
    <input type="date" placeholder="Start date"/>
    <input type="date" placeholder="end date"/>
    <a href="/#"></a><a href="#properties"><button className={Homecss.jj} >Search</button></a>
  
</div>

    </div>
    

</section>
</div>
  )
}




export default Home;