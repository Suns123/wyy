import React, { Component } from 'react';
import { Switch, NavLink } from "react-router-dom";
// import { VideoWarpper } from "./styled"

// import { url } from 'inspector';

export default class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        let data = this.props.prop.datas;
        // let data=datas.data
        console.log(data, "hhh")
        return (
            <ul style={{ background: "#D9D9D9" }}>
                {
                    data ? data.map((item, index) => (
                        item.type === 1 ?
                            <li key={index} style={{ width: "100%", padding: ".133333rem .133333rem 0 .133333rem", position: "relative", marginBottom: ".133333rem", background: "#fff" }}>
                                <video style={{ width: "100%", height: "3.438rem", borderRadius: ".135593rem" }} controls src={item.data.urlInfo.url}></video>
                                <NavLink to={'/videoDet/' + item.data.urlInfo.id}>
                                    <p style={{ fontSize: ".271186rem", color: "#000", padding: ".101695rem 0", lineHeight: ".305085rem", fontFamily: "Helvetica Neue,Helvetica,Roboto,Segoe UI,Arial,sans-serif", borderBottom: "1px solid #ccc" }}>{item.data.title}</p>
                                </NavLink>
                                <NavLink to={"/personDet/"+item.data.creator.userId} style={{ padding: ".101695rem", display: "block" }}>
                                    <img alt="" src={item.data.creator.avatarUrl} style={{ width: ".508475rem", height: ".508475rem", borderRadius: "50%", display: "inline-block" }} />
                                    <span style={{ fontSize: ".271186rem", height: "100%", lineHeight: "100%", paddingLeft: ".101695rem", position: "relative", top: "-.135593rem" }}>{item.data.creator.nickname}</span>
                                    <span style={{ fontSize: ".271186rem", float: "right", marginTop: ".101695rem" }}>{item.data.commentCount}评论</span>
                                    <span style={{ fontSize: ".271186rem", float: "right", marginTop: ".101695rem", marginRight: ".101695rem" }}>{item.data.praisedCount}点赞</span>
                                </NavLink>
                            </li>
                            : <li key={index} style={{marginBottom:".133333rem", padding: ".169492rem .133333rem 0 .133333rem",background:"#fff",fontWeight:"bold"}}>
                            {item.data.title}
                            <ul  style={{overflow:"auto",display:"flex", justifyContent:"space-between"}}>
                            {data.find((i)=>{if(i.type==4){console.log(i,i.data);return i}}).data.rcmdUsers.map((i,v)=>(
                                <NavLink key={v} to={"/personDet/"+i.profile.userid} style={{}}>
                                <div style={{display:"flex",alignItems:"center",flexDirection:"column",width:"2.542373rem",border:".016949rem solid #ccc",padding:".338983rem 0",margin:".169492rem .050847rem .237288rem .050847rem"}}>
                                <img alt="" src={i.profile.avatarUrl} style={{width:"1.016949rem",height:"1.016949rem",borderRadius:"50%"}}/>
                                <p style={{fontSize:".271186rem", fontWeight:"normal",marginTop:".237288rem",marginTop:".067797rem"}}>{i.profile.nickname}</p>
                                <p style={{fontSize:".20339rem",color:"#b5b5b5", fontWeight:"normal"}}>{i.profile.followeds}粉丝</p>
                                <p style={{fontSize:".20339rem", fontWeight:"normal",marginTop:".067797rem"}}>{i.slogan}</p>
                                <button style={{outline:"none",border:"none",background:"red",color:"#fff",padding:".050847rem .271186rem",borderRadius:".271186rem",marginTop:".169492rem"}}>+关注</button>
                                </div>
                                </NavLink>
                            ))}
                            </ul>
                            
                            </li>
                    )) : ""
                }
            </ul>

        )
    }
    componentWillReceiveProps(newProps) {
        console.log(newProps, 123);

    }
}



                        /* item.data.map((i,v)=>(
                           <li  style={{ width: "100%", padding: ".133333rem .133333rem 0 .133333rem", position: "relative" }} key={v}>
                       <video style={{ width: "100%", height: "3.438rem" }} controls src={i.urlInfo.url}></video>
                       <NavLink to={'/videoDet/'+i}>{i.title}</NavLink> 
                       
                       </li>
                       )) */
