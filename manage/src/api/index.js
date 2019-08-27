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


