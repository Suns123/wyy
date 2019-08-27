import actionType from '../../actionType/Public';
import {playlistdetail,userdetail,userevent,lyric,songurl} from "../../../api"

export const getSongList = (payload) => {
    return {
        type: actionType.GET_SONG_LIST,
        payload
    }
}
export const removeSongList=(payload)=>{
    return {
        type: actionType.REMOVE_SONG_LIST,
        payload
    }
}
export const getUserDetail=(payload)=>{
    return {
        type: actionType.GET_USER_DETAIL,
        payload
    }
}
export const getUserEvent=(payload)=>{
    return {
        type: actionType.GET_USER_EVENT,
        payload
    }
}

export const getMyLyric=(payload)=>{
    return {
        type:actionType.GET_MY_LYRIC,
        payload
    }
}
export const getSongPlayList=(payload)=>{
    return {
        type:actionType.GET_SONG_PLAY_LIST,
        payload
    }
}
export const getSongPlayUrl=(payload)=>{
    return {
        type:actionType.GET_SONG_PLAY_URL,
        payload
    }
}
export const removeSongPlayUrl=(payload)=>{
    return {
        type: actionType.GET_SONG_PLAY_URL,
        payload
    }
}
export default {
    getSongList(id){
        return async (dispatch) => {
            const data = await playlistdetail('id');
            dispatch(getSongList(data));
        }
    },
    removeSongList(){
        return (dispatch)=>{
            dispatch(removeSongList({}));
        }
    },
    getUserDetail(id){
        return async (dispatch) => {
            const data = await userdetail('id');
            dispatch(getUserDetail(data));
        }
    },
    getUserEvent(id){
        return async (dispatch) => {
            const data = await userevent('id');
            dispatch(getUserEvent(data));
        }
    },
    getMyLyric(id){
        return async (dispatch)=>{
            const {lrc}=await lyric('id')
            dispatch(getMyLyric(lrc))
        }
    },
    removeSongPlayUrl(){
        return (dispatch)=>{
            dispatch(removeSongPlayUrl([]))
        }
    },
    getSongPlayUrl(id){
        return async (dispatch)=>{
            const {data}=await songurl('id')
            dispatch(getSongPlayUrl(data))
        }
    },
    getSongPlayList(list){
        return (dispatch)=>{
            dispatch(getSongPlayList(list))
        }
    }
}