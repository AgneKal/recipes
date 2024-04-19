import { Recipe } from "./recipe.js";
import { loginExsec, registerExsec } from "./auth.js";
import { addRecipe } from "./addRecipe.js";


(<HTMLElement>document.getElementById('login')).style.display = "flex";
(<HTMLElement>document.getElementById('newRcpBtn')).style.display = "none";
(<HTMLElement>document.getElementById('rcpAddContainer')).style.display = "none";
(<HTMLElement>document.getElementById('rcpList')).style.display = "none";
(<HTMLElement>document.getElementById('rcpEdit')).style.display = "none";



const rcpNameInput = <HTMLInputElement>document.getElementById('rcpNameInput');
const rcpCookingTimeInput = <HTMLInputElement>document.getElementById('rcpCookingTimeInput');
const rcpDescription = <HTMLTextAreaElement>document.getElementById('rcpDescription');

const rcpNameEditInput = <HTMLInputElement>document.getElementById('rcpNameEditInput');
const rcpCookingTimeEditInput = <HTMLInputElement>document.getElementById('rcpCookingTimeEditInput');
const rcpDescriptionEdit = <HTMLTextAreaElement>document.getElementById('rcpDescriptionEdit');

export const recipeData: Recipe[] = [];


(<HTMLElement>document.getElementById('rcpAddContainer')).style.display = 'none';

(<HTMLButtonElement>document.getElementById('newRcpBtn')).onclick = () => {
    (<HTMLElement>document.getElementById('rcpAddContainer')).style.display = 'block';
}

(<HTMLButtonElement>document.getElementById('closeBtn')).onclick = () => {
    (<HTMLElement>document.getElementById('rcpAddContainer')).style.display = 'none';
}

(<HTMLButtonElement>document.getElementById('clearBtn')).onclick = () => {
    rcpNameInput.value = '';
    rcpCookingTimeInput.value = '';
    rcpDescription.value = '';
}


(<HTMLButtonElement>document.getElementById('clearEditBtn')).onclick = () => {
    rcpNameEditInput.value = '';
    rcpCookingTimeEditInput.value = '';
    rcpDescriptionEdit.value = '';
}

(<HTMLButtonElement>document.getElementById('logInBtn')).onclick = loginExsec;
(<HTMLButtonElement>document.getElementById('signUpBtn')).onclick = registerExsec;

(<HTMLButtonElement>document.getElementById('addRcpBtn')).onclick = addRecipe;