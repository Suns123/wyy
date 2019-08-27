import React, { Fragment, Component } from "react"
import { NavLink } from "react-router-dom"
import {Wrapper} from "./styled"

class RecentPlay extends Component {
    render() {
        return (
            <Fragment>
                <div className={"returnDj iconfont icon-fanhui"} onClick={() => {
                    window.history.go(-1)
                }}>最近播放
                </div>
                <div style={{ 
                    justifyContent: "space-around",
                    display: "flex",
                    alignItems: "center",
                    padding: ".6rem .6rem .2rem .6rem",
                    borderBottom:"1px solid #ccc",
                    
                }}>
                <NavLink to="/GQ">歌曲</NavLink>
                <NavLink to="/ZB">直播</NavLink>
                <NavLink to="/SP">视频</NavLink>
                </div>
            </Fragment >
        )
    }
}
export default RecentPlay;