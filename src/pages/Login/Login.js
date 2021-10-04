// @mui/icons-material/Google
import React,{ useState } from 'react';
import  Wrapper from './style';
import  Button  from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';

import pic3 from '../../assets/images/Login/pic3.svg';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AppleIcon from '@mui/icons-material/Apple';
const Login = () => {
    const [inputFeild,setinput]=useState({email:"",password:""});

const submit=(e)=>{
    const name=e.target.name;
    const val=e.target.value;
    setinput((preValue)=>{
        if(name === "email"){
            return {
            email : val,
            password : preValue.password,
             };
            }else if(name === "password"){
            return {
            email : preValue.email,
            password : val,
             };
            }
        })

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
                                 <p>Have an account?<span style={{color:"blue"}}>Sign in</span></p>
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
                             />
                              <TextField 
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
                             style={{background:"blue",marginTop:"2rem"}}
                                fullWidth
                                 type="submit"
                                 color="white"
                                 varient="contained"
                                 
                             >submit </Button>

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
                            <div className="textfield" style={{color:"#4da2f9",outline:"1px solid rgba(0,0,0,0.2)",width:"4.2rem",height:"2rem",padding:".2rem 0rem 0 1.2rem"}} ><GoogleIcon /></div>
                            <div className="textfield" style={{color:"#4da2f9",outline:"1px solid rgba(0,0,0,0.2)",width:"4.2rem",height:"2rem",padding:".2rem 0rem 0 1.2rem"}} ><FacebookOutlinedIcon /></div>
                            <div className="textfield" style={{color:"#4da2f9",outline:"1px solid rgba(0,0,0,0.2)",width:"4.2rem",height:"2rem",padding:".2rem 0rem 0 1.2rem"}} ><AppleIcon /></div>

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
    )
}
export default Login;