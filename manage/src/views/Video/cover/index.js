import React, { Component,Fragment } from 'react'
import VideoList from "../../../components/videoList"
import {vidoe_cover_api} from "../../../api"
export default class Cover extends Component {
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
        
        this.setState({
            data:data
        })
    }
}
