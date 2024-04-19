import { fetchRecipe } from "./fetchData.js";
import { loadData } from "./loadData.js";
const rcpNameInput = document.getElementById('rcpNameInput');
const rcpCookingTimeInput = document.getElementById('rcpCookingTimeInput');
const rcpDescription = document.getElementById('rcpDescription');
export const addRecipe = () => {
    const rep = {
        recipeName: rcpNameInput.value,
        recipeCookingTime: rcpCookingTimeInput.value,
        recipeDescription: rcpDescription.value,
    };
    fetchRecipe('recipes', 'POST', rep)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        return data;
    });
    rcpNameInput.value = '';
    rcpCookingTimeInput.value = '';
    rcpDescription.value = '';
    document.getElementById('rcpAddContainer').style.display = 'none';
    loadData();
};
