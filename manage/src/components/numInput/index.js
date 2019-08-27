import React from "react";
import {connect} from 'react-redux';
import { List, InputItem, Toast } from 'antd-mobile';
import {phoneNum} from "../../actions/actionCreator"
// import { numInput } from "./styled"

// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class H5NumberInputExample extends React.Component {
    state = {
        hasError: false,
        value: '',
      }
      onErrorClick = () => {
        if (this.state.hasError) {
          Toast.info('Please enter 11 digits');
        }
      }
      onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
          this.setState({
            hasError: true,
          });
        } else {
          this.setState({
            hasError: false,
          });
        }
        this.setState({
          value,
        });
      }
      render() {
        return (
          <div>
            <List >
              <InputItem
                type="phone"
                error={this.state.hasError}
                onErrorClick={this.onErrorClick}
                onChange={this.onChange}
                value={this.state.value}
                style={{color:"#000"}}
                ref="InputItem"
              >+86</InputItem>
            </List>
            <button onClick={this.props.handlePhoneNum.bind(this)}></button>
          </div>
        );
      }
    }

const mapStateToProps = (state) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handlePhoneNum(){
            let value=this.refs.InputItem.value;
            dispatch(phoneNum(value))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(H5NumberInputExample);
// const H5NumberInputExampleWrapper = createForm()(H5NumberInputExample);

