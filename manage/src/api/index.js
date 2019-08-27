import http from "@utils/http";


//云村

export const music =(uid=432441345)=>http.get("/wyy/user/playlist",{uid})

export const comment =(id=186016,type=0)=>http.get("/wyy/comment/hot",{id,type})

export const first =(limit="")=>http.get("/wyy/mv/first",{limit})

export const event=(pagesize="",lasttime=1556740526369)=>http.get("/wyy/event",{pagesize,lasttime})



//我的音乐

export const subcount=()=>http.get("/wyy/user/subcount")



// export const subcount=()=>http.get("")
// export const subcount=()=>http.get("")
// export const subcount=()=>http.get("")
// export const subcount=()=>http.get("")
// export const subcount=()=>http.get("")
// export const subcount=()=>http.get("")
export const music =(uid=432441345)=>http.get("/wyy/user/playlist",{uid});
// banner 图片
export const banner = ()=>http.get("/wyy/banner");
//  歌单
export const personalized = ()=>http.get('/wyy/personalized');
// 每日推荐
export const recommend = ()=>http.get('/wyy/recommend/songs');
// 获取歌单广场所有推荐的歌单
export const playlist = ()=>http.get('/wyy/top/playlist');
// 获取歌单歌曲
export const playlistDetail = (id)=>http.get('wyy/playlist/detail',{id})

// 获取歌曲
export const playlistdetail = (id)=>http.get('/wyy/playlist/detail',{id})
export const userdetail = (uid)=>http.get('/wyy/user/detail',{uid})
export const userevent = (uid)=>http.get('/wyy/user/event',{uid})
export const lyric = (id)=>http.get('/wyy/playlist/detail',{id})
export const songurl = (id)=>http.get('/wyy/playlist/detail',{id})





