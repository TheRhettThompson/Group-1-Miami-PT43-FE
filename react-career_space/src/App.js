import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import Landing from './views/landing';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {/* add react routes here*/}
        <Main/>
        <Footer/>
        
     
        
      </header>
    </div>
  );
}

export default App;
