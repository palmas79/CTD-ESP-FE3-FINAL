import React from 'react'
import { Link } from 'react-router-dom'
import {route} from "./utils/route"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* <img src='/public/images/DH.png' alt='Logo'/> */}
      <Link to={route.home}><h3>Inicio</h3></Link>
      <Link to={route.contact}><h3>Contacto</h3></Link>
      <Link to={route.favs}><h3>Favoritos</h3></Link>


      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar