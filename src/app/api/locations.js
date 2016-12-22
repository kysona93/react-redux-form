import axios from 'axios';
/*
 create on 2016-12-13
 This API is used for products
 */
const config = {
    headers: {
        'Content-Type':'application/json',
        'X-Api-Key':'AbCdEfGhIjK1'
    }
};
const API_ENDPOINT = `http://localhost:9000/api/v1/locations/`;

export const getLocationsByName = (action) => {
    if(action.address_state!=""){
        return (
            axios.get(API_ENDPOINT+action.address_state, config).then(function(response){
                return response.data.data;
            })
        );
    }else{
        return (
            axios.get(API_ENDPOINT+"*****", config).then(function(response){
                return response.data.data;
            })
        );
    }

};

export const getLocations=()=>{
    return(
        axios.get(API_ENDPOINT+"*****", config).then(function(response){
            return response.data.data;
        })
    );
}