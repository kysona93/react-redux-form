/**
 * Created on 12/13/2016.
 * This action file is used for menu category
 */

export  function productCategoryFetchSuccess (categories) {
  return {
    type:'PRODUCT_CATEGORY_FETCH_SUCCESS)',
    categories
  }

}
export function productCategoryFetchFail(categories){
  return {
    type:'PRODUCT_CATEGORY_FETCH_SUCCESS',
    categories
  }
}
export function serviceCategoryFetchSuccess(services){
  return{
    type:'SERVICE_CATEGORY_FETCH_SUCCESS',
    services
  }
}
export function serviceCategoryFetchFail(services){
  return{
    type:'SERVICE_CATEGORY_FETCH_FAIL',
    services
  }
}
