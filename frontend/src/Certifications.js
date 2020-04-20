import React, { Component } from 'react'

class Certifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exerciseName: '',
            //exerciseBy: '',  autofill current user from session
            exerciseType: '', // options should be pull from db
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
            exerciseType: encodeURIComponent(this.state.exerciseType),
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
            <div className="Certifications">
                <header className="Certifications-header">
                    <h1>Certifications</h1>

                    <br />

                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="exerciseName">Exercise name: </label>
                        <input
                            name="exerciseName"
                            type="text"
                            value={this.state.exerciseName}
                            onChange={this.handleChange} />

                        <br />

                        <label htmlFor="exerciseType">Exercise type: </label>
                        <input
                            name="exerciseType"
                            type="text"
                            value={this.state.exerciseType}
                            onChange={this.handleChange} />

                        <br />
                        <label htmlFor="fieldApprove">Field approve: </label>
                        <select id="fieldApproves" name="fieldApprove" defaultValue onChange={this.handleChange}>
                            <option value="default" hidden></option>
                            {this.state.fieldApproveOptions.map(option =>
                                <option key={i++} value={option.id}>{option.rank} {option.firstName} {option.lastName}</option>)}
                        </select>

                        <br />

                        <label htmlFor="fileApprove">File approve: </label>
                        <input
                            name="fileApprove"
                            type="text"
                            value={this.state.fileApprove}
                            onChange={this.handleChange} />

                        <br />

                        <label htmlFor="artilleryApprove">Artillery approve: </label>
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

                        <button type="submit">Send</button>
                    </form>

                    <p><strong>{this.state.cerRes}</strong></p>
                    <p><strong>{this.state.fieldApprove}</strong></p>
                </header>
            </div>
        );
    }
}
export default Certifications;