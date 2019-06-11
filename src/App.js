import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className='container-fluid p-0'>
      <Router>
        <Navbar />
        <Route path='/' exact component={About} />
        <Route path='/experience' exact component={Experience} />
        <Route path='/education' exact component={Education} />
        <Route path='/skills' exact component={Skills} />
        <Route path='/portfolio' exact component={Portfolio} />
      </Router>
    </div>
  );
}

export default App;
