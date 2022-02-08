import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {   getAuthedTokenChicken } from "../Utils/Helpers";
import axios from "axios";

const initialState = { 
  loggedIn: null,
  BrokenData : [] || null,
  HatchingData : [] || null ,
  FertData : [] || null ,
  EggData : [] || null,

};

const App= createSlice({
  name: "app",
  initialState,
  reducers: {
   

    setLoggedin(state){
        state.loggedIn = true
    },  

    setLogOut(state){
      state.loggedIn = false
  } ,
     setBrokenData(state,action){
       state.BrokenData = action.payload
     },
  
     setHatchingData(state,action){
      state.HatchingData = action.payload
    },
    setFertData(state,action){
      state.FertData = action.payload
    },
    setEggData(state,action){
      state.EggData = action.payload
    },
    EmptyBroken(state){
      state.BrokenData = []
    },
    EmptyFert(state){
      state.FertData = []
    },
    EmptyEggData(state){
      state.EggData = []
    },
    EmptyHatching(state){
      state.HatchingData = []
    },
    
  },
});
export const SaveBroken=(mid,values)=>{
  return async (dispatch)=>{
    try {
      const request = await axios.post(
         `/api/broken/savebroken/${mid}`,
         {
         values
         },
         getAuthedTokenChicken()
       );
     const Data = request.data; 
     if(Data.message){
      toast.error(Data.message);
}
     else toast.success("تم حفظ البيانات بنجاح ");
     } catch (error) {
       toast.error(error.message);

     }
  }
}
export const SaveHatching=(mid,values)=>{
  return async (dispatch)=>{
    try {
      const request = await axios.post(
         `/api/hatching/savehatching/${mid}`,
         {
         values
         },
         getAuthedTokenChicken()

       );
     const Data = request.data; 
     if(Data.message){
      toast.error(Data.message);
}
     else toast.success("تم حفظ البيانات بنجاح ");
     } catch (error) {
       toast.error(error.message);

     }
  }
}
export const SaveEggData=(mid,values)=>{
  return async (dispatch)=>{
    try {
      const request = await axios.post(
         `/api/eggData/eggData/${mid}`,
         {
         values
         },
         getAuthedTokenChicken()
       );
     const Data = request.data; 
     if(Data.message){
      toast.error(Data.message);
}
     else toast.success("تم حفظ البيانات بنجاح ");
     } catch (error) {
       toast.error(error.message);

     }
  }
}
export const SaveFert=(mid,values)=>{
  return async (dispatch)=>{
    try {
      const request = await axios.post(
         `/api/fertilization/savefert/${mid}`,
         {
         values
         },
         getAuthedTokenChicken()
       );
     const Data = request.data; 
     if(Data.message){
      toast.error(Data.message);
}
     else toast.success("تم حفظ البيانات بنجاح ");
     } catch (error) {
       toast.error(error.message);

     }
  }
}

export const GetBroken=(Uid,Mid)=>{
  return async (dispatch)=>{
    try {
      const request = await axios.get(
         `/api/broken/admin/${Uid}/${Mid}`,
        
         getAuthedTokenChicken()
       );
     const Data = request.data; 
       dispatch(AppActions.setBrokenData(Data))
     
     } catch (error) {
       toast.error("لا يوجد بيانات");

     }
  }

}
export const GetFert=(Uid,Mid)=>{
  return async (dispatch)=>{
    try {
      const request = await axios.get(
         `/api/fertilization/admin/${Uid}/${Mid}`,
         
         getAuthedTokenChicken()
       );
     const Data = request.data; 
     dispatch(AppActions.setFertData(Data))

     
     } catch (error) {
      toast.error("لا يوجد بيانات");

     }
  }

}

export const GetEggData=(Uid,Mid)=>{
  return async (dispatch)=>{
    try {
      const request = await axios.get(
         `/api/eggData/admin/${Uid}/${Mid}`,
         
         getAuthedTokenChicken()
       );
     const Data = request.data; 
     dispatch(AppActions.setEggData(Data))
     
     } catch (error) {
      toast.error("لا يوجد بيانات");

     }
  }

}

export const GetHatching=(Uid,Mid)=>{
  return async (dispatch)=>{
    try {
      const request = await axios.get(
         `/api/hatching/admin/${Uid}/${Mid}`,
         
         getAuthedTokenChicken()
       );
     const Data = request.data; 
     dispatch(AppActions.setHatchingData(Data))
     
     } catch (error) {
      toast.error("لا يوجد بيانات");

     }
  }

}

export const AppActions = App.actions;
export default  App.reducer;
