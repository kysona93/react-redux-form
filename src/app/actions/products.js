export const LOAD_PRODUCT_CARDS="LOAD_PRODUCT_CARDS";
export const LOAD_PRODUCT_CARDS_SUCCESS = "LOAD_PRODUCT_CARDS_SUCCESS";
export const LOAD_PRODUCT_CARDS_FAIL = "LOAD_PRODUCT_CARDS_FAIL";

export const PRODUCTS_SEARCH_FETCH_SUCCESS ="PRODUCTS_SEARCH_FETCH_SUCCESS";
export const PRODUCTS_SEARCH_FETCH_FAIL ="PRODUCTS_SEARCH_FETCH_FAIL";

export const LOAD_PRODUCTS_CARDS_BY_LOCATION="LOAD_PRODUCTS_CARDS_BY_LOCATION";
export const SEARCH_PRODUCTS_BY_NAME_LOCATION = "SEARCH_PRODUCTS_BY_NAME_LOCATION";

export const PRODUCTS_FETCH_SUCCESS='PRODUCTS_FETCH_SUCCESS';
export const PRODUCTS_FETCH_FAIL='PRODUCTS_FETCH_FAIL';

export const LOAD_PRODUCT_NAME = 'LOAD_PRODUCT_NAME';
export const LAOD_PRODUCT_NAME_SUCCESS= 'LAOD_PRODUCT_NAME_SUCCESS';
export const LOAD_PRODUCT_CARD_BY_NAME = 'LOAD_PRODUCT_CARD_BY_NAME';
export const LOAD_PRODUCT_CARD_BY_NAME_SUCCESS ='LOAD_PRODUCT_CARD_BY_NAME_SUCCESS';

/**
 * Created on 12/13/2016.
 * This action file is used for displaying products
 */

/* search products by location, name and limit */
export function searchProducts(location, name, limit){
    return {
        type: SEARCH_PRODUCTS_BY_NAME_LOCATION,
        location: location,
        name: name,
        limit: limit
    }
}

export function productsFetchSuccess(products) {
    return {
        type: PRODUCTS_FETCH_SUCCESS,
        products: products
    } 
}

export function productsFetchFail(products) {
    return {
        type: PRODUCTS_FETCH_FAIL,
        products: products
    }
}

/* get product cards to display auto scroll content */
export function loadProductCards(limit){
    return { 
        type: LOAD_PRODUCT_CARDS,
        limit: limit
    } 
}
/*  get product when user search */
export function productSearchFetchSuccess(name) {
    return {
        type: PRODUCTS_SEARCH_FETCH_SUCCESS,
        payload:products
    }
}

export function productSearchFetchFail(products) {
    return {
        type: PRODUCTS_SEARCH_FETCH_FAIL,
        payload: products
    }
}

/* search products by location and limit */
export function  loadProductCardsByLocation(location,limit){
    return{
        type:LOAD_PRODUCTS_CARDS_BY_LOCATION,
        location:location,
        limit:limit
    }
}

/* search product location by 10 item */
export function loadProductLocation(location){
    return {
               type:'LOCATION_SEARCH_LIST',
               address_state:location
            }
}
/* search product names by 10 item */
export function loadProductNames(name){
    return{
        type: LOAD_PRODUCT_NAME,
        name: name
    }
}

export function loadProductCardsByName(name){
    return{
        type: LOAD_PRODUCT_CARD_BY_NAME,
        name: name
    }
}




