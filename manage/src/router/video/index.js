import {  VideoScene,VideoDance, VideoCover, VideoBGM, VideoACG } from "../../views";

export const videoRoute = [
    {
       
        path: "/video/scene",
        id: "58100",
        name: "现场",
        component:VideoScene,
        meta:{
            auth:false
        }
    },
    {
        path: "/video/cover",
        id: "60100",
        name: "翻唱",
        component: VideoCover,
    },
    {
        path: "/video/dance",
        id: "1101",
        name: "舞蹈",
        component: VideoDance,
    },
    {
        path: "/video/BGMMusic",
        id: "58101",
        name: "听BGM",
        component: VideoBGM,
    },
    {
        path: "/video/ACGMusic",
        id: "57104",
        name: "ACG音乐",
        component: VideoACG,
    },

]

