import React from 'react'
import {BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import Header from './components/header';
import About from './pages/about';
import Home from './pages/home';
import NewPerson from './pages/newperson';
import Persons from './pages/persons';
import './App.css'
import OnePerson from './pages/onePerson';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
      </div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/persons' element={<Persons />}/>
          <Route path='/persons/:id' element={<OnePerson />}/>
          <Route path='/newpersons' element={<NewPerson />}/>
        </Routes>
    </Router>
  );
}

export default App;
