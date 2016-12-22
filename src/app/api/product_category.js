/**
 * Created by Acer on 12/13/2016.
 */
//import axios from 'axios';
//const config ={
//  headers:{
//    'Content-Type':'application/json',
//    'X-Api-Key':'AbCdEfGhIjK1'
//  }
//}
//const API_ENDPOINT = `http://localhost:9000/api/v1/product-categories/`;
//
//
//export const getAllProductsCategory = () => {
//  return (
//    axios.get(API_ENDPOINT+'String', config).then(function(response){
//      return response.data.data;
//    })
//  );
//};

  export const getAllProductsCategory=()=>{
    return new Promise(resolve => {
      setTimeout(()=> {
        // build sum dummy user list
        let product = [
          {"id":1,"product":"Apple",
            "subcategory":[{"name":"service1"}, {"name":"service2"}]},
          {"id":2,"product":"Sumsung","job":"php"},
          {"id":3,"product":"Car","job":"vb"},
          {"id":4,"product":"Moto","job":"java"},
          {"id":5,"product":"Cocacola","job":"test"},
          {"id":6,"product":"Pepsi","job":"c#"},
          {"id":7,"product":"Sting","job":"wordpress"},
          {"id":8,"product":"Computer","job":"japan"},
          {"id":9,"product":"Air","jobe":"job"}

        ];
        resolve(product);
      },1000);

    });
  };
export const getAllServiceCategory=()=>{
  return new Promise(resolve => {
    setTimeout(()=> {
      // build sum dummy user list
      let service = [
        {"id":2,"ServiceName":"Service1","subcategory":[{"name":"sub1"},{name:"sub2"}]},
        {"id":3,"ServiceName":"Service3"},
        {"id":4,"ServiceName":"Service6"},
        {"id":5,"ServiceName":"Service7"},
        {"id":6,"ServiceName":"Service9"},
        {"id":7,"ServiceName":"Service2"},
        {"id":8,"ServiceName":"Service5"},
        {"id":9,"ServiceName":"Service9"}

      ];
      resolve(service);
    },1000);

  });
};


