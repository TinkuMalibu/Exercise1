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
        imagen='2'
        cargo='Feline entrepeneur'
        empresa='Human toys for cats'
        testimonio='In the quiet neighborhood of Catville, I set out to chase a bold dream: to become the owner of the best cat toy store! With my endearing gaze and a persuasive meow, I convinced my fellow feline friends to buy my exclusive toys. My business grew rapidly, opening branches all over the place. Cats went crazy for my quality products and unique designs. Not only did I triumph as a feline entrepreneur, but I also became an inspiration for other catpreneurs. My toy empire became a global success, and Im purring with happiness!.'/>
        <Testimonio
        nombre='Little Cat Jey'
        imagen='1'
        pais='Ireland'
        cargo='CEO'
        empresa='The Cat good Meal'
        testimonio='In the bustling neighborhood of Purrington, whiskered entrepreneur Whiskers decided to pursue a culinary dream: owning the finest cat-friendly restaurant in town! With a flair for flavor and a charismatic purr-suasion, Whiskers convinced fellow felines to dine at his establishment. Soon, the restaurant gained a loyal following, expanding to other corners of the city. Cats flocked to savor the gourmet dishes crafted with love and care. Whiskers not only mastered the art of feline gastronomy but also became a symbol of culinary success, inspiring aspiring cat chefs everywhere. His restaurant became a global sensation, and Whiskers purred contentedly at the success of his whisker-licking venture!'
        />
        <Testimonio
        nombre='Rocky Clawsworth'
        pais='USA'
        imagen='3'
        cargo='Boxer'
        empresa='Dont mess with us'
        testimonio='In the tough streets of Feline City, Im Rocky Clawsworth, a cat who traded the boxing ring for entrepreneurship, founding Dont Mess With Us.  My company provides self-defense classes and specialized products, empowering cats throughout the city. With my charisma and hands-on approach, Dont Mess With Us quickly became a symbol of feline strength and unity. The business expanded beyond the city, resonating with cats seeking confidence. My journey serves as an inspiration, proving that whether in the ring or the boardroom, resilience and unity can conquer any arena.'
        />
      </div>
    </div>
  );
}

export default App;
