import React from 'react'
import Page from './Component/Section/Page'
import Header from './Component/Section/Header'
import Nav from './Component/Section/Nav'
import LandingPage from './Component/Section/LandingPage'
import About from './Component/Section/About'
import Featured from './Component/Featured'
import Technical from './Component/Section/Technical'
import Specialized from './Component/Section/Specialized'
import Contact from './Component/Section/Contact'
import Footer from './Component/Section/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Page>
<Header>
  <Nav/>
</Header>
<LandingPage/>
<About/>
<Featured/>
<Technical/>
<Specialized/>
<Contact/>
<Footer/>
    </Page>
  )
}

export default App