import { createAction } from "redux-actions";
import { PHONENUM, PHONEPSD, LOGINTYPE,LOGINADOPT } from "./actionTypes"
// import {login_api} from "../api/index"

export const phoneNum = createAction(PHONENUM, (val) => ({
    val
}))
export const phonePsd = createAction(PHONEPSD, (val) => ({
    val
}))

export const loginTesting = createAction(LOGINTYPE, () => ({
    
}))
export const loginAdopt = createAction(LOGINADOPT, (val) => ({
    val
}))
// export const phoneAsyncLogin=(phone,password)=>{
//     return async(dispatch)=>{
//         let data=await login_api(phone,password);
//         console.log(data);
//         dispatch(phoneToLogin(data))
//     }
// }