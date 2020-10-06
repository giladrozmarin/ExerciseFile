import React from 'react';
//import Certifications from './Certifications'
//import SignupForm from './loginPage'
//import NavbarPage from './loginPage'
import BackgroundImagePage from './Componemts/homePage'
import SoForm from './Componemts/SoForm'
import CellEditable from "./Tables/CellEditable.js"
import Weather from "./Wrapper/Weather"
import NeighboringForces from "./Tables/NeighboringForces.js"
import Preparation from  "./Componemts/Preparation"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import stepper from "./Componemts/Stepper" 


function App() {
  return (

    <div className="App">
      <header className="This is a KBS for exercise management ">
      </header>
      <Router>
        <Switch>
          <Route exact path="/stepper" component={stepper} />
          <Route exact path="/" component={BackgroundImagePage} />
        </Switch>
      </Router>
     
     {/* <LoginPage  Weather/> <CertificationsBackgroundImagePage />*/} 
      
    </div>
  )
}

export default App;
