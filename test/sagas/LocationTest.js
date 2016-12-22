import { call, put } from "redux-saga/effects";
import assert from "assert";

import {fetchLocationsByName,fetchLocations} from './../../src/app/sagas/locations/locations'
import {getLocationsByName, getLocations} from './../../src/app/api/locations'

describe('Locations saga', () => {
    describe('fetchLocationsByName()', () => {
        const action= { address_state: "h" }
        const gen = fetchLocationsByName(action);

        it('should return the getLocationsByName call', () => {
            assert.deepEqual(gen.next().value, call(getLocationsByName,action));
        });

        it('should return the LOCATIONS_FETCH_SUCCESS action', () => {
            const  locations=undefined
            assert.deepEqual(gen.next().value, put({type: 'LOCATIONS_FETCH_SUCCESS', locations}));
        });

        it('should be finished', () => {
            assert.equal(gen.next().done, true);
        });
    });


    describe('getLocations()',()=>{
        const gen=fetchLocations();
        it('should return the getLocations call', () => {

            assert.deepEqual(gen.next().value, call(getLocations));
        });

        it('should return the LOCATIONS_FETCH_SUCCESS action', () => {
            const  locations=undefined
            assert.deepEqual(gen.next().value, put({type: 'LOCATIONS_FETCH_SUCCESS',locations}));
        });


        it('should be finished', () => {
            assert.equal(gen.next().done,true);
        });
    })
});