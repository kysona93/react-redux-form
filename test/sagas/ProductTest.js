import { call, put } from "redux-saga/effects";
import assert from "assert";
import {
    fetchProducts,
    fetchProductCards,
    fetchProductSearch
} from './../../src/app/sagas/products/products';
import {
    getAllProducts,
    getProductCards,
    getProductSearch
} from './../../src/app/api/products';

// unit tests for the users saga
describe('Users saga', () => {
    describe('usersFetchList()', () => {
        const generator = fetchProducts();

        it('should return the getAllProducts call', () => {
            assert.deepEqual(generator.next().value, call(getAllProducts));
        });

        //it('should return the PRODUCTS_FETCH_SUCCESS action', () => {
        //    assert.deepEqual(generator.next().value, put({type: 'PRODUCTS_FETCH_SUCCESS', productcards: undefined}));
        //});
        //
        //it('should be finished', () => {
        //    assert.equal(generator.next().done, true);
        //});
    });
});

// unit test product saga by ky sona 15 -Dec-2016
describe("Proudct saga", () => {
    const action= { limit: 16 }
    const generator = fetchProductCards(action);

    it("should call getProductCard", () => {
        assert.deepEqual(generator.next().value, call(getProductCards, action));
    })

    it("should put({type: LOAD_PRODUCT_CARDS_SUCCESS, response})", () => {
        const response = undefined;
        assert.deepEqual(generator.next().value, put({type: 'LOAD_PRODUCT_CARDS_SUCCESS', response}));
    })

    it("should be finished fetchProductCards generator", () => {
        assert.deepEqual(generator.next().done, true);
    })

    // unit test for search product by name
    const product_name = undefined;
    const gtr = fetchProductSearch();

    it("should call getProductSearch", () => {
        assert.deepEqual(gtr.next().value, call(getProductSearch, product_name));
    })

    it("should put({type: PRODUCTS_SEARCH_FETCH_SUCCESS, response})", () => {
        const response = undefined;
        assert.deepEqual(gtr.next().value, put({type: 'PRODUCTS_SEARCH_FETCH_SUCCESS', response}));
    })

})