import { availableIngredients } from "../App.jsx"

function BurgerStack(props) {
  return (
    <ul>
        {props.stack.map((ingredient, i) => {
            return <li 
                key={i}
                style={{backgroundColor: ingredient.color}}
                >

                    <button
                    value={ingredient}
                    type='submit'
                    onClick={props.removeIngredient}
                    style={{backgroundColor: ingredient.color, 
                        color: ingredient.name === 'Onion' ? 'black' : 'white'}}
                    >{ingredient.name}</button>
                    
                </li>
        })}
    </ul>
  )
}

export default BurgerStack