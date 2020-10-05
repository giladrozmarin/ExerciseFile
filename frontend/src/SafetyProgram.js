import React, { useState, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, mdbWavesEffect } from 'mdbreact';
import { useFormik } from 'formik';
import { Card, CardContent } from '@material-ui/core'
import axios from 'axios'

import './Certifications.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

//now check that the value get correct to the database
const SafetyProgram = () => {
    //state             //Setstate
    const [fieldApproveOptions, setFieldApproveOptions] = useState([])

    //useEffect Hooks 
    useEffect(() => {

        axios.get('/api/safetyprogram/fieldApproveOptions?userId=1234567&rank=Colonel&force=Moran')
            .then(response => {
                console.log(response.data)
                setFieldApproveOptions(response.data.fieldApproveOptions)
            }
            ).catch(err => console.log(err))
    }, [])

    const formik = useFormik({

        initialValues: {
            OrderOfBattle: '',
            exerciseManager: '',
            safetyManager: '',
            observationOfficer: '', // options should be pull from db
            weather: '',
            fireAreas: '', // options should be pull from db
            areaConstraints: '', // options should be pull from db
            nearbyForces: '', // options should be pull from db
        },

        onSubmit: values => {
            axios.post('/api/safetyprogram', values)
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
                                        <div className="SafetyProgram">

                                            <MDBInput
                                                label="Order of battle"
                                                name="orderOfBattle"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.OrderOfBattle}
                                                outline
                                                size="lg"
                                            />


                                            <MDBInput
                                                label="Exercise manager"
                                                name="exerciseManager"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.exerciseManager}
                                                outline
                                                size="lg"

                                            />

                                            <MDBInput
                                                label="Safety manager"
                                                name="safetyManager"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.safetyManager}
                                                outline
                                                size="lg"
                                            />



                                            {/*FieldApprove button */}
                                            <MDBInput
                                                label="Observation officer"
                                                name="observationOfficer"
                                                list="observationOfficer"
                                                onChange={formik.handleChange}
                                                value={formik.values.observationOfficer}
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
                                                label="Weather"
                                                name="weather"
                                                type="text"
                                                value={formik.values.weather}
                                                onChange={formik.handleChange}
                                                outline
                                                size="lg"
                                            />
                                            <MDBInput
                                                label="Fire areas"
                                                name="fireAreas"
                                                type="text"
                                                value={formik.values.fireAreas}
                                                onChange={formik.handleChange}
                                                outline
                                                size="lg"
                                            />
                                            <MDBInput
                                                label="Area constraints"
                                                name="areaConstraints"
                                                type="text"
                                                value={formik.values.areaConstraints}
                                                onChange={formik.handleChange}
                                                outline
                                                size="lg"
                                            />


                                            <MDBInput
                                                label="Nearby forces"
                                                name="nearbyForces"
                                                type="text"
                                                value={formik.values.nearbyForces}
                                                onChange={formik.handleChange}
                                                outline
                                                size="lg"

                                            />

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

    { { sessionStorage.setItem('exerciseManager', formik.values.exerciseManager) } }

}

export default SafetyProgram;