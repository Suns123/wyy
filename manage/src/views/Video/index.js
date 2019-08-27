import React, { Component } from 'react'
import { video_api } from "../../api";
import { Switch,Route, Redirect,NavLink } from "react-router-dom";
import {VideoWarpper} from "./styled"
// import { videoRoute } from "../../router/video";
import Scene from "./scene";
import Cover from "./cover";
import Dance from "./dance";
import BGMMusic from "./BGM";
import ACGMusic from "./ACG";
export default class Video extends Component {
    constructor() {
        super();
        this.state = {
            videoList: [
                {
                    id: "58100",
                    path: "/video/scene",
                    name: "现场",
                },
                {
                    id: "60100",
                    path: "/video/cover",
                    name: "翻唱",
                },
                {
                    id: "1101",
                    path: "/video/dance",
                    name: "舞蹈",
                },
                {
                    id: "58101",
                    path: "/video/BGM",
                    name: "听BGM",
                },
                {
                    id: "57104",
                    path: "/video/ACG",
                    name: "ACG音乐",
                },
            ]
        }
    }

    render() {
        let {videoList}=this.state;
        // console.log(videoRoute);
        return (
            <VideoWarpper>
            <input type="text" onClick={this.handleTo.bind(this)}/>
                <ul className="nav">
                {
                    videoList.map((item, index) => (
                        <NavLink to={item.path+"/"+item.id}  key={index}>{item.name}</NavLink>
                    ))
                }
                </ul>
                
                <Switch>
                    <Redirect from="/video" to="/video/scene/58100" exact></Redirect>
                    <Route path="/video/scene/:id" component={Scene}/>
                    <Route path="/video/cover/:id" render={(props)=>(<Cover {...props}></Cover>)}/>
                    <Route path="/video/dance/:id" component={Dance}/>
                    <Route path="/video/BGM/:id" component={BGMMusic}/>
                    <Route path="/video/ACG/:id" component={ACGMusic}/>
                </Switch>
            </VideoWarpper>
        )
    }
    handleTo(){
        this.props.history.push("/search");
    }
    async componentDidMount() {
        let data = await video_api();
        console.log(data);
    }
}
