import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
class loginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

            firstName: "",
            lastName: "",
            rank: "",
            id: "",
            duty: "",
            force: "",
            email: "",
            password: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        let loginPageData = {
            firstName: encodeURIComponent(this.state.firstName),
            lastName: encodeURIComponent(this.state.lastName),
            rank: encodeURIComponent(this.state.rank),
            id: encodeURIComponent(this.state.id),
            duty: encodeURIComponent(this.state.duty),
            force: encodeURIComponent(this.state.force),
            email: encodeURIComponent(this.state.email),
            password: encodeURIComponent(this.state.password),
        }
    }


    render() {
        return (
            <MDBContainer fluid>
                <MDBRow center>
                    <MDBCol md="4">
                        <form>
                            <p className="h1 text-center">Sign up</p>
                            <div className="grey-text">
                                <MDBInput
                                    label="Your first name"
                                    icon="user"
                                    name="firstName"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.handleChange}
                                    value={this.state.exerciseName}
                                />
                                <MDBInput
                                    label="Your last name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your rank"
                                    icon="angle-double-down"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your identity number"
                                    icon="id-badge"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your duty"
                                    icon="exclamation-triangle"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your force"
                                    icon="hand-rock"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary">Register</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}
export default loginPage;
