import React from 'react'

// Import your styling from 'Bar.css' on the line below:
import './menu.css';


// Format the HTML into a React component named Bar on the lines below:
function Menu() {
  
return (
  <div className="topnav">
    
    <div id="nav-left">
      <a className="active" href="index.html">Homez</a>
      <a href="about.html">Aboutz</a>
      <a href="contact.html">Contactz</a>
    </div>
    
    <div id="nav-center">
      <img src="../images/ABC-Logo.png" width="100"/>
    </div>
    
    <div id="nav-right">
      <a href="search.html"><input type="text" placeholder="Search..." /></a>
    </div>
  
  </div>
  )  
}

export default Menu