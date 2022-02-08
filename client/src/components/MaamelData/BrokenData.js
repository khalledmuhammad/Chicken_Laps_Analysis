import React from "react";
import { useFormik } from "formik";
import { useParams} from "react-router-dom";
import { BrokenValues, Validation } from "./BrokenValidation";
import {
  TextField,
  Button,
  Grid,
  
} from "@mui/material";
import { useDispatch } from "react-redux";
import {  useHistory  } from 'react-router-dom'

import { SaveBroken } from "../../store/AppStore";

function BrokenData() {
  const dispatch = useDispatch()
  const history= useHistory()
  const params = useParams()
  const mid = params.mid

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: BrokenValues,
    validationSchema: Validation,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
       dispatch(SaveBroken( mid ,  values));
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
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="رقم الدفعه"
              label="ادخل رقم الدفعه"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("rkmDof3a")}
              {...errorHelper(formik, "rkmDof3a")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              
              InputLabelProps={{ shrink: true, required: true , style: { fontSize: 20 } }}
              type="date"
              name="تاريخ الايداع"
              label="ادخل تاريخ الايداع"
              variant="outlined"
              {...formik.getFieldProps("tary5eda3")}
              {...errorHelper(formik, "tary5eda3")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ shrink: true, required: true , style: { fontSize: 20 } }}
              type="date"
              name="تاريخ الفقص"
              label="ادخل تاريخ الفقص"
              variant="outlined"
              {...formik.getFieldProps("tary5f2s")}
              {...errorHelper(formik, "tary5f2s")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="رقم عينه"
              label="ادخل رقم العينه"
              type="number"

              variant="outlined"
              {...formik.getFieldProps("rkm3ayna")}
              {...errorHelper(formik, "rkm3ayna")}
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
              {...formik.getFieldProps("mazr3a")}
              {...errorHelper(formik, "mazr3a")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name=" عنبر"
              label="ادخل  العنبر"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("Anbar")}
              {...errorHelper(formik, "Anbar")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="العمر "
              label="ادخل العمر "
              variant="outlined"
              type="number"
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
              name="عدد العينه "
              label="ادخل عدد العينه "
              variant="outlined"
              type="number"
              {...formik.getFieldProps("AynaNum")}
              {...errorHelper(formik, "AynaNum")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="عدد البيض "
              label=" عدد البيض "
              variant="outlined"
              type="number"
              {...formik.getFieldProps("EggCount")}
              {...errorHelper(formik, "EggCount")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name=" INFERTILE"
              label="  INFERTILE"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("INFERTILE")}
              {...errorHelper(formik, "INFERTILE")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name=" EARLY"
              label="EARLY"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("EARLY")}
              {...errorHelper(formik, "EARLY")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="BLOOD_RING"
              label="BLOOD_RING"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("BLOOD_RING")}
              {...errorHelper(formik, "BLOOD_RING")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="BLACK_EYE"
              label="BLACK_EYE"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("BLACK_EYE")}
              {...errorHelper(formik, "BLACK_EYE")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="Ten_DAYS"
              label="10 Days"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("Ten_DAYS")}
              {...errorHelper(formik, "Ten_DAYS")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="FEATHER"
              label="FEATHER"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("FEATHER")}
              {...errorHelper(formik, "FEATHER")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="LATE_LIFE"
              label="LATE_LIFE"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("LATE_LIFE")}
              {...errorHelper(formik, "LATE_LIFE")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="LATE_DEAD"
              label="LATE_DEAD"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("LATE_DEAD")}
              {...errorHelper(formik, "LATE_DEAD")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="PIP_LIFE"
              label="PIP_LIFE"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("PIP_LIFE")}
              {...errorHelper(formik, "PIP_LIFE")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="PIP_DEAD"
              label="PIP_DEAD"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("PIP_DEAD")}
              {...errorHelper(formik, "PIP_DEAD")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="SHELLQUALITY"
              label="SHELLQUALITY"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("SHELLQUALITY")}
              {...errorHelper(formik, "SHELLQUALITY")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="ROTTEN"
              label="ROTTEN"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("ROTTEN")}
              {...errorHelper(formik, "ROTTEN")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="CONTAMINATION"
              label="CONTAMINATION"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("CONTAMINATION")}
              {...errorHelper(formik, "CONTAMINATION")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="M_POSETION"
              label="M_POSETION"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("M_POSETION")}
              {...errorHelper(formik, "M_POSETION")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="M_FORMATION"
              label="M_FORMATION"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("M_FORMATION")}
              {...errorHelper(formik, "M_FORMATION")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="CULLS"
              label="CULLS"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("CULLS")}
              {...errorHelper(formik, "CULLS")}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="DEAD_CHICKS"
              label="DEAD_CHICKS"
              variant="outlined"
              type="number"
              {...formik.getFieldProps("DEAD_CHICKS")}
              {...errorHelper(formik, "DEAD_CHICKS")}
            />
          </div>
        </Grid>  
        <Grid item  xs={3}>
         
        <Button variant="contained" className="mt-3 w-50 h-50" style={{fontSize:"1.3rem" , fontWeight:"600"}}  disableRipple color="primary" type="submit">
         احفظ البيانات
        </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default BrokenData;
