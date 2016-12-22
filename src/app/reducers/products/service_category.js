export default function services(state=[{}],action){
  switch (action.type){
    case 'SERVICE_CATEGORY_FETCH_SUCCESS':
      //console.log(JSON.stringify(action.services));
      return action.services;
    case 'SERVICE_CATEGORY_FETCH_FAIL':
      return state;
    default:
      return state;
  }
}
