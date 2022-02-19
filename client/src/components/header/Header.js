import React from "react";
import "./Header.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LogOutUser, UserActions } from "../../store/userStore";

function Header() {
  const loggedIn = useSelector((state) => state.App.loggedIn);
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(loggedIn);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="#b060d9" className="navbar">
        <div className="leftNav">
          <h1> POULTRY ANALYSIS </h1>
        </div>
          <div className="middle">
            {loggedIn ? (
              <>
                <Link to="/">الصفحة الرئيسية</Link>
              </>
            ) : (
              <Link to="/Auth">تسجيل البيانات</Link>
            )}
          </div>
          <div className="rightNav">
           {loggedIn && <button
              className="btn btn-dark"
              onClick={() => {
                dispatch(LogOutUser());
                dispatch(UserActions.removeLabs())
                history.replace("/Auth");
              }}
            >
              تسجيل الخروج
            </button>}
          </div>
       
      </Navbar>
    </>
  );
}

export default Header;
