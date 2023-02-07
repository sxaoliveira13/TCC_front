import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material';
import { styled, withTheme } from '@mui/material/styles';


const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    backgroundColor: '#fb8c00',
    '&:hover': {
      backgroundColor: '#023047',
      color: 'white'

    },
  }));
  

const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    
    return(

       <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar ></Avatar>
                    <h2>Login</h2>
                    <h4>Sistema disponivel apenas para administradores!</h4>
                </Grid>
                <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required/>
                
                <ColorButton type='submit' color='inherit' variant="contained" style={btnstyle} fullWidth>Entrar</ColorButton>
                
            </Paper>
        </Grid>
    )
}

export default Login;