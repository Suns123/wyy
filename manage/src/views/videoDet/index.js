import React, { Component, Fragment } from 'react';
import { video_url_api, vidoe_related_api, video_detail_api, video_comment_api } from "../../api"

export default class DetailDet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            address: {},
            relatedVideo: {},
            videoDetail: {},
            videoComment: {}
        }
    }

    render() {
        let { address,relatedVideo, videoDetail, videoComment } = this.state
        console.log(relatedVideo, "13546")
        console.log(this.props, "detail");
        return (
            <Fragment>
                <video src={address.urls?address.urls[0].url:""} style={{width:"100%", height: "3.438rem",}} controls></video>
                <div className="detail">
                    <p className="title">{videoDetail.data?videoDetail.data.title:""}</p>
                    <p className="info">{}万次观看<span className="type"></span></p>
                    <p><img alt="" src=""/> <span className="name"></span><i></i></p>
                </div>
                <div className="related">
                
                </div>
                <div className="hotComment">
                    <img alt="" src=""/>
                    <span className="user"></span>
                    <span className="time"></span>
                    <p className="comment"></p>
                </div>
                <div className="newComment">
                    <img alt="" src=""/>
                    <span className="user"></span>
                    <span className="time"></span>
                    <p className="comment"></p>
                </div>
                
            </Fragment>
        )
    }

    async componentDidMount() {
        let address = await video_url_api("3F2868B1C17BC1C0EF45D550BDB8E249")
        let relate = await vidoe_related_api("3F2868B1C17BC1C0EF45D550BDB8E249");
        let detail = await video_detail_api("3F2868B1C17BC1C0EF45D550BDB8E249");
        let comment = await video_comment_api("3F2868B1C17BC1C0EF45D550BDB8E249");
        console.log(address, "address")
        console.log(relate, "relate")
        console.log(detail, "detail")
        console.log(comment, "comment")
        this.setState({
            address: address,
            relatedVideo: relate,
            videoDetail: detail,
            videoComment: comment
        })
    }

}
