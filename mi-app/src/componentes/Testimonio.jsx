import React from 'react';

  function Testimonio() {
   return (
    <div className= 'contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require('../imagenes/cat1.png')}
        alt='foto de un gatito cute'/>
      <div className="contenedor-texto-testimonio">
        <p className='nombre-testimonio'>Gatito 1</p>
        <p className='cargo-testimonio'>Emprendedor en "Los gatitos de tu abuela"</p>
        <p className='texto-testimonio'>He sido preparado toda mi vida para emprender</p>
      </div>
    </div>
   );
  }

 export default Testimonio;
