import { ADD_TODO } from "./action"

const initState = {
    data:[]
}
export const reducer = (state=initState, {type,payload})=>{
    switch(type){
        case ADD_TODO:
            return {
                ...state,
                data: [...state.data, payload]
            }
        default: 
            return state
    }
}