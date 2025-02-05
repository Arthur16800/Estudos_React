import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";


function Cadastro(){

    const [user, setUser] = useState({
        email:"",
        password:"",
        age: 0,
        name:""
    })

    const onChange = (event) => {
        const{name , value} = event.target;
        setUser({...user,[name]:value})
        // ... mantem o estado inicial atual do user e só altera um unico valor
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if(user.age <= 0){
            return alert("Insira uma idade válida")
        }
        alert("Email: " +user.email+ " \n" + "Senha: "+user.password +" \n" + "Idade: " +user.age+ " \n" + "Nome: "+user.name)
       
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
                <Avatar sx={{margin:1, backgroundColor:"#FFA500"}}>
                    <AssignmentIndIcon/>
                </Avatar>
                <Typography component="h1" variant="h5"> 
                    Cadastre-se
                </Typography>
                {/* /mt é a abreviação de marginTop */}
                <Box component="form" sx={{mt:1}} onSubmit={handleSubmit}> 
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    margin="normal"
                    type="email"
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

                   <TextField
                    required
                    fullWidth
                    id="age"
                    label="Idade"
                    name="age"
                    margin="normal"
                    type="number"
                    value={user.age}
                    onChange={onChange}
                    />

                   <TextField
                    required
                    fullWidth
                    id="name"
                    label="Nome"
                    name="name"
                    margin="normal"
                    value={user.name}
                    onChange={onChange}
                    />

                    <Button sx={{mt:3, mb:2, backgroundColor: "#FFA500"}}
                    fullWidth
                    type="submit"
                    variant="contained"
                    >Cadastrar</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Cadastro;