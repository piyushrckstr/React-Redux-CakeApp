// we know reducer takes state and action as params and returns a new state

import { BUY_CAKE } from "./cakeTypes"

const initialState={
    numOfCakes:10
}

const cakeReducer=(state=initialState,action)=>{ // modifying as we have action payload to work
    switch(action.type){
        case  BUY_CAKE:
            return { ...state,
                numOfCakes: state.numOfCakes-action.payload
            }
            default :
                return state
        }
}
export default cakeReducer