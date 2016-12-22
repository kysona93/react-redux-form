import assert from "assert";
import {
    getProductCards,
    getProductSearch,
    searchProducts,
    searchProductName,
    searchProductByName
} from './../../src/app/api/products.js';

// unit test api by ky sona 15-Dec-2016
describe("Products API", () => {
    it("it should return object promise of getProductCard function", () => {
        const action ={
            limit: 16
        }
        const response= Promise.resolve([{name: 'coca cola'},{name: 'fanta'}]);
        assert.deepEqual(getProductCards(action), response);
    })

    it("it should return object promise of getProductSearch function", () => {
        const action = {
            name : "coca cola"
        }
        const response= Promise.resolve([{name: 'coca cola'},{name: 'fanta'}]);
        assert.deepEqual(getProductSearch(action.name), response);
    })

    it("it should return object promise of searchProducts function", () => {
        const action = {
            location : "phnom penh",
            name : "coca cola",
            limit : 16
        }
        const response= Promise.resolve([{name: 'coca cola'},{name: 'fanta'}]);
        assert.deepEqual(searchProducts(action.location, action.name, action.limit), response);
    })

    it("it should return object promise of searchProductName function", () => {
        const action ={
            name : 'coca cola'
        }
        const response= Promise.resolve([{name: 'coca cola'},{name: 'fanta'}]);
        assert.deepEqual(searchProductName(action.name), response);
    })

    it("it should return object promise of searchProductByName function", () => {
        const action ={
            name : 'coca cola'
        }
        const response= Promise.resolve([{name: 'coca cola'},{name: 'fanta'}]);
        assert.deepEqual(searchProductByName(action.name), response);
    })



})
