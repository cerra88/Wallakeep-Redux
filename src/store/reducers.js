/* eslint-disable no-unused-vars */
import * as TYPES  from './types';
import { typeParameter } from '@babel/types';


const initialState ={
    user: {},
    ads: [],
    ui: {
        isFetching: false,
        err: null
    },
    detailAd: null,

}

export const user = (state = initialState.user, action) => {
    
    switch(action.type){
        case TYPES.SET_USER:
            return action.user
        
        default: 
            return state;
    }
}


export const ads = (state = initialState.ads, action) => {
    switch(action.type){
        case TYPES.FETCH_ADS_SUCCESS:
            return action.ads

        default: 
            return state;
    }
}

export const detailAd = (state = initialState.detailAd, action) => {
    switch(action.type){
        case TYPES.FETCH_SINGLE_AD_SUCCESS:
            return action.detailAd
        
            default:
                return state
    }
}



export const ui = (state = initialState.ui, action) => {
    switch(action.type){
        case TYPES.FETCH_ADS_REQUEST:
            return {
                ...state, isFetching: true, err: null 
            }
        
        case TYPES.FETCH_ADS_SUCCESS:
            return {
                ...state, isFetching: false, err: null 
            }
        
        case TYPES.FETCH_ADS_FAILURE:
            return {
                ...state, isFetching: false, err: action.err
            }

        default: 
            return state;
    }
}