import assert from 'assert';
import locations from './../../../src/app/reducers/locaitons/locations';

describe('Location Reducer', () => {
    describe('LOCATIONS_FETCH_SUCCESS', () => {
        it('should return a list of locations', () => {
            assert.deepEqual(
                locations({}, {
                    type: 'LOCATIONS_FETCH_SUCCESS',
                    locations: [{
                        address_state: 'Some location'
                    },{
                        address_state: 'Any location'
                    }]
                }), [{
                    address_state: 'Some location'
                },{
                    address_state: 'Any location'
                }
                ]
            );
        });
    });

    describe('LOCATIONS_FETCH_FAIL', () => {
        it('should return a list of null', () => {
            assert.deepEqual(
               locations({}, {
                    type: 'LOCATIONS_FETCH_FAIL',
                    locations: {}
               }), {

                }
            );
        });
    });
});