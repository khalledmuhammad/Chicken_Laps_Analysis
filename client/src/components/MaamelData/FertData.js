import React from 'react';
import { useParams} from "react-router-dom";
import { useFormik } from "formik";
import {  FertValues , Validation } from "./FertDataValidation";
import { TextField, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import {  useHistory  } from 'react-router-dom'
import { SaveFert } from '../../store/AppStore';


function FertData() {
  const dispatch = useDispatch()
  const history= useHistory()
  const params = useParams()
  const mid = params.mid



 const formik = useFormik({
    enableReinitialize: true,
    initialValues: FertValues,
    validationSchema: Validation,
    onSubmit: async (values, { resetForm }) => {
       console.log(values);
       dispatch(SaveFert( mid ,  values));
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


  return ( <form className=" mt-5  ml-5 mr-5 " onSubmit={formik.handleSubmit}>
  <Grid container spacing={2}>
    <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              
              InputLabelProps={{ shrink: true, required: true , style: { fontSize: 20 } }}
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
        <Grid item xs={3}>
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
        <Grid item xs={3}>
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
        <Grid item xs={3}>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="رقم الدفعه"
              label="رقم الدفعه"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("batch_number")}
              {...errorHelper(formik, "batch_number")}
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
        <Grid container 
        direction="column"
        alignItems="center"
        justifyContent="center">
          <div className="form-group">
            <TextField
              style={{ width: "100%" , justifyContent:"center"}}
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              name="رقم الترولي"
              label=" رقم الترولي "
              type="number"
              variant="outlined"
              {...formik.getFieldProps("trolly_number")}
              {...errorHelper(formik, "trolly_number")}
            />
          </div>
        
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 ,  textAlign:"center" } }}
              InputLabelProps={{ style: { fontSize: 20  } }}
              name="صينية_1"
              label="صينية_1"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("tray_1")}
              {...errorHelper(formik, "tray_1")}
            />
          </div>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 ,  textAlign:"center" } }}
              InputLabelProps={{ style: { fontSize: 20  } }}
              name="صينية_2"
              label="صينية_2"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("tray_2")}
              {...errorHelper(formik, "tray_2")}
            />
          </div>  <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 ,  textAlign:"center" } }}
              InputLabelProps={{ style: { fontSize: 20  } }}
              name="صينية_3"
              label="صينية_3"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("tray_3")}
              {...errorHelper(formik, "tray_3")}
            />
          </div>  <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 ,  textAlign:"center" } }}
              InputLabelProps={{ style: { fontSize: 20  } }}
              name="صينية_4"
              label="صينية_4"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("tray_4")}
              {...errorHelper(formik, "tray_4")}
            />
          </div>  <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 ,  textAlign:"center" } }}
              InputLabelProps={{ style: { fontSize: 20  } }}
              name="صينية_5"
              label="صينية_5"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("tray_5")}
              {...errorHelper(formik, "tray_5")}
            />
          </div>  <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 ,  textAlign:"center" } }}
              InputLabelProps={{ style: { fontSize: 20  } }}
              name="صينية_6"
              label="صينية_6"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("tray_6")}
              {...errorHelper(formik, "tray_6")}
            />
          </div>  <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 ,  textAlign:"center" } }}
              InputLabelProps={{ style: { fontSize: 20  } }}
              name="صينية_7"
              label="صينية_7"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("tray_7")}
              {...errorHelper(formik, "tray_7")}
            />
          </div>  <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 ,  textAlign:"center" } }}
              InputLabelProps={{ style: { fontSize: 20  } }}
              name="صينية_8"
              label="صينية_8"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("tray_8")}
              {...errorHelper(formik, "tray_8")}
            />
          </div>
          <div className="form-group">
            <TextField
              style={{ width: "100%" }}
              InputProps={{ style: { fontSize: 20 ,  textAlign:"center" } }}
              InputLabelProps={{ style: { fontSize: 20  } }}
              name="صينية_9"
              label="صينية_9"
              type="number"
              variant="outlined"
              {...formik.getFieldProps("tray_9")}
              {...errorHelper(formik, "tray_9")}
            />
          </div>
          <div>
            
          </div>
       
        </Grid>
       


        <Grid item  xs={4}></Grid>

      <Grid item  xs={4}>
       
      <Button variant="contained" className="mt-1 w-100 h-70" style={{fontSize:"1.3rem" , fontWeight:"600"}}  disableRipple color="primary" type="submit">
       احفظ البيانات
      </Button>
      </Grid>
    </Grid>

</form>)
}

export default FertData;
