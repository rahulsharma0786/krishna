import React from "react";
import axios from "axios"
import {  useState } from "react"
import const1 from "./image/const.jpg"
import { IoMdHome } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
const Contact=()=>{

   const[input,setInput]=useState({})



const Handleinput=(e)=>{
const name=e.target.name
const value=e.target.value

setInput(values=>({...values,[name]:value}))


}

const inputsave=()=>{
    window.location.reload(false); 
axios.post("http://localhost:5000/stusave",input).then(()=>{
    console.log("data save")
    
    
})
}
return(
   <>
   <div class="abouttop">
<div class="aboutinner">
<img src={const1}  />
<h1>Contact</h1>

</div>
</div>



<div class="enqiry">
   
<div class="innerenq">
<h1 style={{color:"blue",padding:"1px"}}>Contact Us</h1>
<hr size="2" color="red" width="100px"></hr>
   <div class="underfrom">
<label>Name:<input type="text" placeholder="Enter your name" name="name" value={input.name}  onChange={Handleinput}/></label>
<label>Email:<input type="text" placeholder="Enter your email" name="email" value={input.email}  onChange={Handleinput}/></label>
<label>Address:<input type="text" placeholder="Enter your address" name="adddress" value={input.adddress}  onChange={Handleinput}/></label>
<label>Contactno:<input type="text" placeholder="Enter your conatct" name="contact" value={input.contact}  onChange={Handleinput}/></label>
<button onClick={inputsave}>Register</button>
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