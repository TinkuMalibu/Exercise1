import './App.css';
import Testimonio from './componentes/Testimonio.jsx';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>This is what our cute catpreneurs say</h1>
        <Testimonio
        nombre='Katie Reynoso'
        pais='Argentina'
        imagen=''
        cargo='Feline entrepeneur'
        empresa='Human toys for cats'
        testimonio='In the quiet neighborhood of Catville, I set out to chase a bold dream: to become the owner of the best cat toy store! With my endearing gaze and a persuasive meow, I convinced my fellow feline friends to buy my exclusive toys. My business grew rapidly, opening branches all over the place. Cats went crazy for my quality products and unique designs. Not only did I triumph as a feline entrepreneur, but I also became an inspiration for other catpreneurs. My toy empire became a global success, and Im purring with happiness!.'/>
      </div>
    </div>
  );
}

export default App;
