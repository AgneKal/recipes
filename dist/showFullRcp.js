import { fetchRecipe } from "./fetchData.js";
const allRecipes = () => {
    fetchRecipe('recipes', 'get', null)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        console.log(data);
        //const rcpArray: Recipe[] = Object.values(data); <-- ES2017 sintaksė
        const rcpArray = Object.keys(data).map(key => data[key]);
        console.log(rcpArray);
        rcpArray.forEach((rcp) => {
            let recipes = document.getElementById('recipes');
            const recipeDiv = document.createElement('div');
            recipes.appendChild(recipeDiv);
            recipeDiv.classList.add('recipe');
            const rcpName = document.createElement('p');
            rcpName.innerHTML = rcp.recipeName;
            recipeDiv.appendChild(rcpName);
            rcpName.classList.add('rcpName');
            const rcpCookingTime = document.createElement('p');
            rcpCookingTime.innerHTML = rcp.recipeCookingTime;
            recipeDiv.appendChild(rcpCookingTime);
            rcpCookingTime.classList.add('rcpCookingTime');
            const rcpDescription = document.createElement('p');
            rcpDescription.innerHTML = rcp.recipeDescription;
            recipeDiv.appendChild(rcpDescription);
            rcpDescription.classList.add('rcpDescription');
        });
    });
};
allRecipes();
