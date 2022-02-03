import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { PageTransition } from '@steveeeie/react-page-transition';

import TopInfo from './components/TopInfo';
import LogoSection from './components/LogoSection';

import Home from './pages/Home'
import Bonsai from './pages/Bonsai'
import Giftsets from './pages/Giftsets'
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import Subscribe from "./components/sections/Subscribe";
import Footer from './components/sections/Footer';
import Product from './pages/Product';


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <TopInfo />
        <LogoSection />

          <Routes>
            <Route path = {"/"} element = {<Home />} />
            <Route path = {"/catalog"} element = {<Catalog />} />
            <Route path = {"/catalog/:product_id"} element = {<Product />} />
            <Route path = {"/bonsai"} element = {<Bonsai />} />
            <Route path = {"/giftsets"} element = {<Giftsets />} />
            <Route path = {"/contacts"} element = {<Contacts />} />
            <Route path= "*" element = {<NotFound />} />
          </Routes>
      </div>
        <Subscribe/>
        <Footer />
    </BrowserRouter>
  )
}

export default App;
