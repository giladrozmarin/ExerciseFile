import React, { useState, useEffect } from 'react'
import { Field, useFormikContext } from "formik";
import {TextField} from "formik-material-ui";
import CellEditable from "../Tables/CellEditable.js";
import MeansOfExercise from "../Tables/MeansOfExercise.js"
import { Card, CardContent} from '@material-ui/core'
const InstrucEmphasis = () => {

  const { values } = useFormikContext()
  const { exerciseGoal, exerciseSubject } = values
  return (
    <Card style={{backgroundColor:'#ffff99'}}> 
    <form autoComplete="off">

      <p className="h1 text-center" style={{ paddingTop: "10px", fontWeight: "bold" }}>Instructional emphasis</p>
      <div className="instrucEmphasis">
        <Field
          label="Exercise goal"
          component={TextField}
          name={"exerciseGoal"}
          type="text"
          fullWidth
       
        />
        <Field
          label="Exercise subject"
          component={TextField}
          name={"exerciseSubject"}
          type="text"
          fullWidth
        />
      <CellEditable></CellEditable>
      <MeansOfExercise></MeansOfExercise>
      </div>

    </form>
</Card>











  )



}
export default  InstrucEmphasis;

