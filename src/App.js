import React, { Component } from 'react';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Accounts from './pages/accounts/Accounts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Head from './pages/accounts/Head';
const App = () => {

 
  return (
    <>
    <Router> 
      <Header/>
      <SideBar/>
      {/* <Home/> */}
      
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/accounts" component={Head} />
          <Route path="/accounts/head" component={Head} />
          <Route path="/accounts/accounts" component={Accounts} />
          </Switch>
          <Footer/>
     </Router>
    </>
  )
}

export default App

