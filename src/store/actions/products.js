import * as ActionTypes from './action-types';
import axios from 'axios';

export const getProductSuccess = (data) => {
    return {
        type: ActionTypes.GET_PRODUCTS_DATA_START,
        payload: data
    }
}


export const getProducts = () => {
    return dispatch => {
        axios.get('http://localhost:8001/api/products').then((response) => {
            dispatch(getProductSuccess(response.data))
        }).catch(error => {
           console.log(error)
        })
    }
}

