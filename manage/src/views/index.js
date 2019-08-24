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

const Login = Loadable({
    loader:()=>import("./Login/index"),
    loading:Loading
})


export {
    MyMusic,
    Find,
    CloudVillage,
    My,
    Video,
    Login
}