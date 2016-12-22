import {
    LOAD_PRODUCT_CARDS_SUCCESS,
    LOAD_PRODUCT_CARDS_FAIL,
    PRODUCTS_SEARCH_FETCH_SUCCESS,
    PRODUCTS_FETCH_SUCCESS,
    PRODUCTS_FETCH_FAIL,
    LAOD_PRODUCT_NAME_SUCCESS,
    LOAD_PRODUCT_CARD_BY_NAME_SUCCESS
} from './../../actions/products.js';

/* get product with location and name  */
export function productsSearch(state = [{}], action) {
    switch (action.type){
        case PRODUCTS_FETCH_SUCCESS : {
            //console.log("reducer products"+JSON.stringify(action.response));
            return action.response.data;
        }
        case PRODUCTS_FETCH_FAIL:
            return state;
        default:
            return state;
    }
}

/* get product cards with auto scroll content */
export function productCards(state=[{}], action){
    switch(action.type){
        case LOAD_PRODUCT_CARDS_SUCCESS : { 
            //console.log("reducer productCards",action.response.data);
            return action.response.data
        }
        case LOAD_PRODUCT_CARDS_FAIL:
            return state;
        default:
            return state; 
    }
}

export function productCardsByLocation(state=[{}],action){
    switch(action.type){
        case "LOAD_PRODUCT_CARDS__BY_LOCATION_SUCCESS" : {
            // console.log("reducer productCards",action.response.data);
            return action.response.data
        }
        case "LOAD_PRODUCT_CARDS__BY_LOCATION_FAIL":
            return state;
        default:
            return state;
    }
}

/* get product when user search */
export function productSearchItem(state=[{}], action){
    switch(action.type){
        case PRODUCTS_SEARCH_FETCH_SUCCESS : {
            // console.log("reducer product item",action.response);
            return action.response
        }
        default:
            return state;
    }
}

/* get products name 10 item */
export function productNames(state=[{}], action){
    switch(action.type){
        case LAOD_PRODUCT_NAME_SUCCESS:
            return action.response.data
        default:
            return state;
    }
}

export function productCardName(state=[{}], action){
    switch(action.type){
        case LOAD_PRODUCT_CARD_BY_NAME_SUCCESS:
            return action.response.data
        default:
            return state;
    }
}

