import { useState } from 'react'
// import './App.css'
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';


//components
import Analytics from './components/Analytics'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/NavBar/Navbar'
import Newsletter from './components/Newsletter'
import Contacto from './components/Contactos/Contacto';

// import MapComponent from './components/Maps/MapComponent';


// import MapComponent from './components/Maps/MapComponent';
//components
// import Home from './components/Home/Home';

function App() {

  return (
    <div>
      <Router>
        <header>
          <Navbar />
        </header>
        <main className=''>
          {/* <Hero /> */}
          {/* <Contacto /> */}
          {/* <Analytics />
          <Newsletter />
          <Cards /> */}
          {/* <Footer /> */}
          {/* <Cards /> */}
          {/* <MapComponent /> */}
          {/* <Footer />  */}
          <Cards />
          {/* <MapComponent /> */}
          <Footer /> 
          <Routes>
            <Route exact path='/' element={<Hero />} />
            <Route exact path='/contacto' element={<Contacto />} />
            <Route exact path='/producto' element={<Analytics/>}/>
            <Route exact path='/soporte' element={<Cards/>}/>
            {/*
            <Route exact path='/Analytics' element={<Analytics />}/>
            <Route exact path='/Newsletter' element={<Newsletter />}/>
            <Route exact path='/Cards' element={<Cards />}/> */}
          </Routes>
          <Footer /> 
        </main>
      </Router>
    </div>
  )
}

export default App
