import React from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { EggDataValues, Validation } from "./EggDataValidation";
import { TextField, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import {  useHistory  } from 'react-router-dom'
import { SaveEggData } from "../../store/AppStore";

function EggData() {
  const dispatch = useDispatch()
  const history= useHistory()
  const params = useParams();
  const mid = params.mid;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: EggDataValues,
    validationSchema: Validation,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      dispatch(SaveEggData( mid ,  values));
      history.push(`/mamelTfry5/${mid}`);
    },
  });

  const errorHelper = (formik, values) => ({
    error: formik.errors[values] && formik.touched[values] ? true : false,
    helperText:
      formik.errors[values] && formik.touched[values]
        ? formik.errors[values]
        : null,
  });
  return (
    <form className=" mt-5  ml-5 mr-5 " onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{
                shrink: true,
                required: true,
                style: { fontSize: 20 },
              }}
              type="date"
              name="تاريخ الانتاج"
              label="ادخل تاريخ الانتاج"
              variant="outlined"
              {...formik.getFieldProps("production_date")}
              {...errorHelper(formik, "production_date")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="العمر"
              label=" العمر "
              type="number"
              variant="outlined"
              {...formik.getFieldProps("age")}
              {...errorHelper(formik, "age")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name=" مزرعه"
              label="مرزعه"
              variant="outlined"
              {...formik.getFieldProps("farm")}
              {...errorHelper(formik, "farm")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name=" القطيع"
              label="القطيع"
              variant="outlined"
              {...formik.getFieldProps("flock")}
              {...errorHelper(formik, "flock")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name=" الخط"
              label="الخط"
              variant="outlined"
              {...formik.getFieldProps("line")}
              {...errorHelper(formik, "line")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name=" العنبر"
              label="العنبر"
              variant="outlined"
              {...formik.getFieldProps("house")}
              {...errorHelper(formik, "house")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="البيض الارضي"
              label=" البيض الارضي "
              type="number"
              variant="outlined"
              {...formik.getFieldProps("floor_egg")}
              {...errorHelper(formik, "floor_egg")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="متسخ"
              label=" متسخ "
              type="number"
              variant="outlined"
              {...formik.getFieldProps("dirty")}
              {...errorHelper(formik, "dirty")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="صغير"
              label=" صغير "
              type="number"
              variant="outlined"
              {...formik.getFieldProps("small")}
              {...errorHelper(formik, "small")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="كسر"
              label=" كسر "
              type="number"
              variant="outlined"
              {...formik.getFieldProps("crack")}
              {...errorHelper(formik, "crack")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="مشوه"
              label=" مشوه "
              type="number"
              variant="outlined"
              {...formik.getFieldProps("misshape")}
              {...errorHelper(formik, "misshape")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="ابيض"
              label=" ابيض "
              type="number"
              variant="outlined"
              {...formik.getFieldProps("white")}
              {...errorHelper(formik, "white")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="معدم"
              label=" معدم "
              type="number"
              variant="outlined"
              {...formik.getFieldProps("broken")}
              {...errorHelper(formik, "broken")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="بيض العش"
              label=" بيض العش "
              type="number"
              variant="outlined"
              {...formik.getFieldProps("nest_egg")}
              {...errorHelper(formik, "nest_egg")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            className="mt-3 w-50 h-50"
            style={{ fontSize: "1.3rem", fontWeight: "600" }}
            disableRipple
            color="primary"
            type="submit"
          >
            احفظ البيانات
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EggData;
