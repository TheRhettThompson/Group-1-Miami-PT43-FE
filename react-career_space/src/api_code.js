import { json } from "react-router";
// import axios from "axios";




// const options = {
//   method: 'GET',
//   url: 'https://glassdoor.p.rapidapi.com/jobs/search',
//   params: {
//     keyword: 'software  engineer ',
//     location_id: '1154170',
//     location_type: 'C',
//     page_id: '1',
//     page_cursor: 'AB4AAYEAHgAAAAAAAAAAAAAAAcAnhckAUgEBAQcEGhsQ16pNSro70dxiUjUW7SeKfZZSrStk5I51mXxHzCrtp1Zt1Gox6xKANcdSbluwPnLv0Lxu3SFKh8C33qAPvr9HZT+BpC/K8wtBPaUAAA=='
//   },
//   headers: {
//     'X-RapidAPI-Key': 'e71229cf4fmshffe50a807258690p13fe80jsn763b1caac750',
//     'X-RapidAPI-Host': 'glassdoor.p.rapidapi.com',
//     "access-control-allow-origin": "*"
//   }
// };

// // async function get_jobs(){
// //   const res = await fetch(
// //     options
// //   );
// //   const data = await res.json();
// //   return data
// let get_jobs = async () => {
//   axios.request(options)
//     .then(function (response) {
//       console.log(response.data.hits);
//       return response.data.hits
      
//     }).catch(function (error) {
//       console.error(error);
//     });
// }



// export { get_jobs }

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e71229cf4fmshffe50a807258690p13fe80jsn763b1caac750',
		'X-RapidAPI-Host': 'glassdoor.p.rapidapi.com',
    "access-control-allow-origin": "*"
	}
};

async function get_jobs(){
  const response = await fetch('https://glassdoor.p.rapidapi.com/jobs/search?keyword=software%20%20engineer%20&location_id=1154170&location_type=C&page_id=1&page_cursor=AB4AAYEAHgAAAAAAAAAAAAAAAcAnhckAUgEBAQcEGhsQ16pNSro70dxiUjUW7SeKfZZSrStk5I51mXxHzCrtp1Zt1Gox6xKANcdSbluwPnLv0Lxu3SFKh8C33qAPvr9HZT%2BBpC%2FK8wtBPaUAAA%3D%3D', 
  options
  );
  const data = await response.json();
  return data.hits
}

export {get_jobs}


// fetch('https://glassdoor.p.rapidapi.com/jobs/search?keyword=software%20%20engineer%20&location_id=1154170&location_type=C&page_id=1&page_cursor=AB4AAYEAHgAAAAAAAAAAAAAAAcAnhckAUgEBAQcEGhsQ16pNSro70dxiUjUW7SeKfZZSrStk5I51mXxHzCrtp1Zt1Gox6xKANcdSbluwPnLv0Lxu3SFKh8C33qAPvr9HZT%2BBpC%2FK8wtBPaUAAA%3D%3D', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));