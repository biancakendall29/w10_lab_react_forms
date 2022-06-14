import { useRef } from "react";

const NewRecipe = ({handleButtonClick}) => {
    
    return (
        <>
        <button id="addRecipeButton" onClick={handleButtonClick}>Submit a new recipe</button>
        </>
    );
}

export default NewRecipe;