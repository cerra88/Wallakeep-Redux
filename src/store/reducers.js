/* eslint-disable no-unused-vars */
import * as TYPES  from './types';


const initialState ={
    user: {},
    ads: [],
    ui: {
        isFetching: false,
        err: null
    }
}

const user = (state = initialState.user, action) => {
    
    switch(action.type){
        case TYPES.SET_USER:
            return action.user
        
        default: 
            return state;
    }
}


const ads = (state = initialState.ads, action) => {
    switch(action.type){
        case TYPES.FETCH_ADS_SUCCESS:
            return action.ads
            
        default: 
            return state;
    }
}


const ui = (state = initialState.ui, action) => {
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