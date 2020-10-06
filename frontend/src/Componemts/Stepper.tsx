import { Button, Card, CardContent, CircularProgress, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { useState } from 'react';
import Certifications from './Certifications'
import InstrucEmphasis from'./InstructEmphasis'
import SoForm from './SoForm'
import SafetyProgram from "./SafetyProgram"
import Preparation from "./Preparation"
import { SignupSchema } from '../Validation/CustomInputComponents';
import MenuAppBar from "./AppBar"

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
  }
})



const sleep = (time: any) => new Promise((acc) => setTimeout(acc, time));

export default function Home() {
  const classes = useStyles();
  return (
    <>
    <MenuAppBar />
    <Card  
    >
      <CardContent  style={{backgroundColor: "#17202A"}}>
        <FormikStepper
          
         
         initialValues={{
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
            fieldApproveOptions: [],
            safetyManager: '',
            safetyManagerlist: [],
            exerciseGoal: '',
            exerciseSubject:'',
            ofb:'',
            rank:'',
            firstName:'',
            lastname:''
          }}
          onSubmit={async (values) => {
            await sleep(3000);
            console.log('values', values);
          }}
        >

          <FormikStep label="Certifications">
            <Box paddingBottom={2}>
              <Certifications />
            </Box>
          </FormikStep>

          <FormikStep
            label="soForm"
            //validationSchema={SignupSchema}
          >
            <Box paddingBottom={2}>
              <SoForm />
            </Box>
          </FormikStep>

          <FormikStep label="Instructional Emphasis">
            <Box paddingBottom={2}>
            <InstrucEmphasis />
            </Box>
          </FormikStep>

          <FormikStep label="Safety Program">
            <Box paddingBottom={2}>
            <SafetyProgram />
            </Box>
          </FormikStep>

          <FormikStep label="Safety Program">
            <Box paddingBottom={2}>
            <Preparation />
            </Box>
          </FormikStep>

        </FormikStepper>
      </CardContent>
    </Card>
    </>
    
  );
}


//This is the FormikStepProps interface 
//
export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

//FormikStep function : get one children, check if this FormikStepProps and return the children
export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}


//FormikStepper this is wrapper to Formik
export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
  //get childrenArray 
  const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
  //Step Hooks
  const [step, setStep] = useState(0);
  //get the current childrenArray 
  const currentChild = childrenArray[step];
  console.log(childrenArray )
  //completed Hooks
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
   
    <Formik
    
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
        }
      }}


      
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off" >
          <Stepper alternativeLabel activeStep={step} style={{backgroundColor: '#17202A' ,color:"ffffff"}}>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed}>
                <StepLabel  style={{color:"ffffff"}}>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}
          
          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
    
  );
}