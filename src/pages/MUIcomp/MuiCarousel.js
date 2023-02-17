import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { UseMuiContext } from "../../context/MuiContextProvider";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";

const MuiCarousel = (itemArr) => {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const { loading, setLoading, handleClick } = UseMuiContext();
  const navigate = useNavigate();
  const images = itemArr;
  const maxSteps = images.itemArr.length;

  function handleNext() {
    setActiveStep(activeStep + 1);
  }
  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  function handleClickAndTiming(item) {
    handleClick(item);

    setTimeout(() => {
      setLoading({});
      navigate("/order");
    }, 1000);
  }

  return (
    <Box className="center" sx={{ maxWidth: 600, flexGrow: 2 }} key={uuid()}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{images.itemArr[activeStep].title}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        className="bg-white"
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange} //This automatically send number me which max is equal to my array length
        enableMouseEvents
      >
        {images.itemArr.map((step, index) => (
          <div key={uuid()}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div>
                {step.userName ? (
                  <>
                    <div style={{ padding: "15px" }}>
                      <p className="bg-white title">{step.userName}</p>
                      <p className="bg-white">{step.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <Box
                      component="img"
                      sx={{
                        height: 255,
                        display: "block",
                        maxWidth: 600,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={`/icons_assets/${step.imgUrl}`}
                      alt="img"
                    />
                    <div style={{ padding: "15px" }}>
                      <p className="bg-white">{step.description}</p>
                      <p className="bg-white"> ${step.price}</p>
                      <button
                        onClick={() => handleClickAndTiming(step)}
                        className="primaryButton menuBtn w-100"
                      >
                        {loading.description === step.description ? (
                          <CircularProgress size={30} />
                        ) : (
                          <p>Order for Delivery</p>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? <CaretLeftFill /> : <CaretRightFill />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <CaretRightFill /> : <CaretLeftFill />}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default MuiCarousel;
