import {
    MyMusic,
    Find,
    CloudVillage,
    My,
    Video,
    Login
} from "@views"
import PhoneLogin from "@views/Login/phoneLogin"

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
        }
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
            auth:true
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
    }

]

export const routeConfig=tabBarRoute.concat(noTabBarRoute)