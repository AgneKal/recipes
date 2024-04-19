import { userInfo } from "./userInfo.js"

export const fetchRecipe = (path:string, method:string, data: any)=>{
    const options:any = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    if (data != null) {
        options.body = JSON.stringify(data);
    }
    return fetch (`https://recipes-96bbd-default-rtdb.europe-west1.firebasedatabase.app/${path}.json?auth=${userInfo.idToken}`, options) 
}