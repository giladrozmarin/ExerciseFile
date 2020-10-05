import React from "react"
import { useFormikContext, Field } from 'formik'
import Obdeatail from "../Tables/Obdeatail.js"
import { TextField } from "formik-material-ui"
import SignatureCanvas from 'react-signature-canvas'

function Preparation() {

    return (
        <>
            <Obdeatail />
<span>
            <h5>This exercise made by:</h5>
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
            <h6>sign here </h6>
            <SignatureCanvas penColor='black' style= {{borderStyle: "double" }}
    canvasProps={{width: 300, height: 75,className: 'sigCanvas'}} />
         <reactSignatureCanvas />   
            
</span>
        </>

    )

}

export default Preparation;