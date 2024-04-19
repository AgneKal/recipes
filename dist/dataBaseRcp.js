import { loginExsec, registerExsec } from "./auth.js";
import { addRecipe } from "./addRecipe.js";
document.getElementById('login').style.display = "flex";
document.getElementById('newRcpBtn').style.display = "none";
document.getElementById('rcpAddContainer').style.display = "none";
document.getElementById('rcpList').style.display = "none";
document.getElementById('rcpEdit').style.display = "none";
const rcpNameInput = document.getElementById('rcpNameInput');
const rcpCookingTimeInput = document.getElementById('rcpCookingTimeInput');
const rcpDescription = document.getElementById('rcpDescription');
const rcpNameEditInput = document.getElementById('rcpNameEditInput');
const rcpCookingTimeEditInput = document.getElementById('rcpCookingTimeEditInput');
const rcpDescriptionEdit = document.getElementById('rcpDescriptionEdit');
export const recipeData = [];
document.getElementById('rcpAddContainer').style.display = 'none';
document.getElementById('newRcpBtn').onclick = () => {
    document.getElementById('rcpAddContainer').style.display = 'block';
};
document.getElementById('closeBtn').onclick = () => {
    document.getElementById('rcpAddContainer').style.display = 'none';
};
document.getElementById('clearBtn').onclick = () => {
    rcpNameInput.value = '';
    rcpCookingTimeInput.value = '';
    rcpDescription.value = '';
};
document.getElementById('clearEditBtn').onclick = () => {
    rcpNameEditInput.value = '';
    rcpCookingTimeEditInput.value = '';
    rcpDescriptionEdit.value = '';
};
document.getElementById('logInBtn').onclick = loginExsec;
document.getElementById('signUpBtn').onclick = registerExsec;
document.getElementById('addRcpBtn').onclick = addRecipe;
