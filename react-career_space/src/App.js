import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Home/>
        <Footer/>
        {/* add react routes here */}
        
      </header>
    </div>
  );
}

export default App;
