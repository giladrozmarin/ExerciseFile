import React, { useState, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, mdbWavesEffect } from 'mdbreact';
import { useFormik } from 'formik';
import { Card, CardContent } from '@material-ui/core'
import * as Yup from 'yup'
import axios from 'axios'

import './Certifications.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

//now check that the value get correct to the database
const Certifications = () => {
    //state             //Setstate
    const [fieldApproveOptions, setFieldApproveOptions] = useState([])

    //useEffect Hooks 
    useEffect(() => {

        axios.get('/api/certifications/fieldApproveOptions?userId=1234567&rank=Colonel&force=Moran')
            .then(response => {
                console.log(response.data)
                setFieldApproveOptions(response.data.fieldApproveOptions)
            }
            ).catch(err => console.log(err))
    }, [])

    const formik = useFormik({

        initialValues: {
            exerciseName: '',
            //exerciseBy: '',  autofill current user from session
            exerciseOOB: '',
            exercisePOD: '',
            exerciseType: '', // options should be pull from db
            exerciseLive: '',
            fieldApprove: '', // options should be pull from db
            fileApprove: '', // options should be pull from db
            artilleryApprove: '', // options should be pull from db
            exerciseManager: '',
            trainerOfficerApprove: '', // options should be pull from db
            cerRes: '',
            fieldApproveOptions: []

        },

        onSubmit: values => {
            axios.post('/api/certifications', values)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    })

    return (
        <Card>
            <CardContent>
                <div className="Pedding">
                    <MDBContainer fluid  >

                        <MDBRow center  >
                            <MDBCol md="4"  >
                                <div className="MDBColor">
                                    <form onSubmit={formik.handleSubmit} autoComplete="off">
                                        <p className="h1 text-center" style={{ paddingTop: "10px", fontWeight: "bold" }}>Certifications</p>
                                        <div className="Certifications">

                                            <MDBInput
                                                label="Exercise name"
                                                name="exerciseName"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.exerciseName}
                                                outline
                                                size="lg"
                                            />


                                            <MDBInput
                                                label="Exercise type"
                                                name="exerciseType"
                                                list="types"
                                                onChange={formik.handleChange}
                                                value={formik.values.exerciseType}
                                                outline
                                                size="lg"

                                            />

                                            <datalist id="types" >
                                                <option data-value="1" value="Open Terrain">Open Terrain</option>
                                                <option value="Urban warfare" >Urban warfare</option>
                                                <option value="Armoured fighting vehicle" >Armoured fighting vehicle</option>
                                                <option value="unplanned" >unplanned</option>
                                                <option value="live military exercise" >live military exercise</option>
                                            </datalist>






                                            <MDBInput
                                                label="Order of battle"
                                                name="exerciseOOB"
                                                type="number"
                                                min="20"
                                                onChange={formik.handleChange}
                                                value={formik.values.exerciseOOB}
                                                outline
                                                size="lg"
                                            />



                                            {/*FieldApprove button */}
                                            <MDBInput
                                                label="fieldApprove"
                                                name="fieldApprove"
                                                list="fieldApproves"
                                                onChange={formik.handleChange}
                                                value={formik.values.fieldApprove}
                                                outline
                                                size="lg"
                                            />
                                            <datalist id="fieldApproves" defaultValue>

                                                {fieldApproveOptions.map((option, i) =>
                                                    <option key={i++} value={option.id}>
                                                        {option.rank + " " + option.firstName + " " + option.lastName}
                                                    </option>)}
                                            </datalist>




                                            <MDBInput
                                                label="fileApprove"
                                                name="fileApprove"
                                                type="text"
                                                value={formik.values.fileApprove}
                                                onChange={formik.handleChange}
                                                outline
                                                size="lg"
                                            />
                                            <MDBInput
                                                label="artilleryApprove"
                                                name="artilleryApprove"
                                                type="text"
                                                value={formik.values.artilleryApprove}
                                                onChange={formik.handleChange}
                                                outline
                                                size="lg"
                                            />
                                            <MDBInput
                                                label="exerciseManager"
                                                name="exerciseManager"
                                                type="text"
                                                value={formik.values.exerciseManager}
                                                onChange={formik.handleChange}
                                                outline
                                                size="lg"
                                              

                                                
                                               

                                            />
                                            

                                            <MDBInput
                                                label="trainerOfficerApprove"
                                                name="trainerOfficerApprove"
                                                type="text"
                                                value={formik.values.trainerOfficerApprove}
                                                onChange={formik.handleChange}
                                                outline
                                                size="lg"

                                            />

                                            <div style={{ fontSize: "large", fontWeight: "bold" }} className="custom-control custom-checkbox">

                                                <input type="checkbox"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.exerciseLive}
                                                    className="custom-control-input"
                                                    name="exerciseLive"
                                                    id="live"
                                                    value="on"

                                                />
                                                <label className="custom-control-label" htmlFor="live"> live exercise</label>
                                            </div>





                                            {/*pod section*/}
                                            <span style={{ fontSize: "large", fontWeight: "bold", float: "left" }} >part of the day:</span>
                                            <div className="forms" style={{ fontWeight: "bold" }} onChange={formik.handleChange} value={formik.values.exercisePOD}  >
                                                {/*night button*/}
                                                <label htmlFor="rdo1">
                                                    <input type="radio" id="rdo1" name="exercisePOD" value="night" />
                                                    <span className="rdo"></span>
                                                    <span>night</span>
                                                </label>
                                                {/*day button*/}
                                                <label htmlFor="rdo2">
                                                    <input type="radio" id="rdo2" name="exercisePOD" value="day" />
                                                    <span className="rdo"></span>
                                                    <span>day</span>
                                                </label>

                                            </div>






                                            <div className="text-center">
                                                <MDBBtn type="submit" color="yellow">Send</MDBBtn>
                                            </div>
                                        </div >
                                    </form >
                                </div>
                            </MDBCol>
                        </MDBRow>

                    </MDBContainer >

                </div>
            </CardContent>
        </Card>
    );
    
    {{sessionStorage.setItem('exerciseManager',formik.values.exerciseManager)}}

}
 
export default Certifications;