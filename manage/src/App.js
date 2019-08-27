import React, { Component,Fragment} from 'react'
import {routeConfig} from "./router"
import BaseRoute from "./common/baseRoute";
import {Switch,Redirect} from 'react-router-dom';

import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import myPublicCreator from "./store/actionCreator/Public";

export default class App extends Component {
  render() {
    return (
        <Fragment>
          <Switch>
            <Redirect from="/" to="/find" exact></Redirect>
            {
              routeConfig.map((item,index)=>(
                  <BaseRoute key={index} {...item}/>
              ))
            }
          </Switch>
          {/*<audio id={'allPlay'} src={this.props.songPlayUrl[0] ? this.props.songPlayUrl[0].url : null}></audio>*/}
        </Fragment>

    )
  }
}

// export default connect((state) => ({
//   myLyric: state.allPublic.myLyric,
//   songPlayUrl: state.allPublic.songPlayUrl,
//   songPlayList: state.allPublic.songPlayList
// }), (dispatch) => bindActionCreators(myPublicCreator, dispatch))(App);