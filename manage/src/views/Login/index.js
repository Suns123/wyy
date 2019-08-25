import React, { Component } from 'react';
import { LoginWarpper } from "./styled";
import {connect} from "react-redux";

class Login extends Component {
    render() {
        return (
            <LoginWarpper>
                <i className="iconfont">&#xe62c;</i>
                <button className="login" onClick={this.handleLogin.bind(this)}>手机号登录</button><br />
                <button className="tiyan">立即体验</button>
            </LoginWarpper>
        )
    }
    handleLogin(){
        // console.log(this.props)
        this.props.history.push("/phoneLogin");
    }
}

const mapStateToProps = (state) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)