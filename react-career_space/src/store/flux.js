//code from Star Wars API project immediately below, with edits for this project
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      jobs: [],
      favoriteJobs: [],
      //locations: [],

    },

    actions: {
      // GET request for Jobs
      getJobs: async () => {
        const store = getStore()
        const response = await fetch(
          'https://glassdoor.p.rapidapi.com/jobs/search',
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'e71229cf4fmshffe50a807258690p13fe80jsn763b1caac750',
              'X-RapidAPI-Host': 'glassdoor.p.rapidapi.com'
            },
            params: {
              keyword: 'software  engineer ',
              location_id: '1154170',
              location_type: 'C',
              page_id: '1',
              page_cursor: 'AB4AAYEAHgAAAAAAAAAAAAAAAcAnhckAUgEBAQcEGhsQ16pNSro70dxiUjUW7SeKfZZSrStk5I51mXxHzCrtp1Zt1Gox6xKANcdSbluwPnLv0Lxu3SFKh8C33qAPvr9HZT+BpC/K8wtBPaUAAA=='
            },
          }
        );

        const data = await response.json();
        return data.hits

      },

      loadData: () => {
        const store = getStore();

        fetch('https://glassdoor.p.rapidapi.com/jobs/search', {
         
          
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'e71229cf4fmshffe50a807258690p13fe80jsn763b1caac750',
              'X-RapidAPI-Host': 'glassdoor.p.rapidapi.com',
              "Content-type": "application/json",
              "Access-Control-Allow-Origin": "*",

            },
            params: {
              keyword: 'software  engineer ',
              location_id: '1154170',
              location_type: 'C',
              page_id: '1',
              page_cursor: 'AB4AAYEAHgAAAAAAAAAAAAAAAcAnhckAUgEBAQcEGhsQ16pNSro70dxiUjUW7SeKfZZSrStk5I51mXxHzCrtp1Zt1Gox6xKANcdSbluwPnLv0Lxu3SFKh8C33qAPvr9HZT+BpC/K8wtBPaUAAA=='
            },
          }


        )
          .then(response => response.json())
        .then(data => setStore({ jobs: data.hits }))
        .catch(error => console.log(error))
    }

    // GET request for favoriteJobs
    // getFavoriteJobs: () => {
    //   fetch('https://swapi.dev/api/planets/') //NEED TO REPLACE WITH GLASSDOOR API
    //     .then(data => data.json())
    //     .then(res => setStore({ favoriteJobs: res.results }))
    // },


    // //FUNCTION to add Heart CLICKS to favoriteJobs List 
    // addToFavoriteJobs: (jobs) => {
    // 	const newFavJob = { jobs: jobs}
    // 	setStore({favorites: getStore().favoriteJobs.concat(newFavJob)})
    // },

    // //DELETE ITEM FROM favoriteJobs list
    // deleteFromFavoriteJobs: (jobs) => {
    // 	const delFavJob = getStore().favoriteJobs.filter((favJob) => fav.jobs !== jobs)
    // 	setStore({favorites: delFavJob})
    // }


  }
};
};

export default getState;
