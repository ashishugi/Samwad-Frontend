// @mui/icons-material/Google
import React, { useState } from "react";
import Wrapper from "./style";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";

import pic1 from '../../assets/images/Login/pic1.svg';

import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AppleIcon from '@mui/icons-material/Apple';


const Login = () => {
    const [inputFeild,setinput]=useState({email:null,password:null,error:null});
    const [snackbar,setsnackbar]=useState({vertical:'top', horizontal:'center',open:false})

    const click=(e)=>{
        handleClick(e);
        handleSubmit(e);
    }

    const validateEmail = (email) => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };

const handleSubmit=(e)=>{
    console.log("handlesubmit is called");
    setsnackbar(()=>{return{open:true}})
    e.preventDefault()
    
}      
const handleClick=(e)=>{
    console.log("handleclick is called")
    
    // console.log(inputFeild.email)
    // console.log(inputFeild.password)
    setinput(()=>{return{error:null}})
    if(inputFeild.email === null  ||inputFeild.password === null ){
        setinput(()=>{return{error:"feilds are empty"}})
        console.log('error if feid is empty='+inputFeild.error)
        console.log("empty feild mail and pass="+inputFeild.email+""+inputFeild.password);
    }else if(!validateEmail(inputFeild.email)){
        setinput(()=>{return{error:"email not valid"}})
        // console.log("email feild"+inputFeild.error)
    }
    if(inputFeild.error === null){
        //
    }else{
        console.log("error message of else="+inputFeild.error)
    }
    console.log("error without else="+inputFeild.error)
    e.preventDefault()
}


const handleClose=(e)=>{
    setsnackbar(()=>{
      return { open : false}
    });
    e.preventDefault()
}

function Action(){
    console.log("action function")
    return(
        <>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
    )
}



  const submit = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setinput((preValue) => {
      if (name === "email") {
        return {
          email: val,
          password: preValue.password,
        };
      } else if (name === "password") {
        return {
          email: preValue.email,
          password: val,
        };
      }
    });
  };

