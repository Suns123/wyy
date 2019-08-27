import UserAttention from "../../components/CloudVillage/UserAttention";
import UserAttentionFansInfo from "../../components/CloudVillage/UserAttentionFansInfo"
import Private from "../../components/CloudVillage/private"



export default [
    {
    // to:"/",
    path:"/UserAttention",
    component:UserAttention,
    meta:{
        flag:true,
    },
    children:[{
        // to:"/",
        path:"/UserAttentionFansInfo",
        component:UserAttentionFansInfo,
        meta:{
            flag:true,
        },
    }]
    },
    {
        path:"/private",
        component:Private,
        meta:{
            flag:true,
        },
    }

]
