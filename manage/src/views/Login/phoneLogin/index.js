import React, { Component } from 'react'
import { PhoneWarpper } from "./styled"

export default class phoneLogin extends Component {
    render() {
        return (
            <PhoneWarpper>
                <div>
                    <i className="iconfont" onClick={this.handleBack.bind(this)}>&#xe67b;</i>
                    <span>手机号登录</span>
                    
                </div>
            </PhoneWarpper>
        )
    }
    handleBack(){
        this.props.history.goBack();
    }
}
