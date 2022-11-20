import React from "react";
import logo from "../Bin/tienda2.png"
import {useState} from "react"
import {Link} from "react-router-dom"
import clienteAxios from '../config/axios';

import Alerta from './alerta.js';


const Sign= () => {
    
    const [ nombre, setNombre ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ repetirPassword, setRepetirPassword ] = useState('');
    const [ telefono, setTelefono ] = useState('');
    const [ direccion, setDireccion ] = useState('');
    
    const [ alerta, setAlerta ] = useState({});
    
    const handleSudmit = async (e) =>{
        e.preventDefault();
    
        if([nombre, email, password, repetirPassword].includes('')){
          setAlerta({msg: "Hay campos vacios", error: true});
          return;
        };
    
        if(password !== repetirPassword){
          setAlerta({msg: "Los password no son iguales", error: true});
          return;
        }
    
        if(password.length < 6){
          setAlerta({msg: "El password es muy corto, agrega minimo 6 caracteres", error: true});
          return;
        }
    
        setAlerta({});
    
          // Creando el usuario en la API
          
          try {
            
            const {data} = await clienteAxios.post('/login/home/create', { nombre, email, password, telefono, direccion } );

            console.log(data);

            setAlerta({
                msg: "Creado correctamente, revisa tu email", 
                error: false
            });
    
            setNombre("");
            setEmail("");
            setPassword("");
            setRepetirPassword("");
            setTelefono("");
            setDireccion("");
            
    
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            });
        }
    };
    
      const { msg } = alerta;

    return(
        <div class="login">
            <div class="contenedor_formato">
            
                <div class="logo">
                    <img  src={logo} alt="logo"  />
                </div>
                { msg &&  <Alerta 
                                alerta={alerta}
                            />
                        }  
                
        

                <label id="titulo" class="titulo"> Crea tu usuario </label>
        
                <form onSubmit={handleSudmit} class="signup">
                    
                    <div class="Signcontainer">
                    <label htmlFor="Name" class="Label">Name:</label>
                    <input type="Name"  placeholder="Tu Nombre Aquí" class="Input input_name" value={nombre} onChange={ e => setNombre(e.target.value)}/>

                    <label htmlFor="mail" class="Label">User email:</label>
                    <input type="email"  placeholder="Usermaile@eamil.com" class="Input input_useremail" value={email} onChange={ e => setEmail(e.target.value)} />

                    <label htmlFor="repassword" class="Label">Contraseña:</label>
                    <input type="password"  placeholder="**************" class="Input input_password"value={password} onChange={ e => setPassword(e.target.value)} />

                    <label htmlFor="repassword" class="Label">Repita la Contraseña:</label>
                    <input type="password"  placeholder="**************" class="Input input_password" value={repetirPassword} onChange={ e => setRepetirPassword(e.target.value)}/>

                    <label htmlFor="Name" class="Label">Dirección:</label>
                    <input type="Name"  placeholder="Tu ubicación Aquí" class="Input input_name" value={direccion} onChange={ e => setDireccion(e.target.value)}/>
                    
                    <label htmlFor="Name" class="Label">Telefono:</label>
                    <input type="String"  placeholder="+573111111111" class="Input input_name" value={telefono} onChange={ e => setTelefono(e.target.value)}/>                     

                    
                    </div>

                <input type="submit" value="Enviar" class="Colorprimario loginbut"/>  
                </form>
        
                           
                
                  <a href ="Contraseña.html" class="footer">Forgot my password?</a>
                  
                  <div>
                  <Link to="/" className=''>Ya tengo cuenta</Link>
                  </div>

                
                       
        
                </div>
        </div>
        
    

      
    );

}
export default Sign;