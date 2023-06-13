import {BrowserRouter,Route,Routes}from "react-router-dom";

import './App.css'
import Proporti from './Proporti/Proporti'
import About from './About/About'
import Home from './Home/Home'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Reviews from './Reviews/Reviews'
import Submit from './Submit/Submit'
import Login from "./Login/Login";
import Offert from "./offert/offert";
import Rayek from "./Rayek/Rayek";

const App = () => {
  return (
   <>
   
      <BrowserRouter>
         <Routes>
            <Route path="/" exact element= {<div><Header /><Home /><About /><Reviews /><Submit /><Proporti /><Footer /> </div>} />
   
            <Route path="/Login" exact element= {<Login />} />
            <Route path="/crea" exact element= {<Offert />} />
            <Route path="/s+3tunis" exact element= {<Rayek />} />
            <Route path="/s+1nabeul" exact element= {<Rayek />} />
            <Route path="/s+4tunis" exact element= {<Rayek />} />
            <Route path="/createoffer" exact element= {<Offert />} />
         </Routes>
      </BrowserRouter>
   
   </>
   )
}
       
export default App;

     
