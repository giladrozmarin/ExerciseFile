import React from 'react';
//import Certifications from './Certifications'
//import SignupForm from './loginPage'
//import NavbarPage from './loginPage'
import BackgroundImagePage from './Componemts/homePage'
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
