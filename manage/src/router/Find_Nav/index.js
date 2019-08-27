//Find组件信息
import RecommendedDaily from '../../views/Find/indexComponent/RecommendedDaily'
import SongList from  "../../views/Find/indexComponent/SongList"


import Song from "../../views/Find/indexComponent/Song"
import SongPlay from '../../components/MyMusic/SongPlay/index'

//歌单二级组件信息
import RecommendSongList from "../../views/Find/search/RecommendSongList"
import Official from "../../views/Find/search/Official"
import Best from "../../views/Find/search/Official"
import America from "../../views/Find/search/Official"
import Electronic from "../../views/Find/search/Official"
import Lightmusic from "../../views/Find/search/Official"
import Rock from "../../views/Find/search/Official"
import Ballad from "../../views/Find/search/Official"


export default [
    {
        to: "/Song",
        path: "/Song",
        context: "歌单",
        component: Song,
        meta: {
            title: "歌单",
            flag:true
        }
    },
    {
        to: "/SongPlay",
        path: "/SongPlay",
        context: "歌曲播放",
        component: SongPlay,
        meta: {
            title: "歌曲播放",
            flag:false
        }
    },
    {
        to: "/RecommendedDaily",
        path: "/RecommendedDaily",
        context: "每日推荐",
        component: RecommendedDaily,
        meta: {
            title: "每日推荐",
            flag:true
        }
    },
    {
        to: "/SongList",
        path: "/SongList",
        context: "歌单",
        component: SongList,
        meta: {
            title: "歌单",
            flag:false
        },
        children:[
            {
                to: "/SongList/RecommendSongList",
                path: "/SongList/RecommendSongList",
                context: "推荐",
                component: RecommendSongList,
                meta: {
                    title: "推荐",
                    flag:false
                }
            },

            {
                to: "/SongList/Official",
                path: "/SongList/Official",
                context: "官方",
                component: Official,
                meta: {
                    title: "官方",
                }
            },
            {
                to: "/SongList/Best",
                path: "/SongList/Best",
                context: "精品",
                component: Best,
                meta: {
                    title: "精品",
                }
            },
            {
                to: "/SongList/America",
                path: "/SongList/America",
                context: "欧美",
                component: America,
                meta: {
                    title: "欧美",
                }
            },
            {
                to: "/SongList/Electronic",
                path: "/SongList/Electronic",
                context: "电子",
                component: Electronic,
                meta: {
                    title: "电子",
                }
            },
            {
                to: "/SongList/Lightmusic",
                path: "/SongList/Lightmusic",
                context: "轻音乐",
                component: Lightmusic,
                meta: {
                    title: "轻音乐",
                }
            },
            {
                to: "/SongList/Rock",
                path: "/SongList/Rock",
                context: "摇滚",
                component: Rock,
                meta: {
                    title: "摇滚",
                }
            },
            {
                to: "/SongList/Ballad",
                path: "/SongList/Ballad",
                context: "民谣",
                component: Ballad,
                meta: {
                    title: "民谣",
                }
            }

        ]
    }

]