import {limit} from "../../actions/actionCreator/CloudVillage"
export const mapStateToProps = (state)=>({
    list:state.limit
})


export const mapDispatchToProps = (dispatch)=>({
    handleUpdateList(limit){
        dispatch(updateList(limit))
    }
})