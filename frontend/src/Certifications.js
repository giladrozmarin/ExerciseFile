import React, { Component } from 'react'

class Certifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exerciseName: '',
            //exerciseBy: '',  autofill current user            
            exerciseType: '', // options should be pull from db
            fieldApprove: '', // options should be pull from db
            fileApprove: '', // options should be pull from db
            artilleryApprove: '', // options should be pull from db
            exerciseManager: '', // options should be pull from db
            trainerOfficerApprove: '' // options should be pull from db
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let exerciseName = encodeURIComponent(this.state.exerciseName)
        //let exerciseBy = ....
        let exerciseType = encodeURIComponent(this.state.exerciseType)
        let fieldApprove = encodeURIComponent(this.state.fieldApprove)
        let fileApprove = encodeURIComponent(this.state.fileApprove)
        let artilleryApprove = encodeURIComponent(this.state.artilleryApprove)
        let exerciseManager = encodeURIComponent(this.state.exerciseManager)
        let trainerOfficerApprove = encodeURIComponent(this.state.trainerOfficerApprove)

        fetch(`/api/certifications?exerciseName=${exerciseName}&exerciseType=${exerciseType}
        &fieldApprove=${fieldApprove}&fileApprove=${fileApprove}&artilleryApprove=${artilleryApprove}
        &exerciseManager=${exerciseManager}&trainerOfficerApprove=${trainerOfficerApprove}`)
            .then(response => response.json())
            .then(state => this.setState(state));
    }

    render() {
        return (
            <div className="Certifications">
                <header className="Certifications-header">
                    {/* <img src={logo} className="StartScreen-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p> */}
                    <h1>Certifications</h1>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="exerciseName">Exercise name: </label>
                        <input
                            name="exerciseName"
                            type="text"
                            value={this.state.exerciseName}
                            onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="exerciseType">Exercise type: </label>
                        <input
                            name="exerciseType"
                            type="text"
                            value={this.state.exerciseType}
                            onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="fieldApprove">Field approve: </label>
                        <input
                            name="fieldApprove"
                            type="text"
                            value={this.state.fieldApprove}
                            onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="fileApprove">File approve: </label>
                        <input
                            name="fileApprove"
                            type="text"
                            value={this.state.fileApprove}
                            onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="artilleryApprove">Artillery approve: </label>
                        <input
                            name="artilleryApprove"
                            type="text"
                            value={this.state.artilleryApprove}
                            onChange={this.handleChange}
                        />
                        <br />

                        <label htmlFor="exerciseManager">Exercise manager: </label>
                        <input
                            name="exerciseManager"
                            type="text"
                            value={this.state.exerciseManager}
                            onChange={this.handleChange}
                        />
                        <br />

                        <label htmlFor="trainerOfficerApprove">Trainer officer approve: </label>
                        <input
                            name="trainerOfficerApprove"
                            type="text"
                            value={this.state.trainerOfficerApprove}
                            onChange={this.handleChange}
                        />
                        <br />
                        <button type="submit">Send</button>
                    </form>
                    <h1>{this.state.regRes}</h1>
                </header>
            </div>
        );
    }
}
export default Certifications;