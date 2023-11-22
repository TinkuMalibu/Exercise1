
import '../stylesheets/Testimonio.css';

  function Testimonio(props) {
    const altText= `Foto de ${props.nombre} from ${props.pais}`;
   return (
    <div className= 'contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/cat-${props.imagen}.png`)}
        alt= {altText} />
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
