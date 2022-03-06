import Topbar from "./components/topbar/TopBar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
/* import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials"; */
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu"
import Skills from "./components/skills/Skills";
import "./app.scss";
import { useState, useEffect } from "react";

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(()=>{
    console.log("aqui")
    var height = window.innerHeight;

      var all=document.getElementById("sections");
      console.log(all.children)
      
      document.getElementById("app").style.height=height+'px';
      document.getElementById("sections").style.height=(parseFloat(height)-70)+'px';
      document.getElementById("intro").style.height=(parseFloat(height)-70)+'px';
      document.getElementById("portfolio").style.height=(parseFloat(height)-70)+'px';
/*       document.getElementById("works").style.height=(parseFloat(height)-70)+'px';
      document.getElementById("testimonials").style.height=(parseFloat(height)-70)+'px'; */
      document.getElementById("contact").style.height=(parseFloat(height)-70)+'px';


  },[])
  
  return (
    <div className="app" id="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections" id="sections">
        <Intro />
        <Portfolio />
        <Skills/>
{/*         <Works />
        <Testimonials /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
