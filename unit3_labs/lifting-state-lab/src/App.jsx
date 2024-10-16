import { useState } from 'react'
import './App.css'
import IngredientList from './components/IngredientList.jsx';
import BurgerStack from './components/BurgerStack.jsx';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

function App() {

  const [stack, setStack] = useState([])

  /* functions */
  const addIngredient = (e) => {
    
    console.log('clicking')
    console.log(e.target.value);
    let newIngredient = JSON.parse(e.target.value);
    setStack([...stack, newIngredient]);

  }

  const removeIngredient = (e) => {
    console.log('remove ingredient');
  }

  return (
    <main>
      <h1>Stacking Burgers</h1>
      <section>
        < IngredientList addIngredient={addIngredient}/>
        < BurgerStack stack={stack} removeIngredient={removeIngredient}/>
      </section>
    </main>
  )
}

export default App
