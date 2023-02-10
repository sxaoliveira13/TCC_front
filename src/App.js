import './App.css';
import * as React from 'react';
import Header from './Header/Header';
import MCOHeader from './Header/MCOHeader';
import Footer from './footer/footer';
import PensamentoComputacional from './pages/PensamentoComputacional';
import Login from './pages/login';
import JogosEducativos from './pages/JogosEducativos';
import Metodos from './pages/Metodos';
import { Switch, Route} from 'react-router-dom';




function App() {

  return (
      <>
      <Header/>
      <MCOHeader/>
      <main>
      <div className="container mt-2" style={{ marginTop: 40 }}>
      <Switch> 
        <Route path = "/Login" component = {Login}/>
        <Route path = "/PensamentoComputacional" component = {PensamentoComputacional}/>
        <Route path = "/JogosEducativos" component = {JogosEducativos}/>
        <Route path = "/Metodos" component = {Metodos}/>
      </Switch>
      </div>

      </main>
     </>
      
  )
 
}

export default App;
