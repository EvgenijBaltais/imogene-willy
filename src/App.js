import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { PageTransition } from '@steveeeie/react-page-transition';

import TopInfo from './components/TopInfo';
import Navbar from './components/Navbar';
import MainCarousel from './components/MainCarousel';

import Home from './pages/Home'
import Bonsai from './pages/Bonsai'
import Giftsets from './pages/Giftsets'
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopInfo />
        <Navbar />
        <MainCarousel />

          <Routes>
            <Route path = {"/"} element = {<Home />} />
            <Route path = {"/catalog"} element = {<Catalog />} />
            <Route path = {"/bonsai"} element = {<Bonsai />} />
            <Route path = {"/giftsets"} element = {<Giftsets />} />
            <Route path = {"/contacts"} element = {<Contacts />} />
            <Route path= "*" element = {<NotFound />} />
          </Routes>
          
      </div>
    </BrowserRouter>
  )
}

export default App;
