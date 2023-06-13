import Aboutcss from './About.module.css'

const About = () => {
  return (
    <div className={Aboutcss.wa1}>
    <section className={Aboutcss.container} id="about">
    <div className={Aboutcss.aboutimg}>
     <img src="finaltof.png" alt='aymen'></img></div>
    <div className={Aboutcss.abouttext}>
        <span id={Aboutcss.ab}>About Us:</span>
        <h2 id={Aboutcss.tgoal}>Our <em>goal</em></h2>
        <p>our mission is to help students find accommodation easily  </p>
        <h2 id={Aboutcss.tgoal}>who we are</h2>
        <p>we are a team of three engineering students working hard to achieve our goal</p>
        <h2 id={Aboutcss.tgoal}>Our story</h2>
        <p> The idea of our project started by identifying the problems of students and the most common problem was housing that's why we started this project with the hope that we will help solve this problem
              </p>
        <a href="#" className={Aboutcss.btn} id={Aboutcss.tbtn}><a href="#home" style={{textDecoration:"none", color:"white"}}>Learn More</a></a>
    </div>
</section>
</div>
  )
}
export default About;