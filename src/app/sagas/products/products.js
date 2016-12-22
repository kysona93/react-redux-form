import { call, put } from 'redux-saga/effects';
import {
    getProducts,
    getAllProducts,
    getProductCards,
    getProductsCardsByLocation,
    getProductSearch,
    searchProducts,
    searchProductName,
    searchProductByName
} from './../../api/products.js';
import {
    LOAD_PRODUCT_CARDS,
    LOAD_PRODUCT_CARDS_SUCCESS,
    LOAD_PRODUCT_CARDS_FAIL ,
    PRODUCTS_SEARCH_FETCH_SUCCESS,
    PRODUCTS_SEARCH_FETCH_FAIL,
    PRODUCTS_FETCH_SUCCESS,
    PRODUCTS_FETCH_FAIL,
    LAOD_PRODUCT_NAME_SUCCESS,
    LOAD_PRODUCT_CARD_BY_NAME_SUCCESS

} from './../../actions/products.js';

export function* fetchAllProducts(action){
    const products = yield call(getProducts, action);
    if (products.error) {
        yield put({type: 'PRODUCTS_FETCH_FAIL', products: products});
    } else {
        yield put({type: 'PRODUCTS_FETCH_SUCCESS', products: products});
    }
} 

/* get products by name, location and limit */
export function* fetchProducts(){
    const products = yield call(getAllProducts);
    if (products.error) {
        yield put({type: 'PRODUCTS_FETCH_FAIL', products: products});
    } else {
        yield put({type: 'PRODUCTS_FETCH_SUCCESS', products: products});
    }
}

/* get product cards with auto scroll content */ 
export function* fetchProductCards(action){
    try{
        const response = yield call(getProductCards, action);
        yield put({type: LOAD_PRODUCT_CARDS_SUCCESS, response});
    }catch(err){
        yield put({type: LOAD_PRODUCT_CARDS_FAIL, response});
    }
}

/* get products by location */
export function* fetchProductsCardsByLocation(action){
    try{
        const response=yield call(getProductsCardsByLocation,action);
        yield put({type:"LOAD_PRODUCT_CARDS__BY_LOCATION_SUCCESS",response})
    }catch(err){
        yield pur({type: "LOAD_PRODUCT_CARDS__BY_LOCATION_FAIL", response})
    }
}

/* search product in form*/
export function* fetchProductSearch(action){
    try{
        const response = yield call(getProductSearch, action);
        yield put({type: PRODUCTS_SEARCH_FETCH_SUCCESS, response});
    }catch(error){

    }
}

/* search product by name and location and limit */
export function* filterProducts(action){
    //console.log("saga *filterProducts "+"/"+action.location+"/"+action.name+"/"+action.limit)
    try{
        const response = yield call(searchProducts, action)
        yield put({type: PRODUCTS_FETCH_SUCCESS, response});
    }catch(error){
        yield put({type: PRODUCTS_FETCH_FAIL, msg_error : error.message });
    }
}

/* filter products name by 10 item */
export function* filterProductName(action){
    try{
        const response = yield call(searchProductName, action)
        yield put({type: LAOD_PRODUCT_NAME_SUCCESS, response});
    }catch(error){

    }
}

export function* filterProductByName(action){
    try{
        const response = yield call(searchProductByName, action)
        yield put({type: LOAD_PRODUCT_CARD_BY_NAME_SUCCESS, response});
    }catch(error){

    }
}


