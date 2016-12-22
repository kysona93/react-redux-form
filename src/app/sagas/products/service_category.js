/**
 * Created by Naseat on 12/13/2016.
 */
import {call , put } from 'redux-saga/effects';
import {getAllServiceCategory,getAllProductsCategory} from './../../api/product_category';

export function* fetchAllServiceCategory(action){
  const services=yield call (getAllServiceCategory , action);
  if(services.error){
    yield put({type:'SERVICE_CATEGORY_FETCH_FAIL',services:services});

  }else {
    yield put({type:'SERVICE_CATEGORY_FETCH_SUCCESS',services:services});
  }
}

export function* fetchAllProductCategory(action){
  const products=yield call (getAllProductsCategory, action);
  if(products.error){
    yield put({type:'PRODUCT_CATEGORY_FETCH_FAIL',products:products});

  }else {
    yield put({type:'PRODUCT_CATEGORY_FETCH_SUCCESS',products:products});
  }
}
