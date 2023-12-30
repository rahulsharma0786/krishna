
import chintu from "./image/chouse.jpg"
import cons2 from "./image/cons2.jpg"
import cons3 from "./image/cons3.jpg"
import cons4 from "./image/cons4.jpg"
import { RiDoubleQuotesL } from "react-icons/ri"
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
const Project=()=>{
  return(
    <>
    <div class="project">
 <img src={chintu} height="500px" width="100%"/>
    </div>

<div class="project1">
<h1><span style={{color:"blue",borderBottom:"2px solid black"}}>Our  Projects</span> </h1>

  <div class="underproject">
    
    <div class="unprobox">
 <img src={cons2}/>
    </div>
    <div class="unprobox">
    <img src={cons2} />
    </div>
    <div class="unprobox">
    <img src={cons2} />
    </div>
  </div>

  <div class="underproject">
    <div class="unprobox">
 <img src={cons2} />
    </div>
    <div class="unprobox">
    <img src={cons2} />
    </div>
    <div class="unprobox">
    <img src={cons2} />
    </div>
  </div>
</div>


<div class="projectbox">
  <div class="prounder">
    <div class="probox">
<h1>15+</h1>
<h2>Complite Project</h2>
    </div>
    <div class="probox">
    <h1>25+</h1>
<h2>Running Project</h2>
    </div>
    <div class="probox">
    <h1>35+</h1>
<h2>Upcoming Project</h2>
    </div>
  </div>
</div>


<div class="client">
<h1>Our Clients</h1>
<div class="clientrev">

  <div class="clientbox">
    
  <div class="clientdiv"></div>
  <RiDoubleQuotesL style={{marginLeft:"-300px", color:"red"}}/>
  <p>Lorem Ipsum is dummy text of the printing and typesetting industry,typesetting industry passage and typesetting</p>
  <RiDoubleQuotesR style={{marginLeft:"280px", color:"red"}}/>
  </div>
  <div class="clientbox">
  <div class="clientdiv"></div>
  <RiDoubleQuotesL style={{marginLeft:"-300px", color:"red"}}/>
  <p>Lorem Ipsum is dummy text of the printing and typesetting industry,typesetting industry passage and typesetting</p>
  <RiDoubleQuotesR style={{marginLeft:"280px", color:"red"}}/>
  </div>
  
  <div class="clientbox">
  <div class="clientdiv"></div>
  <RiDoubleQuotesL style={{marginLeft:"-300px", color:"red"}}/>
  <p>Lorem Ipsum is dummy text of the printing and typesetting industry,typesetting industry passage and typesetting</p>
  <RiDoubleQuotesR style={{marginLeft:"280px", color:"red"}}/>
  </div>
</div>

</div>


<div class="footer" style={{marginTop:"50px"}}>
<div class="undefooter">
    <div class="innerfooter">
     <h1>Links</h1>  
     <hr size="2" color="blue" width="50px" style={{marginLeft:"110px"}}></hr>  
     <div class="work">
     <h3>Home</h3>
     <h3>AboutUs</h3>
     <h3>Project</h3>
     <h3>Gallery</h3>
     <h3>Contact</h3>
    </div>
    </div>
    <div class="innerfooter">
    <h1>My Work</h1>
    <hr size="2" color="blue" width="100px" style={{marginLeft:"80px"}}></hr> 
     <div class="work">
     <h3>Home Construction</h3>
     <h3>Building Construction</h3>
     <h3>Furniture Work</h3>
     <h3>Putti Work</h3>
     </div>
    </div>

    <div class="innerfooter">
    <h1>Projects In Colony</h1>
    <hr size="2" color="blue" width="200px" style={{marginLeft:"25px"}}></hr> 
     <div class="work">
     <h3>Shri Krishna HighwayCity</h3>
     <h3>Shri Anand Vihar</h3>
     
     </div>
    </div>


    <div class="innerfooter">
        <div class="myres">
    <h1>Contact</h1>
    <hr size="2" color="blue" width="90px" style={{marginLeft:"100px"}}></hr>
    <div style={{display:"flex",marginLeft:"100px",marginTop:"10px"}}>
    <IoMdHome style={{fontSize:"20px"}}/>   
     <h3>Shujalpur</h3>
     </div>
     <div style={{display:"flex",marginLeft:"100px",marginTop:"10px"}}>
    <IoCall style={{fontSize:"20px"}}/>   
     <h3>+919644245139</h3>
     </div>
     <div style={{display:"flex",marginLeft:"100px",marginTop:"10px"}}>
    <CgMail style={{fontSize:"25px",color:"red"}}/>   
     <h3>akshay123@gmail.com</h3>
     </div>
     
<div>
    <div style={{display:"flex",marginLeft:"100px",marginTop:"30px" }}>
        
    <FaFacebook style={{fontSize:"25px" ,color:"blue"}}/> 
    <IoLogoInstagram style={{fontSize:"25px",color:"red",marginLeft:"10px",marginRight:"10px"}}/> 
    <FaYoutube style={{fontSize:"30px",color:"red",marginTop:"-4px"}}/>
    
    </div>
</div>
</div>
    </div>
</div>
<h3 style={{color:"white",textAlign:"center"}}>@2024Copyright:Saviconstruction.com</h3>
</div>

    </>
  )
}
export default Project













// import React from "react";
// import construction from "./image/construction.jpg"
// import epq from "./image/const.jpg"

// const zoom=()=>{
//   let obj= document.getElementById("large")
  
//   obj.style.width="1480px"
//   obj.style.transitionDuration= "5s";
  
// }

// const zoom1=()=>{
//   let obj= document.getElementById("large1")
  
  
//   obj.style.width="900px"
//   obj.style.transitionDuration= "5s";
  
// }
// const Project=()=>{
// return(
//     <>
//     <div  onMouseOver={zoom} id="large">
      
//     <img src={construction} style={{width:"500px",height:"400px"}}/>
    
//     <img src={epq} className="epq"/>
//     <img src={epq} className="epq"/>
//     <img src={epq} className="epq"/>
//     </div>

//     <div  onMouseOver={zoom1} id="large1">
//    <img src={construction} style={{width:"500px",height:"400px"}}/>
//     <img src={epq} className="epq"/>
//     <img src={epq} className="epq"/>
//     <img src={epq} className="epq"/>
//     </div>
// </>


// )
// }



// export default Project