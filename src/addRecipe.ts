import { fetchRecipe } from "./fetchData.js";
import { loadData } from "./loadData.js";
import { Recipe } from "./recipe.js";


const rcpNameInput = <HTMLInputElement>document.getElementById('rcpNameInput');
const rcpCookingTimeInput = <HTMLInputElement>document.getElementById('rcpCookingTimeInput');
const rcpDescription = <HTMLTextAreaElement>document.getElementById('rcpDescription');


export const addRecipe = () => {

    const rep: Recipe = {
        recipeName: rcpNameInput.value,
        recipeCookingTime: rcpCookingTimeInput.value,
        recipeDescription: rcpDescription.value,
    }
    fetchRecipe('recipes', 'POST', rep)
    .then ((response)=> {
        return response.json();
    })
    .then ((data) => {
        return data
    })
    rcpNameInput.value = '';
    rcpCookingTimeInput.value = '';
    rcpDescription.value = '';
    (<HTMLElement>document.getElementById('rcpAddContainer')).style.display = 'none';
    loadData();
}