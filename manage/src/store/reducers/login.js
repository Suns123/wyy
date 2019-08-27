import { handleActions } from "redux-actions";
import { PHONENUM, PHONEPSD, LOGINTYPE,LOGINADOPT } from "../../actions/actionTypes"
const defaultState = {
    loginPhone: "",
    password: "",
    flag:false,
    uid:""
}

export default handleActions({
    [PHONENUM]: (state, action) => {
        // console.log(action);
        let phoneNum = JSON.parse(JSON.stringify(state));
        phoneNum.loginPhone = action.payload.val;
        return phoneNum;
    },
    [PHONEPSD]: (state, action) => {
        // console.log(action);
        let phonePsd = JSON.parse(JSON.stringify(state));
        phonePsd.password = action.payload.val;
        return phonePsd;
    },
    [LOGINTYPE]: (state, action) => {
        console.log((action));
        let flagState = JSON.parse(JSON.stringify(state));
        flagState.flag=true;
        return flagState;
    },
    [LOGINADOPT]: (state, action) => {
        console.log((action));
        let flagState = JSON.parse(JSON.stringify(state));
        flagState.uid=action.payload.val
        flagState.flag=false;
        console.log(flagState.uid);
        return flagState;
    },
}, defaultState)