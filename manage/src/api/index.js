import http from "@utils/http";

export const music =(uid=432441345)=>http.get("/wyy/user/playlist",{uid})