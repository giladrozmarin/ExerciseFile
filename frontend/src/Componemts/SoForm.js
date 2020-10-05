import React, { useState, useEffect } from 'react'
import {TextField} from "formik-material-ui"
import { Field,ErrorMessage } from 'formik';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, mdbWavesEffect } from 'mdbreact';
import { useFormikContext } from "formik";
import { Card, CardContent } from '@material-ui/core'
import * as Yup from 'yup'
import axios from 'axios'
import Certifications from './Certifications'
import DatePickerWrapper from '../Wrapper/DatePickerWrapper';
import moment from 'moment';
import {CustomInputComponent} from '../Validation/CustomInputComponents';
import SignatureCanvas from 'react-signature-canvas'
import reactSignatureCanvas from '../Wrapper/reactSignatureCanvas'
 

const SoForm = () => {


  const { values } = useFormikContext()
  const { exerciseManager,exerciseName } = values
  //state             //Setstate
    const [safetyManagerlist, setsafetyManagerlist] = useState([])

    //useEffect Hooks 
    useEffect(() => {

        axios.get('/api/soForm/safetyManagerlist?userId=1234567&rank=Colonel&force=Moran')
            .then(response => {
                console.log(response.data)
                setsafetyManagerlist(response.data.safetyManagerlist)
            }
            ).catch(err => console.log(err))
    }, [])

  return (
    <>
    <p className="h1 text-center" style={{ paddingTop: "10px", fontWeight: "bold" }}>Appointment of SO Form</p>
      <p>From: {exerciseManager}</p>
      <p>To: </p>
                                                  {/*Safety Manager list*/}
                                                  <MDBInput
                                                label="safetyManager"
                                                name="safetyManager"
                                                list="safetyManagers"
                                               
                                           //     {...formik.getFieldProps('fieldApprove')}
                                            />
                                            <datalist id="safetyManagers" defaultValue>

                                                {safetyManagerlist.map((option, i) =>
                                                    <option key={i++} value={option.id}>
                                                        {option.rank + " " + option.firstName + " " + option.lastName}
                                                    </option>)}
                                            </datalist>
     <p>You are appointed  to SO at :{exerciseName} </p>  
     <p> This appointment requires you to be an instructor, supervisor and advisor to the commander<br />
         in charge director of the exercise based on the safety instructions in the training in force</p>   
         <p> Validity </p>  
         From: 
         <Field name="startDate" component={DatePickerWrapper} />
         <ErrorMessage name="startDate" />
          To:
          <Field name="endDate" component={DatePickerWrapper} />
          <ErrorMessage name="startDate" />
          <br/>
          
<p>Exercise manager signature:</p>
<SignatureCanvas penColor='black'
    canvasProps={{width: 500, height: 75, className: 'sigCanvas'}} />
         <reactSignatureCanvas />                 
    </>
  )
}
export default SoForm;