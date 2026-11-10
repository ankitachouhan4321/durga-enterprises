import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import SafetyProducts from "./pages/categories/SafetyProducts";
import MIGTIGTorches from "./pages/categories/MIGTIGTorches";
import GasCuttersPUGCuttingMachines from "./pages/categories/GasCuttersPUGCuttingMachines";
import WeldingAccessoriesRegulators from "./pages/categories/WeldingAccessoriesRegulators";
import BrassParts from "./pages/categories/BrassParts";



const App = () => {
  return (
    <>


      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/products/safety-products" element={<SafetyProducts />}/>
        <Route path="/products/mig-tig-torches" element={<MIGTIGTorches />} />
        <Route path="/products/gas-cutters-pug-cutting-Mmchines" element={<GasCuttersPUGCuttingMachines />} />
        <Route path="/products/welding-accessories-regulators" element={<WeldingAccessoriesRegulators />} />
        <Route path="/products/brass-parts" element={<BrassParts />} />
        

      </Routes>

      <Footer />



    </>
  )
}

export default App


// https://preview.themeforest.net/item/dustrial-factory-industrial-html-template/full_screen_preview/22953802