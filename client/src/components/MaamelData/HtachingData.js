import React from 'react';
import { useParams} from "react-router-dom";
import { useFormik } from "formik";
import {  HatchingValues , Validation } from "./HatchingDataValidation";
import { TextField, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import {  useHistory  } from 'react-router-dom'
import { SaveHatching } from '../../store/AppStore';

function HtachingData() {
  const dispatch = useDispatch()
  const history= useHistory()
  const params = useParams()
  const mid = params.mid

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: HatchingValues,
    validationSchema: Validation,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      dispatch(SaveHatching( mid ,  values));
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


  return  ( <form className=" mt-5  ml-5 mr-5 " onSubmit={formik.handleSubmit}>
  <Grid container spacing={2}>
  <Grid item xs={4}>
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
        <Grid item xs={4}>
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
        <Grid item xs={4}>
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
        <Grid item xs={4}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name=" عدد البيض"
              label=" عدد البيض"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("eggs_count")}
              {...errorHelper(formik, "eggs_count")}
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name=" عدد الكتاكيت"
              label=" عدد الكتاكيت"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("chicks_count")}
              {...errorHelper(formik, "chicks_count")}
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name=" عدد الصواني"
              label=" عدد الصواني"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("trays_count")}
              {...errorHelper(formik, "trays_count")}
            />
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              
              InputLabelProps={{ shrink: true, required: true , style: { fontSize: 20 } }}
              type="date"
              name="تاريخ الفقس"
              label="ادخل تاريخ الفقس"
              variant="outlined"
              {...formik.getFieldProps("hatch_date")}
              {...errorHelper(formik, "hatch_date")}
            />
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              
              InputLabelProps={{ shrink: true, required: true , style: { fontSize: 20 } }}
              type="date"
              name="تاريخ الايداع"
              label="ادخل تاريخ الايداع"
              variant="outlined"
              {...formik.getFieldProps("setting_date")}
              {...errorHelper(formik, "setting_date")}
            />
          </div>
        </Grid>
       
        <Grid item xs={4}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              
              InputLabelProps={{ shrink: true, required: true , style: { fontSize: 20 } }}
              type="date"
              name="تاريخ الاخصاب"
              label="ادخل تاريخ الاخصاب"
              variant="outlined"
              {...formik.getFieldProps("candling_date")}
              {...errorHelper(formik, "candling_date")}
            />
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              type="number"
              name="رقم الدفعه"
              label="ادخل رقم الدفعه"
              variant="outlined"
              {...formik.getFieldProps("batch_number")}
              {...errorHelper(formik, "batch_number")}
            />
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              type="number"
              name="رقم التروللي"
              label="ادخل رقم التروللي"
              variant="outlined"
              {...formik.getFieldProps("trolly_number")}
              {...errorHelper(formik, "trolly_number")}
            />
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              type="number"
              name=" عدد الامهات"
              label="ادخل عدد الامهات "
              variant="outlined"
              {...formik.getFieldProps("breeder_count")}
              {...errorHelper(formik, "breeder_count")}
            />
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              type="number"
              name=" عدد التسمين"
              label="ادخل عدد التسمين "
              variant="outlined"
              {...formik.getFieldProps("boilers_count")}
              {...errorHelper(formik, "boilers_count")}
            />
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              type="number"
              name=" عدد الفرزة"
              label="ادخل عدد الفرزة "
              variant="outlined"
              {...formik.getFieldProps("culls_count")}
              {...errorHelper(formik, "culls_count")}
            />
          </div>
        </Grid>
        

        <Grid item  xs={4}></Grid>
      <Grid item  xs={3}>
       
      <Button variant="contained" className="mt-3 w-50 h-70" style={{fontSize:"1.3rem" , fontWeight:"600"}}  disableRipple color="primary" type="submit">
       احفظ البيانات
      </Button>
      </Grid>
    </Grid>

</form>)
}

export default HtachingData;
