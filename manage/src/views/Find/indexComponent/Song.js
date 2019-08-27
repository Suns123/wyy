import React from "react";
import {playlistDetail} from "../../../api"
import Bscroll from "../../../common/bscroll"


export default class Song extends React.Component {
    constructor() {
        super();
        this.state = {
            songlist: {},
            discription: '',
            tracks: [],
            ar: []
        };
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll(e) {
        let myDiv = document.getElementById('myDiv')
        console.log(myDiv.offsetTop)
        if (document.documentElement.scrollTop > '266') {
            myDiv.style.position = 'fixed'
            myDiv.style.top = '0'
        } else {
            myDiv.style.position = ''
        }
    }

    componentDidMount() {

        this.getSonglist()

    }

    async getSonglist() {
        const data = await playlistDetail(`${this.props.location.state.id}`);
        this.setState({
            songlist: data.playlist,
            songlistId: data.playlist.id
        });
        let discription = this.state.songlist.description;
        if (discription.length > 26) {
            discription = discription.substr(0, 27) + '...'
        }
        let tracks = this.state.songlist ? this.state.songlist.tracks : [];
        this.setState({
            discription,
            tracks,
        });
        let ar = this.state.tracks ? this.state.tracks.ar : [];
        this.setState({
            ar
        })
    }

    render() {
        return (
            <div>
                <div>
                    <div style={{marginTop: '0.32rem', height: '0.36rem', lineHeight: '0.36rem'}}
                         className={'songlisthead'}>
                        <span className={'icon-fanhui iconfont'} onClick={()=>{
                            this.props.history.push('/')
                        }}></span>
                        <span style={{fontSize: '0.26rem', fontWeight: '600'}}>歌单</span>
                        <span style={{fontSize: '0.28rem'}} className={'icon-yinle1 iconfont'}>
                    </span>
                    </div>
                    <div style={{paddingTop:'0.46rem'}}>
                        <div className={'discription'}>
                            <img style={{width: '2.31rem', height: '2.31rem',}} src={this.state.songlist.coverImgUrl}
                                 alt=""/>
                            <div className="theDiscription">
                                <div style={{fontSize: '0.27rem', fontWeight: '600'}}>{this.state.songlist.name}</div>
                                <div style={{marginTop: '0.25rem'}}>
                                    <img style={{width: '0.5rem', height: '0.5rem', borderRadius: '50%',float:'left'}}
                                         src={this.state.songlist.creator ? this.state.songlist.creator.avatarUrl : ''}
                                         alt=""/>
                                    <span
                                        style={{fontSize: '0.27rem',margin:'0 0.2rem',overflow:'hidden'}}>{this.state.songlist.creator ? this.state.songlist.creator.nickname : ''}</span>
                                </div>

                                <div className={'dis'}>{this.state.discription}</div>
                            </div>
                        </div>
                        <div>
                            <div style={{marginBottom: '0.2rem'}} className={'fourIcon'}>
                                <div>
                                    <span style={{fontSize: '0.3rem'}} className={'icon-pinglun iconfont'}></span>
                                    <p style={{
                                        fontSize: '0.25rem',
                                        marginTop: '0.09rem'
                                    }}>{this.state.songlist.commentCount}</p>
                                </div>
                                <div>
                                    <span style={{fontSize: '0.3rem'}} className={'icon-fenxiang2 iconfont'}></span>
                                    <p style={{
                                        fontSize: '0.25rem',
                                        marginTop: '0.09rem'
                                    }}>{this.state.songlist.shareCount}</p>
                                </div>
                                <div>
                                    <span style={{fontSize: '0.3rem'}} className={'icon-xiazai1 iconfont'}></span>
                                    <p style={{fontSize: '0.25rem', marginTop: '0.09rem'}}>下载</p>
                                </div>
                                <div>
                                    <span style={{fontSize: '0.3rem'}} className={'icon-duoxuan iconfont'}></span>
                                    <p style={{fontSize: '0.25rem', marginTop: '0.09rem'}}>多选</p>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>

                    <div style={{height:'8rem',overflow:'hidden'}}>
                        <Bscroll>
                    <div>
                        <div className={'allSong'}>
                            <div id='myDiv' style={{
                                color: 'white',
                                borderTopLeftRadius: '0.3rem',
                                borderTopRightRadius: '0.3rem',
                                height: '0.76rem',
                                width: "100%",
                                lineHeight: '0.76rem',
                                background: '#e0001a',
                                borderLeftTopRadius: '10px',
                                borderRightTopRadius: '10px',
                                textAlign: 'left'
                            }}>
                                <span style={{fontWeight: '600', marginLeft: '0.2rem'}}
                                      className={'icon-rectangle1 iconfont'}></span>
                                <span
                                    style={{fontSize: '0.28rem', fontWeight: '600', marginLeft: '0.15rem'}}>播放全部</span>
                                <span>(共{this.state.songlist.trackCount}首)</span>
                            </div>
                            <div style={{textAlign: 'left', marginLeft: '0.25rem'}}>
                                {
                                    this.state.tracks.map((v, i) => {
                                        return <div style={{
                                            height: '0.81rem',
                                            marginBottom: '0.4rem',
                                            width: '100%',
                                            marginTop: '0.2rem'
                                        }}
                                                    onClick={() => {
                                                        this.props.history.push(
                                                            '/SongPlay',
                                                            {
                                                                songid: v.id,
                                                                songlistid: this.state.songlistId
                                                            }
                                                        )
                                                    }} key={i}>
                                            <span>{i + 1}</span>
                                            <span style={{marginLeft: '0.28rem', fontSize: '0.25rem'}}>{v.name}</span>
                                            <div>
                                                {
                                                    v.ar.map((v, i) => {
                                                        return <span
                                                            style={{fontSize: '0.18rem', marginLeft: '0.42rem'}}
                                                            key={i}>{v.name}</span>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </Bscroll>
                    </div>
                    </div>
                </div>
        )
    }
}