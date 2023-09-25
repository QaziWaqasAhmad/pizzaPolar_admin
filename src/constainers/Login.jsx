import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import Buttons from "../components/Buttons";
import TextFeilds from "../components/TextFeilds";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { loginAdmin } from "../services/products/Products";
import { AppContext } from "../context";

const Login = () => {
  const {user, login} = useContext(AppContext)
  // console.log(user?.token, "sadasdasdasdasdadasdasd")
  const [userss, setUserss] = useState({
    email:'',
    password:''
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



   const loginUser = () =>{
       loginAdmin(userss).then((res) =>{
        //  console.log(res.data.data, "dasdasdas");
        if(res.status === 200){ 
          let data = res?.data?.data;
          localStorage.setItem('users', JSON.stringify(data))
          login(data)
        }
       }).catch((error) =>{
        console.log(error);
       })
   }


   const handleOnChange = (e) =>{
        setUserss({
          ...userss,
          [e.target.name]:e.target.value
        })
   }

  return (
    <>
      <div className="login">
        <div className="container-fluid">
          <div className="row min-vh-100 ">
            <div className="col-md-7 bg-warning  d-flex justify-content-center align-items-center">
              <div className="logo d-flex justify-content-center align-items-center mx-auto">
                  <img src={logo} alt="logo" className="w-50" draggable="false" />
              </div>
            </div>
            <div className="col-md-5  d-flex justify-content-center align-items-center ">
              <div className="login-form">
              <div className="heading mb-4">
              <h1>PIZZA POLAR</h1>
              <p>Welcome Back!</p>
              </div>
                <TextFeilds
                label="Email"
                type="email"
                id="email"
                className="email-input mt-4"
                size="small"
                name="email"
                value={userss.email}
                onChange={handleOnChange}
                />  
               <div className="password-input">
                  <TextField
                    id="password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    className="password-input"
                    name="password"
                    onChange={handleOnChange}
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={togglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <Link>
                <p className="text-end mt-2" style={{fontSize:"13px"}}>Forgot Password</p>
                </Link>
                <div className="">
                <Buttons
                name="Login"
                className="login-button "
                onClick={loginUser}
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;