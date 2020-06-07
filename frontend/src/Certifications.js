import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

import './Certifications.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class Certifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exerciseName: '',
            //exerciseBy: '',  autofill current user from session
            exerciseOOB: '',
            exercisePOD: '',
            exerciseType: '', // options should be pull from db
            exerciseLive: '',
            fieldApprove: '', // options should be pull from db
            fileApprove: '', // options should be pull from db
            artilleryApprove: '', // options should be pull from db
            exerciseManager: '', // options should be pull from db
            trainerOfficerApprove: '', // options should be pull from db
            cerRes: '',
            fieldApproveOptions: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // parameters should be from current user
        fetch('/api/certifications/fieldApproveOptions?userId=1234567&rank=Colonel&force=Moran')
            .then(response => response.json())
            .then(state => this.setState(state), () => console.log("here"))
            .catch((error) => {
                console.error('Error:', error);
                this.setState({ cerRes: 'Error' })
            });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
        console.log("name: " + name + ". value:" + value)
    }

    handleSubmit(event) {
        event.preventDefault();

        /*
        let exerciseName = encodeURIComponent(this.state.exerciseName)
        //let exerciseBy = autofill current user from session
        let exerciseType = encodeURIComponent(this.state.exerciseType)
        let fieldApprove = encodeURIComponent(this.state.fieldApprove)
        let fileApprove = encodeURIComponent(this.state.fileApprove)
        let artilleryApprove = encodeURIComponent(this.state.artilleryApprove)
        let exerciseManager = encodeURIComponent(this.state.exerciseManager)
        let trainerOfficerApprove = encodeURIComponent(this.state.trainerOfficerApprove)

        fetch(`/api/certifications?exerciseName=${exerciseName}&exerciseType=${exerciseType}` +
            `&fieldApprove=${fieldApprove}&fileApprove=${fileApprove}&artilleryApprove=${artilleryApprove}` +
            `&exerciseManager=${exerciseManager}&trainerOfficerApprove=${trainerOfficerApprove}` +
            `&exerciseAuthorId=1234567`)
            .then(response => response.json())
            .then(state => this.setState(state));
        */

        let data = {
            exerciseName: encodeURIComponent(this.state.exerciseName),
            exerciseBy: '1234567', // autofill current user from session
            exerciseOOB: encodeURIComponent(this.state.exerciseOOB),
            exercisePOD: encodeURIComponent(this.state.exercisePOD),
            exerciseType: encodeURIComponent(this.state.exerciseType),
            exerciseLive: encodeURIComponent(this.state.exerciseLive),
            fieldApprove: encodeURIComponent(this.state.fieldApprove),
            fileApprove: encodeURIComponent(this.state.fileApprove),
            artilleryApprove: encodeURIComponent(this.state.artilleryApprove),
            exerciseManager: encodeURIComponent(this.state.exerciseManager),
            trainerOfficerApprove: encodeURIComponent(this.state.trainerOfficerApprove)
        }



        fetch('/api/certifications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((state) => {
                this.setState(state)
            })
            .catch((error) => {
                console.error('Error:', error);
                this.setState({ cerRes: 'Error' })
            });

    }


    render() {
        let i = 0
        return (
            <MDBContainer fluid>
                <MDBRow center>
                    <MDBCol md="4">
                        <div className="Certifications">
                            <header className="Certifications-header">
                                <p className="h1 text-center">Certifications</p>

                                <br />

                                <form onSubmit={this.handleSubmit}>
                                  {/*exercise name */}
                                    <MDBInput
                                        label="Exercise name"
                                        name="exerciseName"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={this.handleChange}
                                        value={this.state.exerciseName}
                                    />

                                    {/*exerciseType section */}

                                    {/*Order of battle */}
                                    <label className="h5">Exercise type: </label>
                                    <br />
                                    <label htmlFor="exerciseOOB">Order of battle: </label>
                                    <input
                                        onChange={this.handleChange}
                                        name="exerciseOOB"
                                        type="number"
                                        min="20"
                                    />


                                    {/*pod section */}
                                    <div className='container' onChange={this.handleChange}>
                                        <label className="h6" htmlFor="exercisePOD"> part of a day: </label>
                                        {/*night button */}
                                        <input type="radio" name="exercisePOD" id="night" value="night" />
                                        < label htmlFor="night"> night </label>
                                        {/*day button */}
                                        <input type="radio" name="exercisePOD" id="day" value="day" />
                                        < label htmlFor="day"> day </label>
                                    </div>


                                    {/*type button */}
                                    <label className="h6" htmlFor="exerciseType">Types: </label>
                                    <input list="types" name="exerciseType" onChange={this.handleChange} />
                                    <datalist id="types" >
                                        <option value="1" name="Open Terrain"></option>
                                        <option value="2" >Urban warfare</option>
                                        <option value="3" >Armoured fighting vechicle</option>
                                        <option value="4" >unplanned</option>
                                        <option value="5" >live military exercise</option>
                                    </datalist>


                                    {/*live exercise button */}
                                    <input type="checkbox" onChange={this.handleChange} name="exerciseLive" id="live" value="on" />
                                    <label htmlFor="live">live exercise</label><br></br>

                                    <br />

                                    {/*FieldApprove button */}
                                    <label className="h6" htmlFor="fieldApprove">Field approve: </label>
                                    <input type="text" list="fieldApproves" name="fieldApprove" />
                                    <datalist id="fieldApproves" defaultValue>

                                        {this.state.fieldApproveOptions.map(option =>
                                            <option key={i++} value={option.id}>{option.rank + " " + option.firstName + " " + option.lastName}</option>)}
                                    </datalist>


                                    <br />

                                    {/*FileApprove button */}
                                    <label className="h6" htmlFor="fileApprove">File approve: </label>
                                    <input
                                        name="fileApprove"
                                        type="text"
                                        value={this.state.fileApprove}
                                        onChange={this.handleChange} />

                                    <br />

                                    <label className="h6" htmlFor="artilleryApprove">Artillery approve: </label>
                                    <input
                                        name="artilleryApprove"
                                        type="text"
                                        value={this.state.artilleryApprove}
                                        onChange={this.handleChange} />

                                    <br />

                                    <label htmlFor="exerciseManager">Exercise manager: </label>
                                    <input
                                        name="exerciseManager"
                                        type="text"
                                        value={this.state.exerciseManager}
                                        onChange={this.handleChange} />

                                    <br />

                                    <label htmlFor="trainerOfficerApprove">Trainer officer approve: </label>
                                    <input
                                        name="trainerOfficerApprove"
                                        type="text"
                                        value={this.state.trainerOfficerApprove}
                                        onChange={this.handleChange} />

                                    <br />


                                    <div className="text-center">
                                        <MDBBtn color="primary">Send</MDBBtn>
                                    </div>
                                </form >

                                <p><strong>{this.state.cerRes}</strong></p>
                                <p><strong>{this.state.fieldApprove}</strong></p>
                            </header >
                        </div >
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        );
    }
}
export default Certifications;