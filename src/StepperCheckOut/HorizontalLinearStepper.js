import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import "./CheckStep.css";
import FinalStep from "./Steps/FinalStep";
import { useHistory } from "react-router-dom";
const steps = ["Datos personales", "Realiza tu pago", "Finaliza tu compra"];

export default function HorizontalLinearStepper(props) {
  const history = useHistory();
  const { Styles, handleChange, submit, currentPayment, setFecha, setFile } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const finalizarCompra = () =>{
    handleNext()
    submit()
  }
  const siguiente = () =>{
    handleNext()
  }
 
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("No podes saltear este paso.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    history.push("/")
  };

  return (
    <Box sx={{ width: "100%" }} className="Containercheckout">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} className="StepLabel">
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <FinalStep />
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset} className="botonNext">
              Ir al Inicio
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {activeStep === 0 ? (
              <Step1 handleChange={handleChange} Styles={Styles} currentPayment={currentPayment}/>
            ) : activeStep === 1 ? (
              <Step2 />
            ) : activeStep === 2 ? (
              <Step3 setFecha={setFecha} setFile={setFile}/>
            ) : (
              <div></div>
            )}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {activeStep === 0 ? (
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                className="botonNextDisabled"
              >
                Volver
              </Button>
            ) : (
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                className="botonNext"
              >
                Volver
              </Button>
            )}

            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              /*<Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>*/
              <div></div>
            )}

            {activeStep === steps.length - 1 ? (
              <Button
                className="botonNext"
                onClick={finalizarCompra}
              >
                Finalizar compra
              </Button>
            ) : (
              <Button
                className="botonNext"
                onClick={siguiente}
              >
                Siguiente
              </Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
