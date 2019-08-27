import React, { Component } from 'react'
import Layout from "@layout"
import { Route } from "react-router-dom";
import auth from "@common/auth"
class BaseRoute extends Component {
    render() {
        let { path,component, ...rest } = this.props;
        console.log(rest.children);
        // let children = this.props.children[0];
        console.log(this.props, "222");
        return (
            <Layout {...rest}>
                <Route path={path} component={component}/>
            </Layout >
        )
    }
}
export default auth(BaseRoute);

// render={()=>(
//     <item.component></item.component>
// )}