<<<<<<< HEAD
  return (
    <>
      <Wrapper>
        <div className="main">
          <div className="center">
            <div className="left">
              <div className="left-item">
                <div className="top">
                  <div className="para" style={{ width: "100%" }}>
                    <p>
                      Have an account?
                      <span style={{ color: "blue" }}>Sign in</span>
                    </p>
                  </div>
                </div>
                <div className="middle">
                  <div className="heading">
                    <h2>Welcome To Samwad</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur animi i klk
                    </p>
                  </div>
                  <div className="input-frm">
                    <form noValidate autoComplete="off">
                      {/* ---------startform--------------------------- */}
                      <TextField
                        onChange={submit}
                        name="email"
                        style={{ marginTop: "1.2rem" }}
                        id="outlined-basic"
                        label="email"
                        variant="outlined"
                        fullWidth
                        required
                        value={inputFeild.email}
                      />
                      <TextField
                        name="password"
                        onChange={submit}
                        style={{ marginTop: "1.2rem" }}
                        id="outlined-password-input"
                        label="password"
                        variant="outlined"
                        type="password"
                        autoComplete="current-password"
                        fullWidth
                        required
                        value={inputFeild.password}
                      />
                      <Button
                        style={{ background: "blue", marginTop: "2rem" }}
                        fullWidth
                        type="submit"
                        color="white"
                        varient="contained"
                      >
                        submit{" "}
                      </Button>

                      {/* --------------end form------------------------ */}
                    </form>
                  </div>
=======
}


    
    return (
        <>
        <Wrapper>
            <div className="main">
                <div className="center">
                    <div className="left">
                       <div className="left-item">
                        <div className="top">
                             <div className="para" style={{ width:"100%"}}>
                                 <p>Have an account?<span style={{color:"rgba(146,227,169,1)",marginLeft:'.5rem'}}>Sign in</span></p>
                             </div>
                        </div>
                        <div className="middle">
                         <div className="heading" >
                         <h2>Welcome To Samwad</h2>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur animi i klk
                         </p>
                        </div>
                        <div className="input-frm">
                            <form noValidate autoComplete="off">
                            {/* ---------startform--------------------------- */}
                            <TextField 
                            onChange={submit}
                            name="email"
                            style={{marginTop:"1.2rem"}}
                            id="outlined-basic" 
                            label="email" 
                            variant="outlined"
                            fullWidth
                            required
                            value={inputFeild.email}
                            className="text-feild"
                             />
                              <TextField 
                              className="text-feild"
                              name="password"
                              onChange={submit}
                              style={{marginTop:"1.2rem"}}
                            id="outlined-password-input" 
                            label="password" 
                            variant="outlined"
                            type="password"
                            autoComplete="current-password"
                            fullWidth
                            required
                            value={inputFeild.password}
                             />
                             <Button
                             className="text-feild"
                             style={{background:"rgba(146,227,169,1)",marginTop:"2rem",color:'white'}}
                                fullWidth
                                 type="submit"
                                 color="white"
                                 varient="contained"
                                 onClick={(e)=>{
                                     handleClick(e);handleSubmit(e)
                                 }}
                             >submit </Button>
                            {
                                (inputFeild.error === null) ? ("") : (
                               
                                    <Snackbar 
                                anchorOrigin={{ vertical:'top', horizontal:'left' }}
                                open={snackbar.open}
                                onClose={handleClose}
                                message={inputFeild.error}
                                key={snackbar.vertical + snackbar.horizontal}
                                action={Action()}
                                />
                               
                                )
                            }
                                {/* --------------end form------------------------ */}
                            </form>
                        </div>
                           

                        <div className="horizontal-line">
                              <div className="first-line">
                                  <hr />
                              </div>
                              <div className="or" > OR SIGNUP WITH</div>
                              <div className="last-line">
                                  <hr />
                              </div>
                            </div>

                        </div>
                        <div className="bottom">
                            <div className="textfield" style={{background:'rgba(146,227,169,0.3)',color:"#4da2f9",outline:"1px solid rgba(0,0,0,0.2)",width:"4.2rem",height:"2rem",padding:".2rem 0rem 0 1.2rem"}} ><GoogleIcon /></div>
                            <div className="textfield" style={{background:'rgba(146,227,169,0.3)',color:"#4da2f9",outline:"1px solid rgba(0,0,0,0.2)",width:"4.2rem",height:"2rem",padding:".2rem 0rem 0 1.2rem"}} ><FacebookOutlinedIcon /></div>
                            <div className="textfield" style={{background:'rgba(146,227,169,0.3)',color:"#4da2f9",outline:"1px solid rgba(0,0,0,0.2)",width:"4.2rem",height:"2rem",padding:".2rem 0rem 0 1.2rem"}} ><AppleIcon /></div>
>>>>>>> e738c77b387fb7f21de21600f0a83fb771047734

                  <div className="horizontal-line">
                    <div className="first-line">
                      <hr />
                    </div>
<<<<<<< HEAD
                    <div className="or"> OR SIGNUP WITH</div>
                    <div className="last-line">
                      <hr />
=======
                    <div className="right">
                        <img src={pic1} alt="login" />
>>>>>>> e738c77b387fb7f21de21600f0a83fb771047734
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div
                    className="textfield"
                    style={{
                      color: "#4da2f9",
                      outline: "1px solid rgba(0,0,0,0.2)",
                      width: "4.2rem",
                      height: "2rem",
                      padding: ".2rem 0rem 0 1.2rem",
                    }}
                  >
                    <GoogleIcon />
                  </div>
                  <div
                    className="textfield"
                    style={{
                      color: "#4da2f9",
                      outline: "1px solid rgba(0,0,0,0.2)",
                      width: "4.2rem",
                      height: "2rem",
                      padding: ".2rem 0rem 0 1.2rem",
                    }}
                  >
                    <FacebookOutlinedIcon />
                  </div>
                  <div
                    className="textfield"
                    style={{
                      color: "#4da2f9",
                      outline: "1px solid rgba(0,0,0,0.2)",
                      width: "4.2rem",
                      height: "2rem",
                      padding: ".2rem 0rem 0 1.2rem",
                    }}
                  >
                    <AppleIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={pic3} alt="login" />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default Login;
