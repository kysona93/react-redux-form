import assert from 'assert';
import {
    productCards,
    productSearchItem,
    productCardsByLocation,
    productNames,
    productCardName
} from './../../../src/app/reducers/products/products';

// unit test reducer product by ky sona 15-Dec-2016
describe("Reducer product", () => {
    it("should return object new state when LOAD_PRODUCT_CARDS_SUCCESS", () => {
        const initialState=[{}];
        const newState = [{ product_name: 'coca cola'}]
        const action ={
            type: 'LOAD_PRODUCT_CARDS_SUCCESS',
            response: {
                data: [
                    {name: 'coca cola'},
                    {name: 'fanta'}
                ]
            }
        };
        assert.deepEqual(productCards(initialState, action), action.response.data );
    })
    it("should return object initial state when LOAD_PRODUCT_CARDS_FAIL", () => {
        const initialState=[{}];
        const action ={ type: 'LOAD_PRODUCT_CARDS_FAIL' };
        assert.deepEqual(productCards(initialState, action), initialState);
    })
    it("should return object initial state when action type is not match", () => {
        const initialState=[{}];
        const action ={ type: '' };
        assert.deepEqual(productCards(initialState, action), initialState);
    })

    // location
    it("should return object new state when LOAD_PRODUCT_CARDS__BY_LOCATION_SUCCESS", () => {
        const initialState=[{}];
        const newState = [{ product_name: 'coca cola'}]
        const action ={
            type: 'LOAD_PRODUCT_CARDS__BY_LOCATION_SUCCESS',
            response: {
                data: [
                    {name: 'coca cola'},
                    {name: 'fanta'}
                ]
            }
        };
        assert.deepEqual(productCardsByLocation(initialState, action), action.response.data );
    })
    it("should return object initial state when LOAD_PRODUCT_CARDS__BY_LOCATION_FAIL", () => {
        const initialState=[{}];
        const action ={ type: 'LOAD_PRODUCT_CARDS__BY_LOCATION_FAIL' };
        assert.deepEqual(productCardsByLocation(initialState, action), initialState);
    })
    it("should return object initial state when action type is not match", () => {
        const initialState=[{}];
        const action ={ type: '' };
        assert.deepEqual(productCardsByLocation(initialState, action), initialState);
    })

    // get product by location and name
    it("should return object initial state when action type is not match", () => {
        const initialState=[{}];
        const action ={ type: '' };
        assert.deepEqual(productSearchItem(initialState, action), initialState);
    })

    // product name
    it("should return object new state when LAOD_PRODUCT_NAME_SUCCESS", () => {
        const initialState=[{}];
        const newState = [{ product_name: 'coca cola'}]
        const action ={
            type: 'LAOD_PRODUCT_NAME_SUCCESS',
            response: {
                data: [
                    {name: 'coca cola'},
                    {name: 'fanta'}
                ]
            }
        };
        assert.deepEqual(productNames(initialState, action), action.response.data );
    })
    it("should return object initial state when action type is not match", () => {
        const initialState=[{}];
        const action ={ type: '' };
        assert.deepEqual(productNames(initialState, action), initialState);
    })

    it("should return object new state when LOAD_PRODUCT_CARD_BY_NAME_SUCCESS", () => {
        const initialState=[{}];
        const newState = [{ product_name: 'coca cola'}]
        const action ={
            type: 'LOAD_PRODUCT_CARD_BY_NAME_SUCCESS',
            response: {
                data: [
                    {name: 'coca cola'},
                    {name: 'fanta'}
                ]
            }
        };
        assert.deepEqual(productCardName(initialState, action), action.response.data );
    })
    it("should return object initial state when action type is not match", () => {
        const initialState=[{}];
        const action ={ type: '' };
        assert.deepEqual(productCardName(initialState, action), initialState);
    })

})



// unit tests for the users reducers
// mocha - http://mochajs.org/#getting-started
// assert - https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message
/* describe('Product Reducer', () => {
    describe('PRODUCTS_FETCH_SUCCESS', () => {
        it('should return a list of products', () => {
            assert.deepEqual(
                products({}, {
                    type: 'PRODUCTS_FETCH_SUCCESS',
                    products: [{
                        product_id: new Object(''),
                        product_name: 'Some name',
                        product_price: 19.11,
                        address_state: 'Some location'
                    }],
                }), [{
                    product_id: new Object(''),
                    product_name: 'Some name',
                    product_price: 19.11,
                    address_state: 'Some location'
                }]
            );
        });
    });

    describe('PRODUCTS_FETCH_FAIL', () => {
        it('should return a list of null', () => {
            assert.deepEqual(
                products({}, {
                    type: 'PRODUCTS_FETCH_FAIL',
                    products: {},}), {

                }
            );
        });
    });


});*/


