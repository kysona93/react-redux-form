/**
 * Created by Acer on 12/15/2016.
 */
import { call, put } from "redux-saga/effects";
import assert from "assert";
import { fetchAllServiceCategory,fetchAllProductCategory } from "../../src/app/sagas/products/service_category";
import {getAllProductsCategory,getAllServiceCategory} from "../../src/app/api/product_category";

//describe("Product categories saga",()=>{
//    describe("getAllProductsCategory()",()=>{
//        const generator=fetchAllProductCategory();
//        it("Should call API get Product Category",()=>{
//            assert.deepEqual(generator.next().value,call(getAllProductsCategory))
//        });
//        it("should be return PRODUCT_CATEGORY_FETCH_SUCCESS",()=>{
//            assert.deepEqual(generator.next().value,put({type:'PRODUCT_CATEGORY_FETCH_SUCCESS',product:product}))
//        });
//        it("should be finished",()=>{
//            assert.deepEqual(generator.next().done,true)
//        });
//    })
//});
//describe("Service categories saga",()=>{
//    describe("getAllServicesCategory()",()=>{
//        const generator=fetchAllServiceCategory();
//        it("Should call API get Service Category",()=>{
//            assert.deepEqual(generator.next().value,call(getAllServiceCategory))
//        });
//        it("should be return Service_CATEGORY_FETCH_SUCCESS",()=>{
//            assert.deepEqual(generator.next().value,put({type:'SERVICE_CATEGORY_FETCH_SUCCESS',service:undefined}))
//        });
//        it("should be finished",()=>{
//                assert.deepEqual(generator.next().done,true)
//            });
//    });
//});