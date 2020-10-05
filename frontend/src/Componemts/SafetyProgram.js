import React, { useState, useEffect } from 'react'
import { Field, useFormikContext } from "formik";
import {TextField} from "formik-material-ui";
import Weather from "../Wrapper/Weather"
import FireAreas from "../Tables/FireAreas"
import NeighboringForces from "../Tables/NeighboringForces"
const SafetyProgram = () => {
const { values } = useFormikContext()
const { exerciseManager, safetyManager } = values

return (
<>
<p className="h1 text-center" style={{ paddingTop: "10px", fontWeight: "bold" }}>Safety Program</p>
                                            <Field
                                            label="Order of battle"
                                            component ={TextField}
                                            name={"ofb"}
                                            type="number"
                                        />
<p>Exercise Manager: {exerciseManager}</p>
<p>Safety Manager: {safetyManager} </p>
<p>Weather:</p>



<Weather/>
<FireAreas/>
<NeighboringForces/>
</>
)
}
export default  SafetyProgram;

