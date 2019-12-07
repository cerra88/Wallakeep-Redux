import {combineReducers} from 'redux';
import * as TYPES  from './types';


const initialState ={
    user: {},
    ads: "",
}

const user = (state = initialState.user, action) => {
    switch(action.types){
        case TYPES.SET_USER:
            return action.user
        
        default: 
            return state;
    }
}


const ads = (state = initialState.ads, action) => {
    switch(action.types){
        case TYPES.SET_ADS:
            return action.ads

        default: 
            return state;
    }
}

const reducer = combineReducers({
    user,
    ads
})

export default reducer;