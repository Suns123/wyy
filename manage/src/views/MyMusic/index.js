import React, { Component } from 'react'
// import axios from "axios";
import {music} from "@api"
export default class MyMusic extends Component {
    async componentDidMount(){
        const data=await music();
        console.log(data);
    }
    render() {
        return (
            <div>
                音乐
            </div>
        )
    }
}
