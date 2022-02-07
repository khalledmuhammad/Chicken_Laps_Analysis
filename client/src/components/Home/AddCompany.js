import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { AddNewCompany } from "../../store/userStore";

function AddCompany() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(username, password);
    if (username.trim() === "" || password.trim() === "") {
      toast.error("please fill in all the values");
      return;
    }
    dispatch(AddNewCompany({ username, password }));
    history.push("/");
  };

  return (
    <form
      className="d-flex justify-content-center align-items-center"
      style={{ height: "50vh", flexDirection: "column" }}
      onSubmit={SubmitHandler}
    >
      <TextField
        id="outlined-basic"
        className="mb-2"
        label="company name"
        variant="outlined"
        onChange={(e) => setusername(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" type="submit" className="mt-2">
        Add company
      </Button>
    </form>
  );
}

export default AddCompany;
