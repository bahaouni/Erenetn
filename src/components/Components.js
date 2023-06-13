import './Components.css'
import pop1 from '../images/1.jpg'

const Components = (props) => {
  return (
    <div class="box">
    <img src={props.img} alt=""/>
    <h3>{props.price}</h3>
    <div class="content">
        <div class="text">
            <h3>{props.place}</h3>
            <p>La Goulette</p>
        </div>
        <div class="icon">
            <i class="bx bx-bed"><span>100 m²</span></i>
            <i class="bx bx-bath"><span>s+3 meuble</span></i>
        </div>
    </div>
</div>

  )
}

export default Components
