import React from "react";
import {Switch,Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home"
import About from "./About"
import Gallery from "./Gallery";
import Project from "./Project";
 import Contact from "./Contact"

 import { IoReorderThreeSharp } from "react-icons/io5";






const App=()=>{
    return(
        <>
        <Navbar/>
    <Switch>

    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/project" component={Project}/>
    <Route exact path="/gallery" component={Gallery}/>
    <Route exact path="/contact" component={Contact}/>
    
    
    
    
    </Switch>
    </>
    )
}
export default App;






