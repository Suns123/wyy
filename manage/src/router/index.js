import {MyMusic, Find, CloudVillage, My, Video, Login} from "@views"
//FindNav
import Find_Nav from './Find_Nav';


import UserAttention from "./CloudVillage"
import Private from "./CloudVillage"
import RecentPlay from "./MyMusic"
import MyFM from "./MyMusic"


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
        }
    },
    {
    ...UserAttention,
    ...Private,
    ...RecentPlay,
    ...MyFM,
    ...Find_Nav
        
    }
    

]

export const routeConfig=tabBarRoute.concat(noTabBarRoute)