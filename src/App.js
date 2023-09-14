// import logo from './logo.svg';
// import './App.css';

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

// export default App;




import React from 'react';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import AboutPizza from './Components/AboutPizza';
import PizzaTypes from './Components/PizzaTypes';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div>
      < Navbar />
      < Carousel />
      < AboutPizza />
      < PizzaTypes />
      < Footer />
    </div>
  )
};


export default App;



// import React from 'react';
// import Navbar from './Components/Navbar';
// import Carousel from './Components/Carousel';
// import AboutPizza from './Components/AboutPizza';
// import PizzaTypes from './Components/PizzaTypes';
// import Items from './Components/Items';
// import Footer from './Components/Footer';


// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         < Navbar />
//         < Carousel />
//         < AboutPizza />
//         < PizzaTypes /> 
//         < Footer />
//       </div>
//     )
//   }
// };


// export default App;

