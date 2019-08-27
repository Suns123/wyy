import RecentPlay from "../../components/MyMusic/RecentPlay";
import MyFM from "../../components/MyMusic/MyFM"
import GQ from "../../components/MyMusic/RecentPlay/GQ"
import ZB from "../../components/MyMusic/RecentPlay/ZB"
import SP from "../../components/MyMusic/RecentPlay/SP"

export default [
    {
    // to:"/",
    path:"/RecentPlay",
    component:RecentPlay,
    meta:{
        flag:true,
    },
    children:[
       
        {
            path:"/RecentPlay/GQ",
            component:GQ,
            mmeta:{
                flag:true,
            },
        },
        {
            path:"/RecentPlay/ZB",
            component:ZB,
            mmeta:{
                flag:true,
            }, 
        },
        {
            path:"/RecentPlay/SP",
            component:SP,
            mmeta:{
                flag:true,
            }, 
        }
    ]
    },
    {
            // to:"/",
            path:"/MyFM",
            component:MyFM,
            meta:{
                flag:true,
            },
    },
    

]
