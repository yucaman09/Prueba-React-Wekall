import axios from "axios";
import md5 from "md5";
import Cookies from 'universal-cookie'

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import './LoginScreen.css'

const cookies = new Cookies();

export const LoginScreen = () => {
  
  useEffect(() => {
    if (cookies.get("username")) {
      window.location.href = "./";
    }

  }, [])

  const baseUrl = "http://localhost:3001/usuarios";

  const [inputUser, setInputUser] = useState('');
  const [inputPass, setInputPass] = useState('');

  

  const handleInputChangeUser = (e) => {
    setInputUser(e.target.value);
  };

  const handleInputChangePassword = (e) => {
    setInputPass(e.target.value);
  };

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    await axios.get(baseUrl, { params: { username: inputUser, password: md5(inputPass) } })

      .then(response => {
        return response.data;
      })

      .then(response => {
        if (response.length > 0) {
          let respuesta = response[0];
          cookies.set('id', respuesta.id, { path: '/' });
          cookies.set('apellido_paterno', respuesta.apellido_paterno, { path: '/' });
          cookies.set('apellido_materno', respuesta.apellido_materno, { path: '/' });
          cookies.set('nombre', respuesta.nombre, { path: '/' });
          cookies.set('username', respuesta.username, { path: '/' });
          alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
          navigate('/')
        } else {
          alert('El usuario o la contrasenia no son correctos')
        }
      })

      .catch(error => {
        console.log(error);
      })

  }


  return (

    <div className="containerPrincipal">
      <div className="containerSecundario">
        <form className="form-group" onSubmit={handleLogin}>
          <label>Usuario: </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={handleInputChangeUser}
          />
          <br />
          <label>Contraseña: </label>
          <br />
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleInputChangePassword}
          />
          <br />
          <button className="btn btn-primary" onClick={handleLogin} >Iniciar Sesion</button>
        </form>
      </div>
    </div>
  )
}
