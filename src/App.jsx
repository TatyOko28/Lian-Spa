// src/App.js
import React from 'react';
import Top from './Components/Top';
import Stats from './Components/Stats';
import Cards from './Components/Cards';
import Map from './Components/map';
import JoinTD from './Components/JoinTD';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Top />
      <Stats/>
      <Map/>
      <Cards/>      
      <JoinTD/>
      <Footer/>
    </div>
  );
}

export default App;
