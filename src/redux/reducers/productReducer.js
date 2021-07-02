import { ActionTypes } from "../constants/action_types";

const initialState = {
    products: [],
loading: false,
error: null
};

export const productReducer = (state = initialState, action) => {
    switch(action.type){
        case :
        return {...state, payload}
        default: return state;
    }
}