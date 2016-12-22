import assert from "assert";
import {
        loadProductCards,
        searchProducts,
        loadProductCardsByLocation,
        loadProductLocation,
        loadProductNames,
        loadProductCardsByName
} from './../../../src/app/actions/products.js';

// unit test action by ky sona 15-Dec-2016
describe("Load products action", () => {
    it("it should return type LOAD_PRODUCT_CARDS and limit 16 for action loadProductCards", () => {
        assert.deepEqual(loadProductCards(16), { type: 'LOAD_PRODUCT_CARDS', limit: 16 });
    })
})

describe("Load product name", () => {
    it("it should return type SEARCH_PRODUCTS_BY_NAME_LOCATION and location, name and limit", () => {
        var location = "phnom penh";
        var name= "coca cola";
        var limit = 16;
        assert.deepEqual(searchProducts(location, name, limit), {type: 'SEARCH_PRODUCTS_BY_NAME_LOCATION', location: "phnom penh", name : "coca cola", limit : 16})
    })
})

describe("Load product location", () => {
    it("it should return type LOAD_PRODUCTS_CARDS_BY_LOCATION and location and limit", () => {
        var location = "phnom penh";
        var limit = 16;
        assert.deepEqual(loadProductCardsByLocation(location, limit), {type: 'LOAD_PRODUCTS_CARDS_BY_LOCATION', location: "phnom penh" , limit : 16})
    })
})

describe("Load product by location", () => {
    it("it should return type LOCATION_SEARCH_LIST and location", () => {
        var location="phnom penh";
        assert.deepEqual(loadProductLocation(location), {type: 'LOCATION_SEARCH_LIST', address_state: location })
    })
})

describe("Load product name", () => {
    it("it should return type LOAD_PRODUCT_NAME and name", () => {
        var name="coca cola";
        assert.deepEqual(loadProductNames(name), {type: 'LOAD_PRODUCT_NAME', name : name })
    })
})

describe("Load product by name", () => {
    it("it should return type LOAD_PRODUCT_CARD_BY_NAME and name", () => {
        var name="coca cola";
        assert.deepEqual(loadProductCardsByName(name), {type: 'LOAD_PRODUCT_CARD_BY_NAME', name : name })
    })
})
