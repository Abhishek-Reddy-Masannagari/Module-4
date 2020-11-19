
import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Warningsign from './components/Warningsign'
import Mybadge from './components/Mybadge'
import fantasy from './data/fantasy'
import Singlebook from './components/Singlebook'

function App() {
  return (
    <>
   <Warningsign title="myvalue"/>
   <Mybadge title="sometext" color="dark" /> 
   <Singlebook/>
   


   </>
  );


}

export default App;
