import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [usuario, setUsuario] = useState({
      nombre: "",      
      email: "",
      consulta: ""
    });

    const [show, setShow] =useState(false);
    const [error, setError] = useState(false);

    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        
        if(usuario.nombre.trim().length > 5 && regex.test(usuario.email) && usuario.consulta.trim().length > 10){
            setShow(true);
            setError(false);
        } else {
            setError(true);
            setShow(false);
        }
        console.log(`
          Consulta recibida correctamente.
          Nombre ${usuario.nombre}
          Email: ${usuario.email}
          Consulta: ${usuario.consulta}
          `)
        
    }

    const handleName = (event) => setUsuario({ ...usuario, nombre: event.target.value });
    const handleEmail = (event) => setUsuario({ ...usuario, email: event.target.value });
    const handlConsulta = (event) => setUsuario({ ...usuario, consulta: event.target.value });

  return (
    
    <div>     
      {show ?(
        <h3 style={{ color: "green" }}>Envio correctamente</h3>
      ):(

      
      
      <form className="form">
        
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" name="nombre" id="nombre" onBlur={handleName} />
        
        
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onBlur={handleEmail} />
        
        
          <label htmlFor="consulta">Consulta:</label>
          <textarea name="consulta" id="consulta" onBlur={handlConsulta} rows="4" cols="50"/>
        
        <button type="submit" id="btn-enviar" onClick={handleSubmit}>Enviar</button>
      </form>
      )}
        {error && (
        <p style={{ color: "red" }}>Debe colocar sus datos correctamente</p>
      )}
      
    </div>
  );
};

export default Form;
