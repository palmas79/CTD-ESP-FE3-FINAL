import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
   
  // const [card, setCard] = useState([])
  const [doctores, setDoctores] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'
 

  useEffect(() => {
    axios(url)
    .then((res) => setDoctores(res.data))
    .catch((err) => console.log(err))
  }, []);

  // console.log(doctores);
  
  return (
    <main className="" >
      <h1>Inicio</h1>
      <div className='card-grid'>
        {doctores.map((doctor)=>{
          return <Card key={doctor.id} doctor={doctor}/>
          })
          }
      </div>
    </main>
  )
}

export default Home