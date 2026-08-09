import { FETCH_DATA_REQUEST,FETCH_DATA_ERROR,FETCH_DATA_SUCCESS } from "./actions"
const initialState = {
    error:'',
    loading:false,
    data:[]
}
const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case FETCH_DATA_ERROR:{
            return {...state,loading:false,error:payload,data:[]};
        }
        case FETCH_DATA_SUCCESS:{
            return {...state,error:'',data:payload,loading:false};
        }
        case FETCH_DATA_REQUEST:{
            return {...state, loading:true};
        }
        default:{
            return state;
        }
    }
}

export default reducer;