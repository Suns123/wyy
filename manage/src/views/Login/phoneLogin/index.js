import React, { Component } from 'react'
import { PhoneWarpper } from "./styled";
import { connect } from "react-redux"
import { phoneNum, phonePsd, loginTesting,loginAdopt } from "../../../actions/actionCreator"
import { login_api } from "../../../api/index"
// import { List, InputItem, Toast } from 'antd-mobile';

class phoneLogin extends Component {
    
    
    render() {
        let { login } = this.props;
        return (
            <PhoneWarpper>
                <i className="iconfont" onClick={this.handleBack.bind(this)}>&#xe67b;</i>
                <span>手机号登录</span><br />
                
                <div>
                    <input type="text" value={login.loginPhone}
                        onChange={this.props.handlePhoneNum.bind(this)} ref="input_phone" /><br />
                    <b>+86</b>
                    <input type="password" value={login.password}
                        onChange={this.props.handlePhonePsd.bind(this)} ref="input_psd" /><br />
                    <i>密码:</i>
                </div>
                {login.flag?<p>账号或密码错误</p>:""}
                <button onClick={this.props.handleNext.bind(this)}>登录</button>

            </PhoneWarpper>
        )
    }
    handleBack() {
        this.props.history.goBack();
    }
    
}
const mapStateToProps = (state) => {
    
    return {
        login: state.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handlePhoneNum(e) {
            let value = e.target.value;
            dispatch(phoneNum(value))
        },
        handlePhonePsd(e) {
            let value = e.target.value;
            dispatch(phonePsd(value));
        },
        async handleNext() {
            let phone = this.refs.input_phone.value;
            let password = this.refs.input_psd.value;
            let data =await login_api(phone, password);
            console.log(data,this.props);
            
            if(data.code===501||data.code===502){
               
                dispatch(loginTesting());
            }else{
                this.props.history.push("/find");
                // let str=data.bindings[1].tokenJsonStr.replace((/:/g),"=");
                // console.log(str);
                // let str1=str.replace((/"|{|}/g),"");
                // console.log(str1);
                let value=data.account.id
                // for(let prop in str){
                //     document.cookie=prop;
                    
                // }
                dispatch(loginAdopt(value))
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(phoneLogin);