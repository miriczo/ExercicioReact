import React, {useState, useEffect} from 'react';
import { Grid, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const Login = () => {
    const [login,setLogin] = useState(""); 
    const [senha,setSenha] = useState(""); 
    
    return (
        
        <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="login" aria-describedby="login_titulo_helper_text" value={login} 
              onChange={e => { setLogin(e.target.value) }} />
              <FormHelperText id="login_titulo_helper_text">Login</FormHelperText>
            </FormControl>
            <FormControl fullWidth>
              <Input id="senha" aria-describedby="senha_titulo_helper_text" value={senha} 
              onChange={e => { setSenha(e.target.value) }} />
              <FormHelperText id="senha_titulo_helper_text">Senha</FormHelperText>
            </FormControl>
            <p></p>
            <button><a href="/ListarTarefa">Entrar</a></button>
          </Grid>
          
         
         
        
    )
}

export default Login

