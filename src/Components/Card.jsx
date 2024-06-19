
import { Link } from "react-router-dom";


const Card = ({doctor}) => {
  const{id, name, username}= doctor;
  console.log(doctor);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
      <img src="../../public/images/doctor.jpg" alt="FotoDoc"/>      
      <p>{name}</p>
      <p>{username}</p>  
      </Link>     
        <button onClick={addFav} className="favButton">Agregar a Favoritos</button>
    </div>
  );
};

export default Card;
