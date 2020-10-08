import React from "react"
import { useFormikContext, Field } from 'formik'
import Obdeatail from "../Tables/Obdeatail.js"
import { TextField } from "formik-material-ui"
import SignatureCanvas from 'react-signature-canvas'
import { Card, CardContent } from '@material-ui/core'

function Preparation() {

    return (
        
        <Card style={{backgroundColor:'#ffff99'}}> \<p className="h1 text-center" style={{ paddingTop: "10px", fontWeight: "bold" }}>Preparation</p>
            <Obdeatail />
<span>
            <h5  style={{ paddingTop: "8px", fontWeight: "bold" }}>This exercise made by:</h5>
            <Field
                label="rank"
                component={TextField}
                name={"rank"}
                type="text"
            />
            <Field
                label="firstName"
                component={TextField}
                name={"firstName"}
                type="text"
            />
          <Field
                label="lastname"
                component={TextField}
                name={"lastname"}
                type="text"
            />
            <h6 style={{ paddingTop: "6px", fontWeight: "bold" }}>sign here </h6>
            <SignatureCanvas penColor='black' style= {{borderStyle: "double" }}
    canvasProps={{width: 300, height: 75,className: 'sigCanvas'}} />
         <reactSignatureCanvas />   
            
</span>
        </Card>

    )

}

export default Preparation;