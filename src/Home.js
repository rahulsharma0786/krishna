import akshypic from "./image/akshay.jpeg"
import back from "./image/back.jpg"
import building from "./image/building.jpg"
import cons1 from "./image/cons1.jpg"
import cons2 from "./image/cons2.jpg"
import cons3 from "./image/cons3.jpg"
import cons4 from "./image/cons4.jpg"
import { TbBuildingCommunity } from "react-icons/tb";
import video1 from "./video/krishnavideo.mp4"
import { FaHouse } from "react-icons/fa6";
import { RiBuilding2Fill } from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";
import { TbBuildingFactory } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
const Home=()=>{
    return(
        <>
<div class="custom-shape">
<img src={akshypic} height="550px" width="100%" />
<div class="contain">
<h1>We Deliver</h1>
<h2>Landmark Projects</h2>
<p>Lorem Ipsum is dummy text of the printing and typesetting industry, passage by Cicero</p>
<button>Explore More</button>
</div>
</div>      

<div class="tringle">
<img src={back} width="100%" />
</div>


<div class="content">
<div class="contentineer">
<div class="box">
<RiBuilding2Fill style={{fontSize:"280px" ,color:"orangered",marginTop:"30px" ,marginLeft:"200px"}} />
</div>


<div class="box1">
<h1>Who <span style={{color:"orange"}}>We Are</span></h1>   
<hr size="5px" color="orange" width="50px"/>
<h2>We Deliver Landmark Project</h2>
<p>Lorem Ipsum is dummy text of the printing and typesetting industry,Lorem Ipsum is dummy text of the printing and typesetting industry, passage by CiceroLorem Ipsum is dummy text of the printing and typesetting industry, passage by Cicero passage by Cicero Lorem Ipsum is dummy text of the printing and typesetting industry, passage by Cicero</p>
<button>Learn More</button>
</div>
</div>
</div>


<div class="ourservices">
    <div class="ourunder">
        <h1>Our Services</h1>
        <p>Lorem Ipsum is dummy text of the printing and typesetting industry</p>
    </div>
<div class="services">
<div class="servicesbox">
    <div class="serbox">
    <FaHouse style={{fontSize:"55px",padding:"8px"}}/>
    </div>
    <h3>Residential <br/> ReModels</h3>
    <p>Lorem Ipsum is dummy text of the printing and typesetting industry, passage by Cicero</p>
    
</div>
<div class="servicesbox">
<div class="serbox">
<FaRegBuilding style={{fontSize:"55px",padding:"10px"}}/>
</div>
<h3>Building <br/> Construction</h3>
<p>Lorem Ipsum is dummy text of the printing and typesetting industry, passage by Cicero</p>
</div>
<div class="servicesbox">
<div class="serbox">
    <TbBuildingFactory style={{fontSize:"55px",padding:"10px"}}/>
</div>
<h3>Residential <br/> ReModels</h3>
<p>Lorem Ipsum is dummy text of the printing and typesetting industry, passage by Cicero</p>
</div>

</div>
</div>



<div class="ourrecpro">

<div class="underourepro">
    
<div class="topimg">
    <h1 style={{color:"red"}}>RECENT PROJECT</h1>
    <hr size="1px" color="blue" width="150px"></hr>
<img src={akshypic} />  
</div>

    <div class="ourrecprobox">
    <div class="under" >
    <div class="recbox">
    <img src={cons1} height="250px" width="300px" /> 
    </div>
    <div class="recbox">
    <img src={cons2} height="250px" width="300px" /> 
    </div>
    </div>
    <div class="under">
    <div class="recbox">
    <img src={cons3} height="250px" width="300px" /> 
    </div>
    <div class="recbox">
    <img src={cons4} height="250px" width="300px" /> 
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


{/* <div class="work">
<div class="workplan">
    <div class="mydiv">
        <h1>Mywork</h1>
    </div>
    <div class="mydiv1">
    <div>
    <img src={cons1} height="250px" width="295px" />
    </div>
    <div>
    <img src={cons1} height="250px" width="295px" style={{marginLeft:"5px",marginRight:"5px"}}/>
    </div>
    <div>
    <img src={cons1} height="250px" width="295px" />
    </div>

    </div>
</div>

</div> */}





{/* <div class="last">
<div class="last1">
<div class="lastbox">
<h1>My Work</h1>

</div>
<div class="lastboxx">
    <div style={{height:"210px", width:"400px",marginTop:"50px",marginLeft :"20px" }}>
<div class="lastbox1">
<img src={cons3} /> 
<h3>Floring</h3>
</div>
</div>
<div style={{height:"210px", width:"400px" ,marginBottom:"5px", marginLeft :"20px" }}>
<div class="lastbox1">
<img src={cons3} /> 
<h3>Floring</h3>
</div>
</div>
<div style={{height:"210px", width:"400px",marginLeft :"20px"}}>
<div class="lastbox1">
<img src={cons3} /> 
<h3>Floring</h3>
</div>
</div>
</div>
</div>

</div>  */}

 
<div class="footer" style={{marginTop:"5px"}}>
<div class="undefooter">
    <div class="innerfooter">
     <h1>Links</h1>  
     <hr size="2" color="blue" width="50px" style={{marginLeft:"110px"}}></hr>  
     <div class="mywork">
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
     <div class="mywork">
     <h3>Home Construction</h3>
     <h3>Building Construction</h3>
     <h3>Furniture Work</h3>
     <h3>Putti Work</h3>
     </div>
    </div>

    <div class="innerfooter">
    <h1>Projects In Colony</h1>
    <hr size="2" color="blue" width="200px" style={{marginLeft:"25px"}}></hr> 
     <div class="mywork">
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

export default Home




















// import React from "react";

// import { FaYoutube } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaCity } from "react-icons/fa";


// import ball from "./image/ball.jpg"
// import epq from "./image/const.jpg"
// import akshay from "./image/akshay.jpeg"
// import wave from "./image/wave9.png"
// import chintu from "./image/chintuhouse.jpg"
// import cons1 from "./image/cons1.jpg"
// import cons2 from "./image/cons2.jpg"
// import cons3 from "./image/cons3.jpg"
// import cons4 from "./image/cons4.jpg"
// import cons5 from "./image/cons5.jpg"
// import cons6 from "./image/cons6.jpg"
// import cons7 from "./image/cons7.jpg"
// import cons8 from "./image/cons8.jpg"
// import cons9 from "./image/cons9.jpg"
// import video1 from "./video/krishnavideo.mp4"

// const addimage=()=>{
//     window.location.href="Services/item2"
// }

// const move=()=>{
//     window.location.href="Video/"
// }

// const project=()=>{
//     window.location.href="Project/"
// }
// const Home=()=>{
// return(
//     <>


//    <div style={{ height:"600px",width:"100%"}}>
//     <img src={akshay}  className="akshayimg"/>
    
//     <div className="mywave" >
//     <img src={wave} className="imgwave"/>
//     <h1>Your Dreams Comes Be True</h1>
//      <button>Click</button>

//     </div>

// <h1>hello</h1>
//     </div>
//     <div style={{display:"flex",marginTop:"-50px",position:"absolute",marginLeft:"650px"}}>
// <div style={{color:"white",fontSize:"30px"}}><FaCity/>
// </div>
// <div style={{color:"blue",fontSize:"25px",marginLeft:"15px"}}><FaFacebook/>
// </div>
// <div style={{color:"red",fontSize:"25px",marginLeft:"15px"}}><FaInstagram/>
// </div>
// </div>



// <div className="cardmain">
// <div className="box">
// <div className="card1">
//   <h1>hello</h1>
// </div>
// <div className="cardA">
// <button style={{height:"40px",width:"80px",borderRadius:"50%",backgroundColor:"orange",position:"absolute",marginTop:"250px",marginLeft:"85px" }}>Click</button>
// </div>
// </div>

// <div className="box1">
// <div className="card2">
//   <h1>hello</h1>
// </div>
// <div className="cardB">
// <button style={{height:"40px",width:"80px",borderRadius:"50%",backgroundColor:"#E75480",position:"absolute",marginTop:"250px",marginLeft:"85px" }}>Click</button>
// </div>
// </div>

// <div className="box2">
// <div className="card3">
//   <h1>hello</h1>
// </div>
// <div className="cardC">
// <button style={{height:"40px",width:"80px",borderRadius:"50%",backgroundColor:"palegreen",position:"absolute",marginTop:"250px",marginLeft:"85px" }}>Click</button>
// </div>
// </div>
// </div>



// <div style={{height:"400px",width:"100%", backgroundColor:"skyblue",marginTop:"50px",borderBottomLeftRadius:"10%",borderTopRightRadius:"10%"}}>
// <div style={{display:"flex",justifyContent:"center"}}>

// <div style={{height:"400px",width:"400px" ,paddingTop:"50px"}}>
// <p style={{color:"white",textAlign:"justify"}}>o generate, customize and use Lorem Ipsum with this online tool and explore its origins and meaning.its origins and meaning.</p>    
// <h1 style={{color:"blue"}}>More videos</h1>
// <div style={{display:"flex"}}>
// <div style={{color:"red",fontSize:"30px"}}><FaYoutube/>
// </div>
// <div style={{color:"blue",fontSize:"25px",marginLeft:"15px"}}><FaFacebook/>
// </div>
// <div style={{color:"red",fontSize:"25px",marginLeft:"15px"}}><FaInstagram/>
// </div>
// </div>
// </div>
// <div style={{height:"350px",width:"500px",paddingTop:"20px",marginLeft:"20px"}}>
//     <img src={cons7} style={{height:"350px",width:"500px",borderBottomLeftRadius:"20%",borderTopRightRadius:"20%",boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)",transition: "0.3s"}}/>
// </div>
// </div>
// </div>




// <div className="servicebox">
// <div className="myimage" >
//  <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>

// <div style={{height:"400px",width:"500px"}}>
// <div className="the" >
//     <img src={epq} />

// </div>
// <div style={{height:"100px",width:"400px"}}>
//     <h1 style={{color:"white"}}>AboutUs</h1>
// <p style={{color:"white"}}>Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing</p>
// <button style={{height:"50px", width:"100px",borderRadius:"50px",backgroundColor:"white",marginTop:"-10px"}}>More</button>
// </div>
// </div>



// </div>

//     </div>
    
//     </div>


//     <div className="servicebox">
// <div className="myimage1" >
//  <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>

// <div style={{height:"100px",width:"400px"}}>
//     <h1 style={{color:"blue"}}>AboutUs</h1>
// <p style={{color:"purple"}}>Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing</p>
// <button style={{height:"50px", width:"100px",borderRadius:"50px",backgroundColor:"purple",marginTop:"-10px"}}>More</button>
// </div>
// </div>

// <div style={{height:"400px",width:"500px"}}>
// <div className="the1" >
//     <img src={epq} className="circle"/>

// </div>

// </div>

//     </div>
    
//     </div>


    


 

// <div style={{marginTop:"100px",height:"auto",width:"100%"}} >

//   <h1 style={{textAlign:"center"}}>My Work</h1>
// <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap" }}>
// <div style={{height:"300px", width:"400px",borderRadius:"20px"}}>
// <img src={cons1} style={{height:"300px", width:"400px",borderRadius:"20px"}}/>
// </div>

// <div style={{height:"300px", width:"400px" ,borderRadius:"20px",marginLeft:"15px",marginRight:"15px" }}>
// <img src={cons2} style={{height:"300px", width:"400px" ,borderRadius:"20px" }}/>
// </div>
// <div style={{height:"300px", width:"400px",borderRadius:"20px"}}>
// <img src={cons3} style={{height:"300px", width:"400px",borderRadius:"20px"}}/>
// </div>
// </div>

// <div style={{display:"flex", justifyContent:"center",marginTop:"50px" }}>
// <div style={{height:"300px", width:"400px",borderRadius:"20px"}}>
// <img src={cons4} style={{height:"300px", width:"400px",borderRadius:"20px"}}/>
// </div>

// <div style={{height:"300px", width:"400px" ,borderRadius:"20px",marginLeft:"15px",marginRight:"15px" }}>
// <img src={cons5} style={{height:"300px", width:"400px" ,borderRadius:"20px" }}/>
// </div>

// <div style={{height:"300px", width:"400px",borderRadius:"20px"}}>
// <img src={cons6} style={{height:"300px", width:"400px",borderRadius:"20px"}}/>
// </div>

// </div>

// </div>

// <div style={{display:"flex",marginLeft:"1050px"}}>
//     <div>
// <h1 style={{color:"blue"}}>View Project</h1>
// </div>
// <div style={{marginTop:"20px",marginLeft:"10px"}}>
// <button style={{height:"50px",width:"100px",background:"orange",color:"white",borderRadius:"30px"}} onClick={project}> Click</button>
// </div>
// </div>




// <div style={{height:"400px",width:"100%", backgroundColor:"black",marginTop:"100px"}}>
// <div style={{display:"flex",justifyContent:"center"}}>

// <div style={{height:"400px",width:"400px" ,paddingTop:"50px"}}>
// <p style={{color:"white",textAlign:"justify"}}>Lorem Ipsum is a filler text that is used to fill the space between the elements of a web page or a document. Learn how to generate, customize and use Lorem Ipsum with this online tool and explore Lorem Ipsum is a filler text that is used to fill the space between the elements of a web page or a document. Learn how to generate, customize and use Lorem Ipsum with this online tool and explore its origins and meaning.its origins and meaning.</p>    
// <div style={{display:"flex"}}>
//     <div>
// <h1 style={{color:"blue"}}>More videos</h1>
// </div>
// <div style={{marginTop:"30px",marginLeft:"10px"}}>
// <button style={{height:"40px",width:"80px",background:"purple",color:"white",borderRadius:"20px"}} onClick={move}> Click</button>
// </div>
// </div>
// <div style={{display:"flex"}}>
// <div style={{color:"red",fontSize:"30px"}}><FaYoutube/>
// </div>
// <div style={{color:"blue",fontSize:"25px",marginLeft:"15px"}}><FaFacebook/>
// </div>
// <div style={{color:"red",fontSize:"25px",marginLeft:"15px"}}><FaInstagram/>
// </div>
// </div>
// </div>
// <div style={{height:"350px",width:"500px",paddingTop:"20px",marginLeft:"20px"}}>
// <video src={video1} controls="Pause"  style={{borderRadius:"20px",height:"350px",width:"500px"}} />    
// </div>
// </div>
// </div>



























//     </>
// )

// }

// export default Home