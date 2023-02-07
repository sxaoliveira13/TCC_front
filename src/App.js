import './App.css';
import * as React from 'react';
import Login from './Login/login';
import { Route, BrowserRouter } from "react-router-dom";
import PensamentoComputacional from './PensamentoComputacional';




function App() {

  return (
      // <BrowserRouter>
      //      <Route component = { PensamentoComputacional }  path="/PensamentoComputacional" />
      //      <Route component = { Login }  path="/login" />
      //      <Route component = { Header }  path="/header" />

      //  </BrowserRouter>
<div>
        <PensamentoComputacional/>
  </div>

      
  )
 
}

export default App;
