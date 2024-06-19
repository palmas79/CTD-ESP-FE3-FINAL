
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Detail = () => {
  const [doctor, setDoctor] = useState({})
  const params = useParams();

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;  
 
  console.log(params);

  useEffect(() => {
    axios(url).then((res) => setDoctor(res.data));
  }, [])

  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div>
      <h2>Nombre: {doctor.name}</h2>
      <h2>Apellido: {doctor.username}</h2>
      <h2>Correo electronico: {doctor.email}</h2>
      <h2>Telefono: {doctor.phone}</h2>
      <p>Sitio Web: <a>{doctor.website}</a></p>


      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail