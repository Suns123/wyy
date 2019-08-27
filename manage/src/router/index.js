import {
    MyMusic,
    Find,
    CloudVillage,
    My,
    Video,
    Login,
    VideoDet,
} from "../views"
import PhoneLogin from "../views/Login/phoneLogin"
import {videoRoute} from "./video"

export const tabBarRoute = [
    {
        path:"/find",
        name:"发现",
        component:Find,
        icon:"\ue62c",
        meta:{
            flag:true
        },
    },
    {
        path:"/video",
        name:"视频",
        component:Video,
        icon:"\ue623",
        meta:{
            flag:true,
        },
        children: videoRoute
    },
    {
        path:"/mymusic",
        name:"我的",
        component:MyMusic,
        icon:"\ue602",
        meta:{
            flag:true,
           
        }
    },
    {
        path:"/cloudvillage",
        name:"云村",
        component:CloudVillage,
        icon:"\ue8a3",
        meta:{
            flag:true
        }
    },
    {
        path:"/my",
        name:"账号",
        component:My,
        icon:"\ue603",
        meta:{
            flag:true,
            auth:false
        }
    },
    
]
export const noTabBarRoute=[
    {
        path:"/login",
        name:"登录",
        component:Login,
        meta:{
            flag:false,
        },
        
    },
    {
        path:"/phoneLogin",
        name:"手机登录",
        component:PhoneLogin,
        meta:{
            flag:false,
        }
    },
    {
        path:"/videoDet/:vid",
        name:"视频详情",
        component:VideoDet,
        meta:{
            flag:false
        }
    }
    // ...videoRoute
]

export const routeConfig=tabBarRoute.concat(noTabBarRoute)