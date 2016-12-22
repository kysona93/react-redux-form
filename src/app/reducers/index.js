import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { productsSearch, productCards,
         productSearchItem,productCardsByLocation,
         productNames, productCardName
} from './products/products.js';
import { reducer as formReducer } from 'redux-form';
import productCategory from './products/product_category';
import services from './products/service_category';
import locations from './locaitons/locations'
// main reducers
export const reducers = combineReducers({
   routing: routerReducer,
   form: formReducer,
   products: productsSearch,
   productcards: productCards,
   productSearchItem: productSearchItem,
   productCategory:productCategory,
   services:services,
   locations:locations,
   productCardsByLocation:productCardsByLocation,
   productName: productNames,
   productCardNames: productCardName

});