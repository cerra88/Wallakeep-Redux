import * as TYPES from './types'

export const setReduxUser = user => ({
    type: TYPES.SET_USER,
    user,
    
});

export const setReduxAds = ads => ({
    type: TYPES.SET_ADS,
    ads: ads,  
});
