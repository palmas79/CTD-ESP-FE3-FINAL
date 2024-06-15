import React from "react";


const Card = ({doctor}) => {
  const{name, username}= doctor
  console.log(doctor);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <img src="../../public/images/doctor.jpg" alt="FotoDoc"/>
      <p>{name}</p>
      <p>{username}</p>        
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
