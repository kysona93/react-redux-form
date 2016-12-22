export default function products(state=[{}], action) {
switch (action.type){
  case 'PRODUCT_CATEGORY_FETCH_SUCCESS':
        //console.log(JSON.stringify(action.products));
        return action.products;
    case 'PRODUCT_CATEGORY_FETCH_FAIL':
        return state;

  default:
        return state;
}
}
