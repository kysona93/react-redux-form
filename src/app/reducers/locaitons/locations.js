export default function locations(state = [{}], action) {
    switch (action.type){
        case 'LOCATIONS_FETCH_SUCCESS':
            // console.log(JSON.stringify(action.locations));
            return action.locations;
        case 'LOCATIONS_FETCH_FAIL':
            return state;
        default:
            return state;
    }
}
