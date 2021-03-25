import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CustomerInfo from "./CustomerInfo";
import DeliveryInfo from './DeliveryInfo';
import Payment from './Payment';
import { CartContext } from '../contexts/CartContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }),
);

function getSteps() {
  return ['Fyll i dina personuppgifter', 'Välj typ av leverans', 'Välj betalningssätt'];
}



export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  // const [hasErrorInForm, setHasErrorInForm] = React.useState(false);
  const steps = getSteps();
  const { customer, createCustomer } = useContext(CartContext);

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <CustomerInfo />
      case 1:
        return <DeliveryInfo />
      case 2:
        return <Payment />
      default:
        return 'Unknown step';
    }
  }

//   const function1 = () => {
//       console.log('skapa kund')
//       handleNext()
//   }

//   const function2 = () => {
//     console.log('skapa leverans')
//     handleNext()
// }

// const function3 = () => {
//     console.log('skapa betalning')
//     handleNext()
// }
 
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index)}
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Tack för din order! Ditt ordernummer är: </Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
