import React, { useState } from "react";
import { register, authorize } from "../api/auth";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function RegisterPage( {onAuthorized }) {
  const [form, setForm] = useState({} );
  const [token,setToken] = useState("");

  const handleRegister = async () => {
    const reg = await register(form);
    const auth = await authorize( {...form, accessCode: reg.accessCode });
    setToken(auth.access_token);
    onAuthorized(auth.access_token);
  };

  return (
    <Box>
      <Typography variant="h5">Register & Authorize</Typography>
      <Button variant="contained" onClick={handleRegister}>Register & Get Token</Button>
      {token && <Typography>Token saved, You may proceed</Typography>}
    </Box>
  );
}