import React, { useState, useEffect } from 'react'
import { Field, useFormikContext } from "formik";
import {TextField} from "formik-material-ui";
import Weather from "../Wrapper/Weather"
import FireAreas from "../Tables/FireAreas"
import NeighboringForces from "../Tables/NeighboringForces"
import { Card, CardContent} from '@material-ui/core'
const SafetyProgram = () => {
const { values } = useFormikContext()
const { exerciseManager, safetyManager } = values

return (
    <Card style={{backgroundColor:'#ffff99'}}> 
<p className="h1 text-center" style={{ paddingTop: "10px", fontWeight: "bold" }}>Safety Program</p>
                                          <div className= "text-center" style={{paddingTop:"20px"}}> <Field
                                            
                                            label="Order of battle"
                                            component ={TextField}
                                            name={"ofb"}
                                            type="number"

                                        />
                                        </div> 
                                        <p style={{ paddingLeft: "15px", fontWeight: "bold" , fontSize: '20px'}}>Exercise Manager: {exerciseManager}</p>
                                        <p style={{ paddingLeft: "15px", fontWeight: "bold" , fontSize: '20px'}}>Safety Manager: {safetyManager} </p>
                                        <p style={{ paddingLeft: "15px", fontWeight: "bold" , fontSize: '20px'}}>Weather:</p>



<div className="text-center" ><Weather/></div>
<FireAreas/>
<NeighboringForces/>
</Card>
)
}
export default  SafetyProgram;

