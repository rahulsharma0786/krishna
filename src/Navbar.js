import React from "react"
import { Link } from "react-router-dom";
import savi from "./image/savi.jpg"
import busbar from "./image/busbar.jpg"
import cross from "./image/cross.png"
const Navbar=()=>{
  function show(){
     

    
    document.getElementById("demo").style.display="block"
    document.getElementById("btnn1").style.display="none"
    document.getElementById("btnn2").style.display="block"
  }

  function hide(){
    document.getElementById("demo").style.display="none"
    document.getElementById("btnn2").style.display="none"
    document.getElementById("btnn1").style.display="block"
    
  }
  
  return(
<>
<nav>
  <div class="logo">
<img src={savi}/>
</div>
<ul>
<li><Link to="/" style= { { textDecoration:'none',color:"white" }} >Home</Link></li>
<li><Link to="/about" style= { { textDecoration:'none', color:"white" }}>About</Link></li>
<li><Link to="/project" style= { { textDecoration:'none',color:"white" }}>Project</Link></li>
<li><Link to="/gallery" style= { { textDecoration:'none',color:"white" }}>Gallery</Link></li>
<li><Link to="/contact" style= { { textDecoration:'none',color:"white" }}>Contact</Link></li>



</ul>
<div id="busbar">
<img src={busbar} onClick={show} id="btnn1" />
<img src={cross}  onClick={hide} id="btnn2" />
</div>

</nav>


<div id="demo">
  <ul>

  {/* <div class="logo">
<img src={savi}/>
</div> */}
  <h3><Link to="/" style= { { textDecoration:'none',color:"white" }}>Home</Link></h3>
    <h3><Link to="/about" style= { { textDecoration:'none',color:"white"}}>About</Link></h3>
    <h3><Link to="/project" style= { { textDecoration:'none',color:"white"}}>Project</Link></h3>
    <h3><Link to="/gallery" style= { { textDecoration:'none',color:"white"}}>Gallery</Link></h3>
    <h3><Link to="/contact" style= { { textDecoration:'none',color:"white"}}>Contact</Link></h3>
    

  </ul>
  



</div>




</>

    )

}


export default Navbar;
