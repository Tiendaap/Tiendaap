import React from "react";
import logo from "../Bin/tienda2.png";

import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import useAuth from "../hooks/useAuth.jsx";
import Alerta from './alerta.js';
import clienteAxios from '../config/axios.jsx';

const Logger= () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ alerta, setAlerta ] = useState({});
  const { setAuth } = useAuth();
  const navigate= useNavigate;
  

  const handleSudmit = async (e) =>{
    e.preventDefault();
    console.log("Validacion");
    if([email, password].includes('')){
    setAlerta({msg: "Todos los Campos son Obligatorios", error: true});
    return;
    };
    // Auntenticar al usuario
    try {
    const { data } = await clienteAxios.post('usuarios/login', {
    email,
    password
    });
    localStorage.setItem('token', data.token);
    console.log(data);
    
    setAuth(data);
    navigate('/Admin/home/Productos');

    

    } catch (error) {
    setAlerta({
    msg: error.response.data.msg,
    error: true
    });
    }
    }
    const { msg } = alerta;

    return (
        <div class="login">
          <div class="contenedor_formato">
            <div class="logo">
              <img src={logo} alt="logo" />
              
            </div>
            <div>
            { msg && <Alerta
                alerta={alerta}
                />
                } 
            </div>
            <form 
            onSubmit={handleSudmit} 
            class="formulario">
             
              <label for="username" class="Label">
                Email adress:
              </label>
              <input
                type="email"
                id="Username"
                placeholder="user@email.com"
                class="Input input_username"
                onChange={ e => setEmail(e.target.value)}
              />
    
              <label for="repassword" class="Label">
                Password:
              </label>
              <input
                type="password"
                id="repassword"
                placeholder="Password"
                class="Input input_repassword"
                onChange={ e => setPassword(e.target.value) }
              />

              <input type="submit" value="Log in" class="Colorprimario loginbut" />
            </form>
    
            
    
            <a href="Contraseña.html" class="footer">
              Forgot my password?
            </a>
    
            <a href="/sign_up/home/" type="submit" class="Colorsecundario loginbut">
              Sign up
            </a>
          </div>
        </div>
      )
    };

export default Logger;