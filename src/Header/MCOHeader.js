import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
} from "@mui/material";
import { styled } from '@mui/material/styles';


const ColorMCOHeader = styled(AppBar)(({ theme }) => ({
    color: 'black',
    backgroundColor: '#ecb177'
  }));


  const MCOHeader = () => <>

  <ColorMCOHeader position="static" elevation={0} component="footer" color="inherit">
      <Toolbar style={{ justifyContent: "center" }}>
      <Typography sx={{
            color: 'black',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 28,
          }}>Sistema de Classificação de Métodos - SCM</Typography>
      </Toolbar>
  </ColorMCOHeader>
</>

export default MCOHeader;