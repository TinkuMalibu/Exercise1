import React from 'react';
import '../stylesheets/Testimonio.css';

  function Testimonio(props) {
   return (
    <div className= 'contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/cat-${props.imagen}.png`)}
        alt='foto de un gatito cute'/>
      <div className="contenedor-texto-testimonio">
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> from {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} in <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>
          "{props.testimonio}"
        </p>
      </div>
    </div>
   );
  }

 export default Testimonio;
