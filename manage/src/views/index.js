import Loadable from 'react-loadable';
import Loading from "@common/loading"

const Find = Loadable({
    loader:()=>import("./Find/index"),
    loading:Loading
})

const MyMusic = Loadable({
    loader:()=>import("./MyMusic/index"),
    loading:Loading
})

const CloudVillage = Loadable({
    loader:()=>import("./CloudVillage/index"),
    loading:Loading
})

const My = Loadable({
    loader:()=>import("./My/index"),
    loading:Loading
})

const Video = Loadable({
    loader:()=>import("./Video/index"),
    loading:Loading
})
const VideoScene=Loadable({
    loader:()=>import("./Video/scene/index"),
    loading:Loading
})
const VideoDance=Loadable({
    loader:()=>import("./Video/dance/index"),
    loading:Loading
})
const VideoCover=Loadable({
    loader:()=>import("./Video/cover/index"),
    loading:Loading
})
const VideoBGM=Loadable({
    loader:()=>import("./Video/BGM/index"),
    loading:Loading
})
const VideoACG=Loadable({
    loader:()=>import("./Video/ACG/index"),
    loading:Loading
})

const Login = Loadable({
    loader:()=>import("./Login/index"),
    loading:Loading
})
const VideoDet=Loadable({
    loader:()=>import("./videoDet/index"),
    loading:Loading
})


export {
    MyMusic,
    Find,
    CloudVillage,
    My,
    Video,
    Login,
    VideoScene,
    VideoDance,
    VideoCover,
    VideoBGM,
    VideoACG,
    VideoDet,
}