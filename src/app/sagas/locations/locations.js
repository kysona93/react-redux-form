import { call, put } from 'redux-saga/effects';
import { getLocationsByName, getLocations } from './../../api/locations';

export function* fetchLocationsByName(action){
    const locations = yield call(getLocationsByName, action);
    try{
        yield put({type: 'LOCATIONS_FETCH_SUCCESS', locations});
    }catch(err){
        yield put({type: 'LOCATIONS_FETCH_FAIL', locations});
    }
}

export function* fetchLocations(){
    const locations = yield call(getLocations);
    try{
        yield put({type: 'LOCATIONS_FETCH_SUCCESS', locations});
    }catch(err){
        yield put({type: 'LOCATIONS_FETCH_FAIL', locations});
    }
}
