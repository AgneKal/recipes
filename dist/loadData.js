import { recipeData } from "./dataBaseRcp.js";
import { fetchRecipe } from "./fetchData.js";
import { showData } from "./showData.js";
export const loadData = () => {
    document.getElementById('rcpEdit').style.display = 'block';
    fetchRecipe('recipes', 'get', null)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        recipeData.splice(0, recipeData.length);
        Object.keys(data).forEach((k) => {
            recipeData.push(Object.assign({ id: k }, data[k]));
        });
        showData(recipeData);
    });
};
