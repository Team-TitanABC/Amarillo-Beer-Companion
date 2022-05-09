import React from 'react'

// Import your styling from 'Bar.css' on the line below:
import './menu.css';


// Format the HTML into a React component named Bar on the lines below:
function Menu() {
  
return (
  <div class="topnav">
      <a class="active" href="#home">Homez</a>
      <a href="#contact">Contactz</a>
      <a href="#about">Aboutz</a>
      <img src="images/ABC-Logo.png" width="100"></img>

      <input type="text" placeholder="Search..." />
      <a href="#signup">Sign Up</a>
      <a href="#login">Login</a>
    </div>
)
}

// Export your component on the line below:
export default Menu