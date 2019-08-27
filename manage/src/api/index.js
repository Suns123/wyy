import http from "@utils/http";

//登录
export const login_api=(phone,password)=>http.get("/wyy/login/cellphone",{phone:phone,password:password})
export const music =(uid=432441345)=>http.get("/wyy/user/playlist",{uid})
//视频组数组
export const video_api=()=>http.get("/wyy/video/group/list")
//视频列表(组)
export const vidoe_cover_api=(groupId)=>http.get("/wyy/video/group",{id:groupId})
//视频地址
export const video_url_api=(vid)=>http.get("/wyy/video/url",{id:vid})
//相关视频
export const vidoe_related_api=(vid)=>http.get("/wyy/related/allvideo",{id:vid})
//视频详情
export const video_detail_api=(vid)=>http.get("/wyy/video/detail",{id:vid})
//视频最新评论
export const video_comment_api=(vid)=>http.get("/wyy/comment/video",{id:vid})
