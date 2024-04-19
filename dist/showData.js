import { fetchRecipe } from "./fetchData.js";
import { loadData } from "./loadData.js";
export const showData = (recipeData) => {
    let tableBody = document.getElementById('tableBody');
    let rcpList = document.getElementById('rcpListContainer');
    let rcpEditContainer = document.getElementById('rcpEditContainer');
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
        tr.onclick = () => {
            document.getElementById('newRcpBtn').style.display = 'none';
            rcpList.style.display = 'none';
            rcpEditContainer.style.display = 'block';
            document.getElementById('rcpEditContainer').style.display = 'block';
            document.getElementById('rcpNameEditInput').value = rcp.recipeName;
            document.getElementById('rcpCookingTimeEditInput').value = rcp.recipeCookingTime;
            document.getElementById('rcpDescriptionEdit').value = rcp.recipeDescription;
            document.getElementById('editRcpBtn').onclick = () => {
                const updRcp = {
                    recipeName: document.getElementById('rcpNameEditInput').value,
                    recipeCookingTime: document.getElementById('rcpCookingTimeEditInput').value,
                    recipeDescription: document.getElementById('rcpDescriptionEdit').value,
                };
                fetchRecipe(`recipes/${rcp.id}`, 'PUT', updRcp)
                    .then((response) => {
                    return response.json();
                })
                    .then((data) => {
                    rcpList.style.display = "block";
                    rcpEditContainer.style.display = "none";
                    document.getElementById('newRcpBtn').style.display = 'block';
                    loadData();
                });
            };
            document.getElementById('deleteEditBtn').onclick = () => {
                fetchRecipe(`recipes/${rcp.id}`, 'DELETE', null)
                    .then((response) => {
                    return response.json();
                })
                    .then((data) => {
                    rcpList.style.display = "block";
                    rcpEditContainer.style.display = "none";
                    document.getElementById('newRcpBtn').style.display = 'block';
                    loadData();
                });
            };
        };
    });
};
