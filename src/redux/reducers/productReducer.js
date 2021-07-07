// import { ActionTypes } from "../constants/action_types";

// const initialState = {
//
// loading: false,
// error: null
// };

// export const productReducer = (state = initialState, action) => {
//     switch(action.type){
//         case FETCH_PRODUCTS_REQUEST:
//         return {...state, loading:true,
//             error: null,}
//         case FETCH_PRODUCTS_SUCCESS:
//             return {...state, loading:false, products: action.payload}
//         case FETCH_PRODUCTS_FAILURE:
//         return {
//             ...state,
//             loading: false,
//             error: action.error,
//             products: [],
//         }
//         default: return state;
//     }
// }
