import http from "@utils/http";

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





