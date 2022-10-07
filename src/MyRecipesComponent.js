import checkIcon from './check.png';

function MyRecipesComponent({ id, label, cuisineType, image, calories, ingredients }) {
console.log()
    return(
        <div key={ id }>
            <div className="flex">
                <h2>{ label }</h2>
            </div>
            <div className="flex">
                <h4>{ cuisineType }</h4>
            </div>
            <div className="flex">
                <img src={ image } alt="item" className='item-image'/>
            </div>
            <div className="flex">
                <p>{calories.toFixed()} calories</p>
            </div>
            <ul className="list">
                <div className='ingredient-item'>
                {ingredients.map(ingredient => (
                    <li>
                        <img src={checkIcon} alt="check" className='icon' />
                        {ingredient}
                    </li>
                ))}
                </div>
            </ul>
        </div>
    );
}

export default MyRecipesComponent;