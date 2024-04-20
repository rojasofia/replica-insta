import React from 'react'
import { useParams } from 'react-router-dom';

// const  = () => {
//   return (
//     <div>Details</div>
//   )
// }

const Details = () => {
  let { id } = useParams();

  return (
    <div>
      {/* Renderiza la información del ítem usando el id */}
      <h1>Detalles del ítem {id}</h1>
      {/* ... */}
    </div>
  );
};

export default Details
