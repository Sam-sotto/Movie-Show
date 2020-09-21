import React, { useState } from 'react';
import './App.css';
//import Header from './Components/Header';
import Nav from './Components/Nav';
import Results from './Components/Results';
import requests from './requests';
import Banner from './Components/Banner';




function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchNetflixOriginals);


  return (
    <div className="App">
          <Banner/>
            <Nav setSelectedOption={setSelectedOption} />
              <Results selectedOption={selectedOption}/> 
    </div>
  );
}



export default App;
