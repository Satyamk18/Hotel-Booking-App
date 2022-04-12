import logo from './logo.svg';
import React from 'react'

import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter , Route , Link } from 'react-router-dom'
import homescreen from './screens/homescreen';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Route path='/home' exact component={homescreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
