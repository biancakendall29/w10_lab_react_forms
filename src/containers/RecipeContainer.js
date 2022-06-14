import { useState, useRef } from "react";
import NewRecipe from "../components/NewRecipe";
import RecipeList from "../components/RecipeList";


const RecipeContainer = () => {

    let [recipes, setRecipes] = useState([
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ])
    const inputValueRefCakeName = useRef();
    const inputValueRefCakeIngredients = useRef();
    const inputValueRefCakeRating = useRef();

    const addNewRecipe = () => {
        console.log("Added new recipe");
        const newCakeName = inputValueRefCakeName.current.value;
        let newIngredients = [];
        newIngredients = inputValueRefCakeIngredients.current.value.split(',');
        const newRating = inputValueRefCakeRating.current.value;
        if (newRating > 5 || newRating < 1 || newRating === "") {
            alert("The rating you submitted is not value! Choose a new one!");
        } else if (newCakeName === "" || newIngredients[0] === "") {
            alert("You cannot have an empty input");
        } else {
            setRecipes(prevRecipes => [...prevRecipes, { cakeName: newCakeName, ingredients: newIngredients, rating: newRating }]);
        }
    }

    const inputValueRefSearch = useRef();

    const filterBySearch = () => {
        const searchValue = inputValueRefSearch.current.value;
        console.log(searchValue);

        const filteredRecipes = recipes.filter((recipe, index) => recipe.cakeName === searchValue);

        if (filteredRecipes.length >= 1) {
            const filteredCakeName = filteredRecipes[0].cakeName;
            let filteredIngredients = [];
            filteredIngredients = filteredRecipes[0].ingredients;
            const filteredRating = filteredRecipes[0].rating;

            document.getElementById("recipes").innerHTML = "";

            setRecipes(prevRecipes => [...prevRecipes, {cakeName: filteredCakeName, ingredients: filteredIngredients, rating: filteredRating}])
        }
        else if (filteredRecipes.length === 0) {
            alert("There are no recipes with that name...");
        }          
    }

    return (
        <>
            <div className="header" id="home">
                <a href="#home"><h1>RECIPES!!</h1></a>
                <nav id="nav-bar">
                    <ul>
                        <li><a href="javascript:window.location.reload(true)">RECIPES</a></li>
                        <li><a href="#form">ADD A NEW RECIPE</a></li>
                    </ul>

                    <input id="searchBar" placeholder="SEARCH" type="text" ref={inputValueRefSearch}></input>
                    <button id="button" onClick={filterBySearch}>SEARCH</button>
                </nav>
            </div>
            <div id="recipes">
                <RecipeList recipes={recipes} />
            </div>
            <form className="form" id="form">
                <label>Cake name: </label>
                <input type="text" placeholder="Recipe Name" ref={inputValueRefCakeName}></input>
                <br />
                <br />
                <label>Cake ingredients: </label>
                <input type="text" placeholder="Recipe ingredients" ref={inputValueRefCakeIngredients}></input>
                <br />
                <br />
                <label>Cake rating: </label>
                <input type="text" placeholder="Recipe rating" ref={inputValueRefCakeRating}></input>
                <br />
                <br />
            </form>
            <NewRecipe handleButtonClick={addNewRecipe} />
        </>
    )
}

export default RecipeContainer;