import React, { Component } from 'react'
import "../../assets/css/cloudVillage/square.scss"
import Swiper from 'swiper/dist/js/swiper.js';
import NewMV from './NewMV';

import { connect } from 'react-redux';
import { comment, first } from "../../api"
import BScrollComponent from "../../common/bscroll"



class Square extends Component {
    constructor() {
        super();
        this.state = {
            _time: {},
            list: [],
            i:0
        }
    }

    render() {
        let { list } = this.state;
        return (

            <div className={"cloudVillage-square"} >
                <div className={"cloudVillage-hot-comments"} >
                    <div className={"cloudVillage-hot-comments-l"}>
                        <p className={"c-h-c-l-top"} dangerouslySetInnerHTML={{ __html: "云村热评墙&nbsp;>" }}></p>
                        {/*热评墙的轮播热评*/}
                        <div className="swiper-container cloudVillage-hot-comments-list">
                            <div className="swiper-wrapper cv-swiper-wrapper">
                                <div className="swiper-slide cv-swiper-slide">
                                    <img style={{ width: ".28rem", height: "auto", borderRadius: "50%", display: "inlineBlock" }}
                                        src=""></img>
                                    <span>
                                        周杰伦 你要对很多人的青村负责
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*右侧 日期*/}
                    <div className={"cloudVillage-hot-comments-r"}>
                        <div className={"c-month"}>
                            Aug
                        </div>
                        <div className={"c-day"}>
                            29
                        </div>

                    </div>
                </div>
                <div style={{ height: "10rem" ,overflow:"hidden"}}>
                    <BScrollComponent ref="bscroll">
                        <div>
                            <div className={"c-m-list"}>

                                {
                                    list.map((item, index) => (
                                        <div className={"mv-list"} key={index}>
                                            <a href="/village/video/id">
                                                <img src={item.cover} alt="" />
                                            </a>
                                            <div className={"mv-list-b"}>
                                                <p className={"mv-name"}>{item.briefDesc}</p>
                                                <div className={"mv-list-user"}>
                                                    <img src={item.cover} />
                                                    <span className={"mv-artistName"}>{item.artistName}</span>
                                                    <span className={"mv-playCount right"}>{item.playCount}赞</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </BScrollComponent>
                </div>
            </div>
        )
    }

    componentDidMount() {
        function time() {
            let _date = new Date();
            let _month = _date.getMonth();
            let _day = _date.getDate().toString().padStart(2, "0");
            switch (_month) {
                case 0:
                    _month = "Jan"
                    break;
                case 1:
                    _month = "Feb"
                    break;
                case 2:
                    _month = "Mar"
                    break;
                case 3:
                    _month = "Apr"
                    break;
                case 4:
                    _month = "May"
                    break;
                case 5:
                    _month = "Mar"
                    break;
                case 6:
                    _month = "Jun"
                    break;
                case 7:
                    _month = "Aug"
                    break;
                case 8:
                    _month = "Sep"
                    break;
                case 9:
                    _month = "Oct"
                    break;
                case 10:
                    _month = "Nov"
                    break;
                case 11:
                    _month = "Dec"
                    break;
            }
            return {
                _month, _day
            }
        }

        let _time = time();
        this.setState({
            _time
        })

        this.getcomment()
        this.getNewMV()


        
    }


    async getcomment() {
        let data = await comment();
        // console.log(data.hotComments,111232344566) 
    }
    async getNewMV() {
        let data = await first();
        this.setState({
            list: [...data.data]
        })
        console.log(data.data,56656665)
        // console.log(this.state.list, 111232344566)
    }


    





    componentDidUpdate() {
        //小滚动
        var mySwiper = new Swiper('.cloudVillage-hot-comments-list', {
            direction: 'vertical', // 垂直切换选项
            loop: false, // 循环模式选项
            autoplay: true
        })
        
    }
}
export default Square;
// export default connect(mapStateToProps,mapDispatchToProps)(Square)