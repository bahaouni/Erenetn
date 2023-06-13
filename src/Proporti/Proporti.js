import Procss from './Proporti.module.css';
import pop1 from '../images/1.jpg'
import pop2 from '../images/2.jpg'
import pop3 from '../images/3.jpg'
import pop4 from '../images/4.jpg'
import pop5 from '../images/5.jpg'
import pop6 from '../images/6.jpg'
import Components from '../components/Components'
import {Link} from "react-router-dom";
const Proporti = () => {
  return (
    <div className={Procss.wa4} id='features'>
    <section class="properties container" id="properties">
    <div class={Procss.heading}>
        <span >Recent</span>

        <h2>Our Featured Properties</h2>
        <p></p>
    </div>
    <div class="properties-container container">
       
    <Link to="/s+4tunis" style={{textDecoration : "none", color : "black"}} ><Components img ={pop1} price='900Dt' place='Tunis' /></Link>
      
      <Link to="/s+3tunis" style={{textDecoration : "none", color : "black"}} >
            <div class="box">
                <img src={pop2} alt=""/>
                <h3>500 DT</h3>
                <div class="content">
                    <div class="text">
                        <h3> Nabeul</h3>
                        <p>AFH Mrezga</p>
                    </div>
                    <div class="icon">
                        <i class="bx bx-bed"><span>s+1</span></i>
                        <i class="bx bx-bath"><span>meublé</span></i>
                    </div>
                </div>
            </div>
        </Link>
        <Link to="/s+1nabeul" style={{textDecoration : "none", color : "black"}}>
            <div class="box">
                <img src={pop3} alt=""/>
                <h3>400DT</h3>
                <div class="content">
                    <div class="text">
                        <h3>Sousse</h3>
                        <p>Sousse Ville</p>
                    </div>
                    <div class="icon">
                        <i class="bx bx-bed"><span>s+1</span></i>
                        <i class="bx bx-bath"><span>meublé</span></i>
                    </div>
                </div>
            </div>
        </Link>
        <Link to="/s+1nabeul" style={{textDecoration : "none", color : "black"}}>
            <div class="box">
                <img src={pop4}alt=""/>
                <h3>700DT</h3>
                <div class="content">
                    <div class="text">
                        <h3>Tunis</h3>
                        <p>Ariana</p>
                    </div>
                    <div class="icon">
                        <i class="bx bx-bed"><span>s+2</span></i>
                        <i class="bx bx-bath"><span>meublé</span></i>
                    </div>
                </div>

        </div>
        </Link>
        
        <Link to="/s+1nabeul" style={{textDecoration : "none", color : "black"}}>
            <div class="box">
                <img src={pop5} alt=""/>
                <h3>450DT</h3>
                <div class="content">
                    <div class="text">
                        <h3>Sousse</h3>
                        <p>Sahloul</p>
                    </div>
                    <div class="icon">
                        <i class="bx bx-bed"><span>s+2</span></i>
                        <i class="bx bx-bath"><span>meublé</span></i>
                    </div>
                </div>
            </div>
            </Link>
            <Link to="/s+1nabeul" style={{textDecoration : "none", color : "black"}}>
        <div class="box">
            <img src={pop6} alt=""/>
            <h3>500DT</h3>
            <div class="content">
                <div class="text">
                    <h3>Mahdia</h3>
                    <p>Mahdia</p>
                </div>
                <div class="icon">
                    <i class="bx bx-bed"><span>s+2</span></i>
                    <i class="bx bx-bath"><span>meublé</span></i>
                </div>
            </div>
        </div></Link>
    </div>
    <section class="sales container" id="sales">
        
        <div class="box">
            
            <Link to="/createoffer" style={{textDecoration:"none", color:"black",weight:"900",fontFamily:"Gill Sans"}}> <h2> Create an offer</h2><p>Are you a homeowner looking to rent out your property? We have the perfect solution for you! Our website offers an easy and efficient way to list your house for rent. Our user-friendly platform allows you to create a listing for your property in just a few simple steps.</p></Link>
            
        </div>
        </section>
</section>
</div>
        )
        }

        export default Proporti;
      
