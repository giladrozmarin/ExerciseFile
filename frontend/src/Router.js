import React from "react";
import Stepper from "./Componemts/Stepper" ;
import BackgroundImagePage from './Componemts/homePage'




const routes = {
  "/stepper": () => <Stepper />,
  "/Home": () => <BackgroundImagePage />,

};

export default routes;