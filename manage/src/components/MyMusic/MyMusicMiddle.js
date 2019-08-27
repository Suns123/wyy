import React from 'react';
import {subcount} from "../../api"
import {NavLink} from "react-router-dom";


class MyMusicMiddle extends React.Component {
    constructor() {
        super()
        this.state={
            list:{},
            flag:false
        }
        // this.myDianObj={
        //     top:'创建的歌单',
        //     msg:[
        //         {
        //             title:"歌单管理",
        //             className:'iconfont icon--duoxuantiankong'
        //         },
        //         {
        //             title:"创建新歌单",
        //             className:'iconfont icon-jia'
        //         },
        //         {
        //             title:"恢复歌单",
        //             className:'iconfont icon-history1'
        //         }
        //     ]
        // }
        // this.myCountDianObj={
        //     top:'收藏的歌单',
        //     msg:[{
        //             title:"歌单管理",
        //             className:'iconfont icon--duoxuantiankong'
        //         }]
        // }
    }

    render() {
        let {list}=this.state;
        return (
            < div style={{ flex: '1', overflow: 'auto' }}>
                <div className={'MyMusic-Middle'}>
                    < div style={{ display: 'flex', height: ".7rem" }}>
                        <div style={{ fontSize: '0.4rem', background: '#fff', textAlign: "center", lineHeight: ".8rem" }} className={'iconfont MyMusic-Middle-left icon-zuijinbofang'}></div>
                        < NavLink className={'MyMusic-Middle-right'} to={"/RecentPlay"} > 最近播放（{list.mvCount}）
                        </NavLink>
                    </div>
                    < div style={{ display: 'flex', height: ".7rem" }}>
                        <div style={{ fontSize: '0.7rem', background: '#fff', textAlign: "center", lineHeight: ".8rem" }} className={'iconfont MyMusic-Middle-left icon-diantai'}></div>
                        < NavLink className={'MyMusic-Middle-right'} to={"/MyFM"}> 我的电台（{list.djRadioCount}）
                        </NavLink>
                    </div>
                    <div style={{ display: 'flex', height: ".7rem" }}>
                        <div style={{ fontSize: '0.4rem', background: '#fff', textAlign: "center", lineHeight: ".8rem" }} className={'iconfont MyMusic-Middle-left icon-wodeshoucang'}></div>
                        <div className={'MyMusic-Middle-right'}> 我的收藏（{list.artistCount}）
                        </div>
                    </div>
                </div>
                <div className={'MyMusic-Bottom'}>
                    <div className="CareatMusicList" onClick={this.handleCreate}>
                        <p>&gt;</p>
                        <p>创建的歌单</p>
                        <p className="iconfont">...</p>
                    </div>
                    <div className="CollectionMusicList">
                        <p>&gt;</p>
                        <p>收藏的歌单</p>
                        <p className="iconfont">...</p>
                    </div>
                </div>
                <div className="CreateList" style={{display:"flag"}}>
                    <p>创建的歌单</p>
                </div>
            </div>
        )
    }
    Create(){
        this.state={
            flag:!this.flag? "none":"block"
        }
    }

    componentDidMount(){
        this.getUserMessage()
    }

    async getUserMessage() {
        let data = await subcount();
        this.setState({
            list: data          
        })
    }


}
export default MyMusicMiddle;