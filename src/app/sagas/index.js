import { takeEvery, takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
// main saga generators
export function* sagas() { 
    yield [
        //fork(takeLatest, 'PRODUCTS_SEARCH_LIST', fetchAllProducts),
        //fork(takeLatest, 'HOME_PRODUCTS_LIST', fetchProducts),
        //fork(takeEvery, LOAD_PRODUCT_CARDS, fetchProductCards),
        //fork(takeEvery,'SEARCH_FETCH_PRODUCT_ITEM',fetchProductSearch),
        //fork(takeEvery,'PRODUCT_CATEGORY_LIST',fetchAllProductCategory),
        //fork(takeEvery,'SERVICE_CATEGORY_LIST',fetchAllServiceCategory),
        //fork(takeEvery,'LOCATION_SEARCH_LIST',fetchLocationsByName),
        //fork(takeEvery,"NULL",fetchLocations),
        //fork(takeEvery,LOAD_PRODUCTS_CARDS_BY_LOCATION,fetchProductsCardsByLocation),
        //fork(takeEvery, SEARCH_PRODUCTS_BY_NAME_LOCATION, filterProducts),
        //fork(takeEvery, LOAD_PRODUCT_NAME, filterProductName ),
        //fork(takeEvery, LOAD_PRODUCT_CARD_BY_NAME, filterProductByName)
    ];
}