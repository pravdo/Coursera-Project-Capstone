import React from "react";
import { TextField, MenuItem, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const BookingForm = ({
  times,
  occasions,
  fetchAPI,
  dispatch,
  setValues,
  formikValues,
}) => {
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      number: "1",
      occasion: "",
    },
    onSubmit: (values) => {
      setValues([...formikValues, formik.values]);
      dispatch({ type: "submitted", values: values });
      formik.resetForm();
      // dispatch({type:"non-selected"}); //For resetting value to return an initialState
    },
    validationSchema: Yup.object().shape({
      date: Yup.string().required("Required"),
      time: Yup.string().required("Required"),
      number: Yup.string().required("Required"),
      occasion: Yup.string().required("Required"),
    }),
  });

  useEffect(() => {
    if (formik.values.date !== "")
      dispatch({ type: "selected", formikDate: formik.values.date });
  }, [formik.values.date]);

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          margin: "10px auto",
          display: "grid",
          maxWidth: "300px",
          gap: "20px",
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <TextField
          value={formik.values.date}
          {...formik.getFieldProps("date")}
          id="res-date"
          type="date"
          variant="filled"
          helperText={
            formik.errors && formik.touched.date ? formik.errors.date : null
          }
        />
        <label htmlFor="res-time">Choose time</label>
        <TextField
          value={formik.values.time}
          {...formik.getFieldProps("time")}
          helperText={
            formik.errors && formik.touched.time ? formik.errors.time : null
          }
          id="res-time"
          className="res-time"
          select
          label="Time"
          defaultValue="EUR"
          variant="filled"
        >
          {times.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <label htmlFor="guests">Number of guests</label>
        <TextField
          value={formik.values.number}
          {...formik.getFieldProps("number")}
          helperText={
            formik.errors && formik.touched.number ? formik.errors.number : null
          }
          id="guests"
          type="number"
          InputProps={{ inputProps: { min: "1", max: "10" } }}
          variant="filled"
        />
        <label htmlFor="occasion">Occasion</label>
        <TextField
          value={formik.values.occasion}
          {...formik.getFieldProps("occasion")}
          helperText={
            formik.errors && formik.touched.occasion
              ? formik.errors.occasion
              : null
          }
          id="occasion"
          select
          label="Occasion"
          defaultValue="EUR"
          variant="filled"
        >
          {occasions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Button
          aria-label="On Submit"
          type="submit"
          variant="contained"
          size="large"
          style={{ padding: "18px 0" }}
        >
          Make Your reservation
        </Button>
      </form>
    </>
  );
};

export default BookingForm;
