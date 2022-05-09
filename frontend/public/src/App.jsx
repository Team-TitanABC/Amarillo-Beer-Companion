import React from 'react';
import './App.css';
// Import your component on the line below and name it Bar
// import Home from './Home.js';
import Menu from './components/header.jsx';
import {BrowserRouter, Routes, Root} from 'react-router-dom'


function App() {
  return (
  
    <header>
      
      {/* Show your component using the line below. */}
      {/* These are comments */}
       <Menu />
      
    </header>

  );
}

export default App;






     /* <BrowserRouter>
   <Routes>
     <Root path="/" element={<App />} /> 
     
     document.getElementById('root')
   
   </Routes>
 </BrowserRouter> */
 
 

// 
// import logo from './logo.svg';
// import './App.css';
// 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// 
// export default App;
