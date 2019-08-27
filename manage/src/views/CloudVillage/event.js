import React, { Component } from 'react';
import "../../assets/css/cloudVillage/events.scss";
import BScrollComponent from '../../common/bscroll';
import { event } from "../../api";


export default class Event extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            info: {},
            i: 0
        }
    }
    render() {
        let { list } = this.state;
        return (
            <BScrollComponent>
                <div className={"cv-event"}>
                    <header>
                        <div className={"cv-event-public"}><i className={"iconfont"}>#</i>发动态</div>
                        <div className={"cv-event-public"}><i className={"iconfont"}>#</i>发布视频</div>
                    </header>
                    {
                        list.map((item, index) => (
                            <div className={"cv-event-main"} key={index}>
                                <div className={"cv-video-item"}>
                                    <div className={"left cv-video-userPic"}>
                                        <img style={{ width: "1rem", height: "auto", borderRadius: "50%" }}
                                            src={item.user.avatarUrl} alt="" />
                                    </div>
                                    <div className={"left cv-video-item-r"}>
                                        <div>
                                            <p className={"left cv-video-userName"}>{item.user.nickname}</p>
                                            <p className={"cv-video-fans"}>{item.user.followeds}粉丝</p>
                                            <div className={"cv-video-msg"}>{JSON.parse(item.json).msg}</div>
                                            <a></a>
                                        </div>
                                        
                                        <div className={"cv-video-handle"}>
                                            <span className={"iconfont "}>&#xe616;<i>{item.insiteForwardCount}</i></span>
                                            <span className={"iconfont "}>&#xe641;<i>{item.info.commentCount}</i></span>
                                            <span className={"iconfont "}>&#xe613;<i>{item.info.likedCount}</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    

                </div>
            </BScrollComponent>
        )
    }
    

    componentDidMount() {
        this.getEvent()
    }
    async getEvent() {
        let data = await event();
        this.setState({
            list: data.event

        })
        console.log(data.event, 56656665)
        // console.log(this.state.list, 111232344566)
    }


}