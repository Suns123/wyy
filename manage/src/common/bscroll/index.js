import React, { Component } from 'react'
import {WrapperComponent} from "./styled"
import BScroll from "better-scroll";
export default class BScrollComponent extends Component {
    render() {
        return (
            <WrapperComponent ref="wrapper">
                {this.props.children}
            </WrapperComponent>
        )
    }
    componentDidMount(){
        this.scroll = new BScroll(this.refs.wrapper,{
            click:true,
            tap:true,
            pullUpLoad:true,
            pullDownRefresh:true
        })
    }
    handlepullingUp(cb){
        this.scroll.on("pullingUp",()=>{
            cb();
        })
    }
     //通知better-scroll执行下一次上拉加载更多以及高度重新计算
    handleRestpullingUp(){
        this.scroll.finishPullUp();
        this.scroll.refresh();
    }
    handlepullingDown(cb){
        this.scroll.on("pullingDown",()=>{
            cb();
        })
    }
    //通知better-scroll执行下一次下拉刷新以及高度重新计算
    handlefinishPullDown(){
        this.scroll.finishPullDown()
        this.scroll.refresh();
    }
}
