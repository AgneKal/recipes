import { recipeData } from "./dataBaseRcp.js";
import { fetchRecipe } from "./fetchData.js";
import { Recipe } from "./recipe.js";
import { showData } from "./showData.js";


export const loadData=()=> {
    (<HTMLElement>document.getElementById('rcpEdit')).style.display='block';
    fetchRecipe('recipes', 'get', null)
    .then ((response) => {
        return response.json();
    })
    .then ((data:{[key:string]:Recipe}) => {
        recipeData.splice(0, recipeData.length);
        Object.keys(data).forEach((k)=>{
            recipeData.push({id:k, ...data[k]});
        })
        showData(recipeData);
    })
}