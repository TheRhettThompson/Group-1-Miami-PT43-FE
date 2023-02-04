const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      jobs: [],
      favoriteJobs: [],
      //locations: [],

    },

    actions: {
      // GET request for Jobs
      getJobs: () => {
        const store = getStore()
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'e71229cf4fmshffe50a807258690p13fe80jsn763b1caac750',
            'X-RapidAPI-Host': 'glassdoor.p.rapidapi.com',
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          }
        };
        fetch("https://glassdoor.p.rapidapi.com/jobs/search?keyword=software%20engineer&location_id=1154170&location_type=C&page_id=1&page_cursor=AB4AAYEAHgAAAAAAAAAAAAAAAcAnhckAUgEBAQcEGhsQ16pNSro70dxiUjUW7SeKfZZSrStk5I51mXxHzCrtp1Zt1Gox6xKANcdSbluwPnLv0Lxu3SFKh8C33qAPvr9HZT%2BBpC%2FK8wtBPaUAAA%3D%3D", options)
          .then(response => response.json())
          .then(response => console.log(response))
          .then(data => setStore({ jobs: data.properties.hits}))
          .catch(error => console.log(error))
      },




    }
  };
};

export default getState;
