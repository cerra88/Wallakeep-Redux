import * as TYPES from './types'
import api from '../utils/api'

const {getAds} = api();


export const setReduxUser = user => ({
    type: TYPES.SET_USER,
    user,
    
});

export const fetchAds = () => {
    return async function (dispatch, getState){
        dispatch(fetchAdsRequest());
        try {
          const ads = await getAds()
          dispatch(fetchAdsSuccess(ads));
        } catch (err) {
          dispatch(fetchAdsFailure(err))
        }
    };
};

export const fetchAdsRequest = () => ({
    type: TYPES.FETCH_ADS_REQUEST,
    
});

export const fetchAdsSuccess = ads => ({
    type: TYPES.FETCH_ADS_SUCCESS,
    ads,
  });

export const fetchAdsFailure = error => ({
    type: TYPES.FETCH_ADS_FAILURE,
    error,
});
  
 
