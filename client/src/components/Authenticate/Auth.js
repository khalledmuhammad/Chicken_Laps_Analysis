import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useDispatch} from "react-redux"
import {   LoginUser } from '../../store/userStore';
import {  useHistory  } from 'react-router-dom'

import { TextField, Button, Grid } from '@material-ui/core';

const Auth = (props) => {
    const dispatch = useDispatch()
    const history= useHistory()


    const formik = useFormik({
        initialValues:{ username:'',password:''  },
        validationSchema:Yup.object({
            username:Yup.string()
            .required('Sorry the username is required'),
           
          
            password:Yup.string()
            .required('Sorry the password is required')
        }),
        onSubmit:async(values,{resetForm})=>{
      
            dispatch(LoginUser(values))
            history.push("/")

         
    
        }
    });

    const errorHelper = (formik, values) => ({
        error: formik.errors[values] && formik.touched[values] ? true:false,
        helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
    })
     
    
    return(
        <>
        <Grid container justifyContent="center" alignItems="center" style={{minHeight:"100vh"}} spacing={7}>
          
        
            <div className=" text-center  "   style={{ width : "250px" }}>
                <h1 >ادخل بياناتك</h1>
                <form className="mt-3" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <TextField
                            style={{width:'100%'}}
                            name="email"
                            label="Enter your username"
                            variant="outlined"
                            {...formik.getFieldProps('username')}
                            {...errorHelper(formik,'username')}
                        />
                    </div>
                 
                    <div className="form-group">
                        <TextField
                            style={{width:'100%'}}
                            name="password"
                            label="Enter your password"
                            type="password"
                            variant="outlined"
                            {...formik.getFieldProps('password')}
                            {...errorHelper(formik,'password')}
                        />
                    </div>
                    <div className="d-flex flex-column justify-content-center ">
                    <Button style={{fontSize:"10px" , fontWeight:"400" }}    disableRipple variant="contained" color="primary" type="submit" size="large">
                     تسجيل الدخول
                    </Button>
                   
</div>
                </form>

            </div>
        </Grid>
        </>
    )
}

export default Auth;