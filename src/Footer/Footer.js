import Footcss from './footer.module.css';
const Footer = () => {
  return (
<>
            <h1 className={Footcss.a}>Have Question in mind?<br/>Let us help you</h1>
            <br/>
            <br/>
            <form>
                <div className={Footcss.letter}>
                    <label htmlFor="mail"></label>
                    <input className={Footcss.mail} type="email" name="mail" id={Footcss.mail} placeholder="youremail@mail.com" required/><br/>
                    <textarea name="text" placeholder="Your Question" required ></textarea><br/>
                    <input type="submit" value="send" className={Footcss.btnn} />
                </div>
            </form>
            <section className={Footcss.footerr}>
                <div className={Footcss.foot}>
                    <div className={Footcss.erentn}>
                        <h1>Erentn</h1>
                    </div>
                    <div className={Footcss.local}>
                        <h3>Locations</h3>
                        <h5>Sousse</h5>
                        <h5>Monastir</h5>
                        <h5>Tunis</h5>
                    </div>
                    <div className={Footcss.contact}>
                        <h1>contact</h1>
                        <p>+216 51 645 751</p>
                        <p>+216 71 646 518</p>
                        <p>mo7sen.tounsi@gmail.com</p>
                    </div>
                </div>
            </section>
            
        </>
  )
}

export default Footer
