import axios from "axios";




const options = {
    method: 'GET',
    url: 'https://glassdoor.p.rapidapi.com/jobs/search',
    params: {
      keyword: 'software  engineer ',
      location_id: '1154170',
      location_type: 'C',
      page_id: '1',
      page_cursor: 'AB4AAYEAHgAAAAAAAAAAAAAAAcAnhckAUgEBAQcEGhsQ16pNSro70dxiUjUW7SeKfZZSrStk5I51mXxHzCrtp1Zt1Gox6xKANcdSbluwPnLv0Lxu3SFKh8C33qAPvr9HZT+BpC/K8wtBPaUAAA=='
    },
    headers: {
      'X-RapidAPI-Key': 'e71229cf4fmshffe50a807258690p13fe80jsn763b1caac750',
      'X-RapidAPI-Host': 'glassdoor.p.rapidapi.com', 
      "access-control-allow-origin": "*"
    }
  };
  
  // async function get_jobs(){
  //   const res = await fetch(
  //     options
  //   );
  //   const data = await res.json();
  //   return data
  const get_jobs = axios.request(options)
  .then(function (response) {
    return response.data
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  

  export {get_jobs}