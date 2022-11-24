import React from "react";
import logo from "../Bin/tienda2.png";


import { useState } from 'react';
import useAuth from "../hooks/useAuth.jsx";
import Alerta from './alerta.js';


const Olvido = () => {

  const { guardarPassword } = useAuth();
  const [alerta, setAlerta] = useState({});
  const [password, setPassword] = useState({
    pwd_actual: "",
    pwd_nuevo: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(password).some((campo) => campo === "")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    if (password.pwd_nuevo.length < 6) {
      setAlerta({
        msg: "El Password debe tener mínimo 6 caracteres",
        error: true,
      });
      return;
    }
    const respuesta = await guardarPassword(password);
    setAlerta(respuesta);
  };

  const { msg } = alerta;

  return (
        <div class="login">
          
          <div class="contenedor_formato">
            <div class="logo">
              <img src={logo} alt="logo" />
              
              
            </div>
            <label id="titulo" class="titulo"> Reestablezca su contraseña </label>
            <div>
            { msg && <Alerta
                alerta={alerta}
                />
                } 
            </div>
            <form 
            onSubmit={handleSubmit} 
            class="formulario">
             
              <label for="username" class="Label">
                Password
              </label>
              <input
                name="pwd_actual"
                type="password"
                id="Password"
                class="Input input_username"
                placeholder="'Escribe tu password actual"
                onChange={e => setPassword({
                ...password,
                [e.target.name] : e.target.value
                })}
                
              />
    
              <label for="repassword" class="Label">
                Nueva Contraseña
              </label>
              <input
                name="pwd_nuevo"
                type="password"
                id="repassword"
                placeholder="Nuevo Password"
                class="Input input_repassword"
                onChange={e => setPassword({
                  ...password,
                  [e.target.name] : e.target.value
                  })}
              />

              <input type="submit" value="Cambiar Contraseña" class="Colorprimario loginbut" />
            </form>
    
            
    
          </div>
        </div>
      )
    };

export default Olvido;