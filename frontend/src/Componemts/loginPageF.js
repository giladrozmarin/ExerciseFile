import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const LoginPageF = () => {
   
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName:'',
        rank:'',
        id:'',
        duty:'',
        force:'',
        email: '',
        password:''

      },
      onSubmit: values => {
        axios.post('/api/loginPage', values)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },


    
    })
   return (
    <MDBContainer fluid>
        <MDBRow center>
            <MDBCol md="4">
            <form onSubmit={formik.handleSubmit}>
                    <p className="h1 text-center">Sign up</p>
                    <div className="grey-text">
                        <MDBInput
                            label="Your first name"
                            icon="user"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                        <MDBInput
                            label="Your last name"
                            icon="user"
                            name="lastName"                           
                            type="text"                           
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                        <MDBInput
                            label="Your rank"
                            icon="angle-double-down"
                            name="rank"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.rank}
                        />
                        <MDBInput
                            label="Your identity number"
                            icon="id-badge"
                            name= "id"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.id}
                        />
                        <MDBInput
                            label="Your duty"
                            icon="exclamation-triangle"
                            name="duty"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.duty}
                        />
                        <MDBInput
                            label="Your force"
                            icon="hand-rock"
                            name="force"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.force}
                        />
                        <MDBInput
                            label="Your email"
                            icon="envelope"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <MDBInput
                            label="Your password"
                            icon="lock"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                    <div className="text-center">
                        <MDBBtn type="submit" color="primary">Register</MDBBtn>
                 

                    </div>
                </form>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
);
}
export default LoginPageF;
