import React from "react";
import logo from "../Bin/tienda2.png";

const Logger= () => {
    return (
        <div class="login">
          <div class="contenedor_formato">
            <div class="logo">
              <img src={logo} alt="logo" />
            </div>
    
            <form action="/" class="formulario">
              <label for="username" class="Label">
                Email adress:
              </label>
              <input
                type="email"
                id="Username"
                placeholder="user@email.com"
                class="Input input_username"
              />
    
              <label for="repassword" class="Label">
                Password:
              </label>
              <input
                type="password"
                id="repassword"
                placeholder="Password"
                class="Input input_repassword"
              />
            </form>
    
            <input type="submit" value="Log in" class="Colorprimario loginbut" />
    
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