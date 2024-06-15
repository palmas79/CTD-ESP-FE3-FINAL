import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Desea saber algo mas?</h2>
      <p>Envie su consulta y nos contactaremos</p>
      <Form/>
    </div>
  )
}

export default Contact