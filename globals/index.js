export const URL_LINK = "http://localhost:5000/api";
export const CHANGE_LOGIN = () =>{
    if(!LOGIN_STATUS){
        LOGIN_STATUS = true 
    }
}
export let LOGIN_STATUS = false;