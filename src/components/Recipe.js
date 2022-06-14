const Recipe = ({recipe}) => {


    const ingredientsList = recipe.ingredients.map((ingredient, index) => {
        return (
        <li key={index}>{ingredient}</li>
        )
    })

    return(
        <>
            <div className="recipe-card">
                <h3>{recipe.cakeName}</h3>
                <ul>{ingredientsList}</ul>
                <p>Rating: {recipe.rating}</p>

            </div>    
        </>
    );

}

export default Recipe;