import React,{Component} from "react";
import { NavLink,Route } from "react-router-dom";
import "../../assets/css/cloudVillage/main.scss";

import Square from "./Square";
import Event from "./event";
import BScrollComponent from "../../common/bscroll"

export default class CloudVillage extends Component {
    render() {
        return (
            <BScrollComponent>
            <div className={"cv-scroll"}>
                {/*头部*/}
                <div className={"cloudVillage"}>
                    <div className={"cloudVillage-header"}>
                        <div className={"cloudVillage-header-l"}>
                        <NavLink className={"iconfont"} to={"/UserAttention"} exact>&#xe75c;</NavLink>
                        </div>

                        <div className={"cloudVillage-header-m"}>
                            <NavLink  activeClassName="cloudVillage-m" exact to={"/cloudvillage"}>广场</NavLink>
                            <NavLink activeClassName="cloudVillage-m" to={"/cloudvillage/2"}>动态</NavLink>
                        </div>

                        <div className={"cloudVillage-header-r"}>
                            <NavLink className={"iconfont"} to={"/private"}>&#xe630;</NavLink>
                        </div>
                    </div>
               
                </div>
                 {/*主体*/}
                 <Route  exact path={"/cloudvillage"} component={Square}></Route>
                 <Route path={"/cloudvillage/2"} component={Event}></Route>
            </div>
            </BScrollComponent>
        )
    }
    

    componentWillMount() {
        //判断是否登录
        document.title = "网易云云村"
    }
}