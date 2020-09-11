import {Button, Card, CardContent, CircularProgress, Grid, Step, StepLabel, Stepper} from '@material-ui/core';
import {Box} from '@material-ui/core' ;
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { useState } from 'react';
import { mixed, number, object } from 'yup';
import Certifications from './Certifications'
import LoginPageF from './loginPageF'
import SoForm from './SoForm'

const sleep = (time: any) => new Promise((acc) => setTimeout(acc, time));

export default function Home() {
  return (
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={{
            exerciseManager: '',
            lastName: '',
            millionaire: false,
            money: 0,
            description: '',
          }}
          onSubmit={async (values) => {
            await sleep(3000);
            console.log('values', values);
          }}
        >
          <FormikStep label="Certifications">
            <Box paddingBottom={2}>
            <Certifications   ></Certifications>
            </Box>
          </FormikStep>
          <FormikStep 
            label="loginPageF"
            validationSchema={object({
              money: mixed().when('millionaire', {
                is: true,
                then: number()
                  .required()
                  .min(
                    1_000_000,
                    'Because you said you are a millionaire you need to have 1 million'
                  ),
                otherwise: number().required(),
              }),
            })}
          >
            <Box paddingBottom={2}>
            <SoForm ></SoForm>
             
            </Box>
          </FormikStep>
          <FormikStep label="More Info">
            <Box paddingBottom={2}>
              <Field fullWidth name="description" component={TextField} label="Description" />
            </Box>
          </FormikStep>
          <FormikStep label="More Info">
            <Box paddingBottom={2}>
              <Field fullWidth name="description" component={TextField} label="Description" />
            </Box>
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </Card>
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
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
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
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