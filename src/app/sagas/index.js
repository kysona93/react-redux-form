import { takeEvery, takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import {
        fetchAllProducts,
        fetchProducts ,
        fetchProductCards,
        fetchProductSearch,
        fetchProductsCardsByLocation,
        filterProducts,
        filterProductName,
        filterProductByName
} from './products/products.js';
import {
        LOAD_PRODUCT_CARDS,
        PRODUCTS_SEARCH_FETCH_SUCCESS,
        LOAD_PRODUCTS_CARDS_BY_LOCATION,
        SEARCH_PRODUCTS_BY_NAME_LOCATION,
        LOAD_PRODUCT_NAME,
        LOAD_PRODUCT_CARD_BY_NAME
} from './../actions/products.js';
import {
    fetchAllProductCategory,
    fetchAllServiceCategory
} from './products/service_category';
import {
    fetchLocationsByName,
    fetchLocations
} from './locations/locations'
// main saga generators
export function* sagas() { 
    yield [
        fork(takeLatest, 'PRODUCTS_SEARCH_LIST', fetchAllProducts),
        fork(takeLatest, 'HOME_PRODUCTS_LIST', fetchProducts),
        fork(takeEvery, LOAD_PRODUCT_CARDS, fetchProductCards),
        fork(takeEvery,'SEARCH_FETCH_PRODUCT_ITEM',fetchProductSearch),
        fork(takeEvery,'PRODUCT_CATEGORY_LIST',fetchAllProductCategory),
        fork(takeEvery,'SERVICE_CATEGORY_LIST',fetchAllServiceCategory),
        fork(takeEvery,'LOCATION_SEARCH_LIST',fetchLocationsByName),
        fork(takeEvery,"NULL",fetchLocations),
        fork(takeEvery,LOAD_PRODUCTS_CARDS_BY_LOCATION,fetchProductsCardsByLocation),
        fork(takeEvery, SEARCH_PRODUCTS_BY_NAME_LOCATION, filterProducts),
        fork(takeEvery, LOAD_PRODUCT_NAME, filterProductName ),
        fork(takeEvery, LOAD_PRODUCT_CARD_BY_NAME, filterProductByName)
    ];
}