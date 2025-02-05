import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";


function Login(){

    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const onChange = (event) => {
        const{name , value} = event.target;
        setUser({...user,[name]:value})
        // ... mantem o estado inicial atual do user e só altera um unico valor
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Email: " +user.email+ " \n" + "Senha: "+user.password)
    }

    return(
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop:8,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Avatar sx={{margin:1, backgroundColor:"green"}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5"> 
                    Vio
                </Typography>
                {/* /mt é a abreviação de marginTop */}
                <Box component="form" sx={{mt:1}} onSubmit={handleSubmit} noValidate> 
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    margin="normal"
                    value={user.email}
                    onChange={onChange}
                    />

                    <TextField
                    required
                    fullWidth
                    id="password"
                    label="Senha"
                    name="password"
                    margin="normal"
                    type="password"
                    value={user.password}
                    onChange={onChange}
                    />

                    <Button sx={{mt:3, mb:2, backgroundColor: "green"}}
                    fullWidth
                    type="submit"
                    variant="contained"
                    >Entrar</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Login;