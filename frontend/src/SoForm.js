import React, { useState, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, mdbWavesEffect } from 'mdbreact';
import { useFormik } from 'formik';
import { Card, CardContent } from '@material-ui/core'
import * as Yup from 'yup'
import axios from 'axios'
import Certifications from './Certifications'




const SoForm = () => {

const formik = useFormik({

  initialValues: {
    exerciseManager: ''
     


  }



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
                                  <div className="Certifications">

                               
                                      
                                    <p className="h1 text-center" style={{ paddingTop: "10px", fontWeight: "bold" }}>
</p>

                                      
                                      
                                      
                                   
</div>
</form>
</div>
</MDBCol>
</MDBRow>
</MDBContainer>

</div>
</CardContent>
  </Card>




)


}
export default SoForm;