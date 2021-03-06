import React, { useState, useEffect } from "react";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordInputField = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(null);

  const { name } = props;
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    console.log(password);
  }, [password]);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    props.onChange(e.target.value);
  };
  return (
    <>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{name}</InputLabel>
        <OutlinedInput
          style={{ backgroundColor: "#f6f6f6" }}
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => handlePasswordChange(e)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </>
  );
};

export default PasswordInputField;
