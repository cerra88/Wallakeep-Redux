import * as TYPES from './types'
import api from '../utils/api'

const {getAds, findAdByID} = api();


export const setReduxUser = user => ({
    type: TYPES.SET_USER,
    user,
    
});

export const fetchSingleAd = (id) => {
    return async function (dispatch, getState){
        dispatch(fetchSingleAdRequest());
        try {
            const ad = await findAdByID(id)
            console.log(ad, id)
            dispatch(fetchSingleAdSuccess(ad));
        } catch (err) {
            dispatch(fetchSingleAdFailure(err))
        }
    }

}

export const fetchSingleAdRequest = () => ({
    type: TYPES.FETCH_SINGLE_AD_REQUEST,
    
});

export const fetchSingleAdSuccess = ad => ({
    type: TYPES.FETCH_SINGLE_AD_SUCCESS,
    ad,
  });

export const fetchSingleAdFailure = error => ({
    type: TYPES.FETCH_SINGLE_AD_FAILURE,
    error,
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
  
 
