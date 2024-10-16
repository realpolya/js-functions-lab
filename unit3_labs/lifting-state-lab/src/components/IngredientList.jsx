import { availableIngredients } from "../App.jsx";
import Ingredient from './Ingredient.jsx';

function IngredientList({ addIngredient }) {
    
    return (
        <ul id="ingredient-list">
            {availableIngredients.map((ingredient, i) => {
                return < Ingredient key={i} ingredient={ingredient} 
                    i={i} 
                    ingrAction={addIngredient} />
            })}
        </ul>
    )
}

export default IngredientList

// ingredient.name === 'Onion' ? 'black' : 'white'