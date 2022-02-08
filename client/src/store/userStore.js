import { createSlice } from "@reduxjs/toolkit";
import { AppActions } from "./AppStore";
import { toast } from "react-toastify";
import { getAuthedToken, RemoveCookie , getAuthedTokenChicken } from "../Utils/Helpers";
import axios from "axios";


const initialState = {
  user: {
    username: "",
    role: "",
  },
  labs: [] || null,
  companies : [] || null
};

const user = createSlice({
  name: "User",
  initialState,
  reducers: {
    signinUser(state, action) {
      state.user = action.payload;
    },
    AddCompanies(state, action) {
      state.companies = action.payload;
    },
    AddLabs(state, action) {
      state.labs = action.payload;
    },
    removeLabs(state){
      state.labs = []
    },
    removeCompanies(state){
      state.companies = []
    },
    RecieveNewCompany(state, action) {
      state.companies.push(action.payload);
    },
  },
});

//user actions
export const LoginUser = (values) => {
  return async (dispatch) => {
    try {
      const request = await axios.post(
        `/api/users/signin`,
        {
          username : values.username,
          password : values.password,
        },
        
      );
    const data = request.data; 
    
       
          if (data.message) {
            toast.error(data.message, {
              position: toast.POSITION.TOP_CENTER,
            });
          } else {
            dispatch(UserActions.signinUser(data));
            dispatch(AppActions.setLoggedin());
            toast.success("logged in success");
          }
      
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
};

export const isAuthedUser = () => {
  return async (dispatch) => {
    try {
      await fetch("/api/users/isauthed", getAuthedToken)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            dispatch(UserActions.signinUser({}));
            dispatch(AppActions.setLogOut());
          } else {
            dispatch(UserActions.signinUser(data));
            dispatch(AppActions.setLoggedin());
            toast.success(` hey,${data.username}`);
          }
        });
    } catch (error) {
      dispatch(UserActions.signinUser({}));
      dispatch(AppActions.setLogOut());
      toast.error("sing up or login");
    }
  };
};
export const LogOutUser = () => {
  return async (dispatch) => {
    RemoveCookie();
    dispatch(UserActions.signinUser({}));
    dispatch(AppActions.setLogOut());
    toast.success("Logged out Successfully");
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      await fetch("/api/users/View-users", getAuthedTokenChicken())
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            toast.error(data.message, {
              position: toast.POSITION.TOP_CENTER,
            });
          } else {
            dispatch(UserActions.AddCompanies(data));
          }
        });
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
};

export const AddNewCompany=(values)=>{
  return async (dispatch)=>{
    try {
      const request = await axios.post(
         `/api/users/register`,
         {
           username : values.username,
           password : values.password,
         },
         getAuthedTokenChicken()
       );
     const company = request.data; 
     if(company.message){
      toast.error(company.message);

     }
     else
 
     {  dispatch(UserActions.RecieveNewCompany(company));
 
       toast.success("company added  Successfully");}
     } catch (error) {
       toast.error(error.message);

     }
  }
}
export const GetLabs = () => {
  return async (dispatch) => {
    try {
      await fetch("/api/Labs/get-labs")
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            toast.error(data.message, {
              position: toast.POSITION.TOP_CENTER,
            });
          } else {
            dispatch(UserActions.AddLabs(data));
          }
        });
    } catch (error) {
      toast.error(error, {
    
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
};

/*----------------------------*/
export const UserActions = user.actions;
export default user.reducer;
