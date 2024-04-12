import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/js/dist/collapse';
import Nav from './components/navbar/Nav';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
       <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
