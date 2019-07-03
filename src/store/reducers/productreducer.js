import * as ActionTypes from '../actions/action-types'

const initialState = {
    postItems: []
}

 const PostReducer = (state = initialState, action) => {
    switch (action.type) {
     
        case ActionTypes.GET_PRODUCTS_DATA_START:
            return {
                ...state,
                postItems: action.payload
            }
        default:
            return state
    }
}
export default PostReducer;