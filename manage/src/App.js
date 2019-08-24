import React, { Component } from 'react'
import {routeConfig} from "@router"
import BaseRoute from "@common/baseRoute";
import {Switch,Redirect} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect from="/" to="/find" exact></Redirect>
        {
          routeConfig.map((item,index)=>(
            <BaseRoute key={index} {...item}/>
          ))
        }
      </Switch>
    )
  }
}
