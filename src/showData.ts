import { fetchRecipe } from "./fetchData.js";
import { loadData } from "./loadData.js";
import { Recipe } from "./recipe.js";

export const showData = (recipeData: Recipe[]) => {
    let tableBody = <HTMLElement>document.getElementById('tableBody');
    let rcpList = <HTMLElement>document.getElementById('rcpListContainer');
    let rcpEditContainer = <HTMLElement>document.getElementById('rcpEditContainer');

    tableBody.innerHTML = '';
    rcpList.style.display = 'block';

    recipeData.forEach((rcp) => {
        const tr = document.createElement('tr');

        const tdName = document.createElement('td');
        tdName.innerHTML = rcp.recipeName;

        const tdCookingTime = document.createElement('td');
        tdCookingTime.innerHTML = rcp.recipeCookingTime;

        tr.appendChild(tdName);
        tr.appendChild(tdCookingTime);
    
        tableBody.appendChild(tr);

        tr.onclick=()=>{
            (<HTMLButtonElement>document.getElementById('newRcpBtn')).style.display = 'none';

            rcpList.style.display = 'none';
            rcpEditContainer.style.display = 'block';
            (<HTMLElement>document.getElementById('rcpEditContainer')).style.display = 'block';
            (<HTMLInputElement>document.getElementById('rcpNameEditInput')).value = rcp.recipeName;
            (<HTMLInputElement>document.getElementById('rcpCookingTimeEditInput')).value = rcp.recipeCookingTime;
            (<HTMLInputElement>document.getElementById('rcpDescriptionEdit')).value = rcp.recipeDescription;
                        
            (<HTMLButtonElement>document.getElementById('editRcpBtn')).onclick = () => {
               
                const updRcp: Recipe = {
                    recipeName: (<HTMLInputElement>document.getElementById('rcpNameEditInput')).value,
                    recipeCookingTime: (<HTMLInputElement>document.getElementById('rcpCookingTimeEditInput')).value,
                    recipeDescription: (<HTMLInputElement>document.getElementById('rcpDescriptionEdit')).value,
                }
                fetchRecipe(`recipes/${rcp.id}`, 'PUT', updRcp)
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    rcpList.style.display="block";
                    rcpEditContainer.style.display="none";
                    (<HTMLButtonElement>document.getElementById('newRcpBtn')).style.display = 'block';
                    loadData();
                })
            }
            (<HTMLButtonElement>document.getElementById('deleteEditBtn')).onclick = () => {
                fetchRecipe(`recipes/${rcp.id}`, 'DELETE', null)
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    rcpList.style.display="block";
                    rcpEditContainer.style.display="none";
                    (<HTMLButtonElement>document.getElementById('newRcpBtn')).style.display = 'block';
                    loadData();
                })
            }
        }
    })
}