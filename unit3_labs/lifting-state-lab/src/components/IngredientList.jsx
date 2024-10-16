import { availableIngredients } from "../App.jsx"

function IngredientList({ addIngredient }) {
    
  return (
    <ul id="ingredient-list">
        {availableIngredients.map((ingredient, i) => {
            return <li 
                key={i}
                style={{backgroundColor: ingredient.color}}
                >

                    <button
                    value={JSON.stringify(ingredient)}
                    type='submit'
                    onClick={addIngredient}
                    style={{backgroundColor: ingredient.color, 
                        color: ingredient.name === 'Onion' ? 'black' : 'white'}}
                    >{ingredient.name}</button>
                    
                </li>
        })}
    </ul>
  )
}

export default IngredientList