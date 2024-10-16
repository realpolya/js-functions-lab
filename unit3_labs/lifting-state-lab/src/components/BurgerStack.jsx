import './BurgerStack.css';
import Ingredient from './Ingredient.jsx';

function BurgerStack(props) {
  return (
    <ul className='burger-stack'>
        {props.stack.map((ingredient, i) => {
            return < Ingredient ingredient={ingredient} 
            i={i} key={i}
            ingrAction={props.removeIngredient} />
        })}
    </ul>
  )
}

export default BurgerStack