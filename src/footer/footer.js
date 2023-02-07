import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
} from "@mui/material";
import { styled } from '@mui/material/styles';


const ColorFooter = styled(AppBar)(({ theme }) => ({
    color: 'black',
    backgroundColor: '#e9ecef'
  }));


  const Footer = () => <>

  <ColorFooter position="static" elevation={0} component="footer" color="inherit">
      <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="caption">liag@unicamp.br</Typography>
      </Toolbar>
  </ColorFooter>
</>

export default Footer;