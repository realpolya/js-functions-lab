export const fontColor = (ingredient) => {

    if (ingredient.name === 'Onion' || 
        ingredient.name === 'Cheddar Cheese' ||
        ingredient.name === 'Swiss Cheese' ||
        ingredient.name === 'Lettuce' ||
        ingredient.name === 'Chicken Patty') {
        return 'black';
    }

    return 'white';
}

function Ingredient({ ingredient, i, ingrAction }) {
    return (
    <li key={i}
        style={{backgroundColor: ingredient.color}}
    >

            <button
            value={JSON.stringify(ingredient)}
            type='submit'
            onClick={ingrAction}
            style={{backgroundColor: ingredient.color, 
                color:fontColor(ingredient)}}
            >{ingredient.name}</button>
                    
    </li>
  )
}

export default Ingredient;