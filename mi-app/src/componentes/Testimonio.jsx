import React from 'react';
import '../stylesheets/Testimonio.css';

  function Testimonio() {
   return (
    <div className= 'contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require('../imagenes/cat1.png')}
        alt='foto de un gatito cute'/>
      <div className="contenedor-texto-testimonio">
        <p className='nombre-testimonio'>Miu Miu</p>
        <p className='cargo-testimonio'>Entrepreneur in My HUMAN TOYS</p>
        <p className='texto-testimonio'>In the quiet neighborhood of Catville, I set out to chase a bold dream: to become the owner of the best cat toy store! With my endearing gaze and a persuasive meow, I convinced my fellow feline friends to buy my exclusive toys. My business grew rapidly, opening branches all over the place. Cats went crazy for my quality products and unique designs. Not only did I triumph as a feline entrepreneur, but I also became an inspiration for other catpreneurs. My toy empire became a global success, and I'm purring with happiness!</p>
      </div>
    </div>
   );
  }

 export default Testimonio;
