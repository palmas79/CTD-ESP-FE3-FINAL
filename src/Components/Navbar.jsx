import React from 'react'
import { Link } from 'react-router-dom'
import {route} from "./utils/route"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      
        <Link to={route.home}>
          <h3>Inicio</h3>
        </Link>

        <Link to={route.contact}>
          <h3>Contacto</h3>
        </Link>

        <Link to={route.favs}>
          <h3>Favoritos</h3>
        </Link>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar