import assert from "assert";
import { getLocationsByName,getLocations } from './../../src/app/api/locations';


describe("Locations API", () => {
    it("it should return  Promise of getLocationsByName function", () => {
        const action ={
            address_state:"h"
        }
        const response= Promise.resolve([{address_state: 'hubei'},{address_state: 'hunan'},{adress_state:"hh"}]);
        assert.deepEqual(getLocationsByName(action), response);
    })

    it("it should return Promise of getLocations function", () => {

        const response= Promise.resolve([{address_state: 'hubei'},{address_state: 'hunan'},{adress_state:"hh"}]);
        assert.deepEqual(getLocations(), response);
    })


})