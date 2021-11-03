
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Home from './pages/Home';
import DetalheClima from './pages/DetalheClima';

export default function Routes() {    
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/DetalheClima" component={DetalheClima} />
      </Router> 
    );
}