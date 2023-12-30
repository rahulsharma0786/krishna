import React from "react";
import chouse from "./image/chouse.jpg"
import chintuhouse from "./image/chintuhouse.jpg"
import krishna from "./image/krishna.jpg"
import colony from "./image/colony.jpg"
import park from "./image/park.jpg"
import cons7 from "./image/cons7.jpg"
import cons8 from "./image/cons8.jpg"
import cons9 from "./image/cons9.jpg"
import video1 from "./video/krishnavideo.mp4"
import house from "./image/houselogo.jpg"
import { IoMdHome } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const Contact=()=>{
return(
    <>
<div class="project">
 <img src={krishna} height="500px" width="100%"/>
   </div>

   <div class="ourrecpro">

<div class="underourepro">
    
<div class="topimg">
    <h1 style={{color:"red"}}>RECENT PROJECT</h1>
    <hr size="1px" color="blue" width="150px"></hr>
<img src={park}  style={{borderRadius:"10%"}}/>  
</div>

    <div class="ourrecprobox">
    <div class="under" >
    <div class="recbox">
    <img src={cons7} height="250px" width="300px" style={{borderRadius:"10%"}} /> 
    </div>
    <div class="recbox">
    <img src={cons8} height="250px" width="300px" style={{borderRadius:"10%"}} /> 
    </div>
    </div>
    <div class="under">
    <div class="recbox">
    <img src={cons9} height="250px" width="300px" style={{borderRadius:"10%"}} /> 
    </div>
    <div class="recbox">
    <img src={cons8} height="250px" width="300px" style={{borderRadius:"10%"}} /> 
    </div>
    </div>
    </div>
</div>
</div> 

<div class="video">
<div class="undervideo"> 
  <div class="videobox">
    <h1>Why Choose Us</h1>
    <p>Lorem Ipsum is dummy text of the printing and typesetting industry,typesetting industry passage and typesetting  by Cicero Lorem Ipsum is dummy text of the printing and typesetting industry, passage by Cicero Lorem Ipsum is dummy text of the printing and typesetting industry, passage by Cicero Lorem Ipsum is dummy text of the printing Lorem Ipsum is dummy text of the printing and typesetting industry, passage by Cicero and typesetting industry, passage by Cicero</p>
    <button>More Video</button>
    </div>  

    <div class="video1">
    <video src={video1} controls="Pause"/>
    </div>
</div>
</div>

<div class="project1">
<h1>Our <span style={{color:"green"}}> Project</span> </h1>

  <div class="underproject">
    
    <div class="unprobox">
 <img src={cons8} height="300px" width="400px"/>
    </div>
    <div class="unprobox">
    <img src={cons8} height="300px" width="400px"/>
    </div>
    <div class="unprobox">
    <img src={cons8} height="300px" width="400px"/>
    </div>
  </div>

  <div class="underproject">
    <div class="unprobox">
 <img src={cons7} height="300px" width="400px"/>
    </div>
    <div class="unprobox">
    <img src={cons8} height="300px" width="400px"/>
    </div>
    <div class="unprobox">
    <img src={cons7} height="300px" width="400px"/>
    </div>
  </div>
</div>


<div class="footer">
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



export default Contact