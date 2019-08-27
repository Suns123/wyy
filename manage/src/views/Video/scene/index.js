import React, { Component,Fragment } from 'react'
import {vidoe_cover_api,vidoe_related_api} from "../../../api"
import VideoList from "../../../components/videoList"
export default class Scene extends Component {
    constructor(props) {
        super(props);
        console.log(this.props,"id");
        this.state={
            id:this.props.match.params.id,
            data:[]
        }
    }
    render() {
        let {data} =this.state;
        return (
            <Fragment>
                <VideoList prop={data}></VideoList>
            </Fragment>
        )
    }
    async componentDidMount(){
        let data=await vidoe_cover_api(this.state.id);
        // let data1=await vidoe_related_api("3F2868B1C17BC1C0EF45D550BDB8E249");
        // console.log(data1,"000");
        this.setState({
            data:data
        })
    }
}
