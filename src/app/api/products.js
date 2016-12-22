import axios from 'axios';
/**
 * This is API is used for products
 */
const config = {
    headers: {
        'Content-Type':'application/json',
        'X-Api-Key':'AbCdEfGhIjK1'
    }
};
const API_ENDPOINT = `http://localhost:9000/api/v1/product-list/`;
const GET_PRODUCTS_BY_LOCATION ='http://localhost:9000/api/v1/products/'

export const getProducts = (action) => {
    if(action.product_name=='') {
        return (
            axios.get(GET_PRODUCTS_BY_LOCATION + action.address_state, config).then(function (response) {
                return response.data.data;
            })
        )
    }else if(action.product_state == '') {
        return (
            axios.get(GET_PRODUCTS_BY_LOCATION + action.product_name, config).then(function (response) {
                return response.data.data;
            })
        )
    }else {

        return (
            axios.get(API_ENDPOINT+action.address_state+'/'+action.product_name, config).then(function(response){
                return response.data.data;
            })
        );
    }
};

export const getAllProducts = () => {
    return (
        axios.get(API_ENDPOINT+'String/String', config).then(function(response){
            return response.data.data;
        })
    );
};

/* get product cards to display auto scroll content */
export function getProductCards(action){
    const response = axios.get("http://localhost:9000/api/v1/products-list/"+action.limit, config).then(function(response){
        return response.data;
    })
    return response;
}

/* filter products by location */
export function getProductsCardsByLocation(action){
    const response = axios.get("http://localhost:9000/api/v1/products/"+action.location+"/"+action.limit, config).then(function(response){
        return response.data;
    })
    return response;
}

/* get product when user search */
export function getProductSearch(action){
        return(
            axios.get("http://localhost:9000/api/v1/product-name/"+action.product_name, config).then(function(response) {
                return response.data.data;
            })
        );
}

/* search product by location and name */
export function searchProducts(action){
    const response = axios.get("http://localhost:9000/api/v1/product-list/"+
                                action.location+"/"+action.name+"/"+action.limit, config)
                        .then(function(response){
                            return response.data;
                        })
    return response;
}

/* search product name 10 item */
export function searchProductName(action){
    const response = axios.get("http://localhost:9000/api/v1/products-name/"+ action.name, config)
        .then(function(response){
            return response.data;
        })
    return response;
}

export function searchProductByName(action){
    const response = axios.get("http://localhost:9000/api/v1/products/"+ action.name, config)
        .then(function(response){
            return response.data;
        })
    return response;
}



