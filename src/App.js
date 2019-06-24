import React from 'react';
import './App.css';
import MainComponent from './Components/MainComponent';
import SemNavbar from './SemanticComponents/SemNavbar';


function App() {
  return (
    <div className="App">
      <div className="customTab">
      {/* <TabContainer / */}
      {/* <MainComponent /> */}
      <SemNavbar />
      </div>
    </div>
  );
}

export default App;
