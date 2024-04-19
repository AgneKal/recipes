import { userInfo } from "./userInfo.js";
export const fetchRecipe = (path, method, data) => {
    const options = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    if (data != null) {
        options.body = JSON.stringify(data);
    }
    return fetch(`https://recipes-96bbd-default-rtdb.europe-west1.firebasedatabase.app/${path}.json?auth=${userInfo.idToken}`, options);
};
