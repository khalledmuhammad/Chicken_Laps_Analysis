import "./App.css";
import React, { useEffect, useState } from "react";
import MainHeader from "./components/header/MainHeader";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, Bounce } from "react-toastify";
import {
  getAllUsers,
  GetLabs,
  isAuthedUser,

} from "./store/userStore";
import CircularProgress from "@mui/material/CircularProgress";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./components/Routes/Routes";

function App() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.App.loggedIn);
  const isAdmin = useSelector((state) => state.Users.user.role);

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    dispatch(isAuthedUser());
  }, [dispatch]);
  useEffect(() => {
    if (isLoggedin) {
      if (isAdmin === "admin") {
        dispatch(getAllUsers());

      }
      dispatch(GetLabs())
      
    }
    return ()=>{
      setLoading(false)
      console.log("loading set to false")
    }
  }, [isLoggedin, isAdmin, dispatch]);

  return (
    <>
      <ToastContainer draggable={true} transition={Bounce} autoClose={2000} />
      <MainHeader />
      {loading ? (
        <CircularProgress
          color="secondary"
          style={{ marginTop: "100px", marginLeft: "50vw" }}
        />
      ) : (
        <Routes />
      )}
    </>
  );
}

export default App;
