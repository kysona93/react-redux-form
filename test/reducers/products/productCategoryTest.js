import assert from "assert";
import users from "../../../src/app/reducers/products/product_category";

// unit tests for the users reducers
// mocha - http://mochajs.org/#getting-started
// assert - https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message
//describe('category reducer', () => {
//    describe('Product category List', () => {
//        it('should return a list product category', () => {
//            assert.deepEqual(
//                users({}, {
//                    type: 'PRODUCT_CATEGORY_FETCH_SUCCESS',
//                    users: [{
//                        id: 1,
//                        username: 'Some name',
//                        job: 'Some job',
//                    }],
//                }), [{
//                    id: 2,
//                    username: 'Some name',
//                    job: 'Some job',
//                }]
//            );
//        });
//    });
//});
//describe('Product category List of null', () => {
//    it('should return a list of null', () => {
//        assert.deepEqual(
//            users({}, {
//                type: 'PRODUCT_CATEGORY_FETCH_FAIL',
//                users: [{}],
//            }), [{}]
//        );
//    });
//    it("should be finished",()=>{
//        assert.deepEqual(users.next().done,true)
//    });
//});