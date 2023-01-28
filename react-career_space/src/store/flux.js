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
			getJobs: () => {
				fetch('https://swapi.dev/api/people/') //NEED TO REPLACE WITH GLASSDOOR API
				.then(data => data.json())
				.then(res => setStore({jobs: res.results}))
			},

			// GET request for favoriteJobs
			getFavoriteJobs: () => {
				fetch('https://swapi.dev/api/planets/') //NEED TO REPLACE WITH GLASSDOOR API
				.then(data => data.json())
				.then(res => setStore({favoriteJobs: res.results}))
			},

			
			//FUNCTION to add Heart CLICKS to favoriteJobs List 
			addToFavoriteJobs: (jobs) => {
				const newFavJob = { jobs: jobs}
				setStore({favorites: getStore().favoriteJobs.concat(newFavJob)})
			},

			//DELETE ITEM FROM favoriteJobs list
			deleteFromFavoriteJobs: (jobs) => {
				const delFavJob = getStore().favoriteJobs.filter((favJob) => fav.jobs !== jobs)
				setStore({favorites: delFavJob})
			}

 
		}
	};
};

export default getState;

//CODE FROM BEFORE 1/27/23 BELOW
// const getState = ({ getStore, getActions, setStore }) => {
//  return {
    // update store to reflect what we want to use from the backend
   // store: {
     // api: "https://3001-therhetttho-group1miami-pxv69q9cnsj.ws-us84.gitpod.io",
     // isAuthenticated: false,
     // vehicles: [],
   //},

    // Add sign-up fetch request as an action
    //actions: {
      //signup: (
        //firstname,
        //lastname,
        //username,
        //password,
        //email,
        //comments,
      //) => {
        //const store = getStore();

        //fetch(`${store.api}/api/signup/`, {
          //method: "POST",
          //body: JSON.stringify({
            //firstname: firstname,
            //lastname: lastname,
            //username: username,
            //password: password,
            //email: email,
            //comments: comments,
          //}),
          //headers: {
            //"Content-type": "application/json",
            //"Access-Control-Allow-Origin": "*",
          //},
        //})
          //.then((resp) => {
            //if (resp.ok) {
              //return resp.json();
           // }
          // })
          //.then((data) => {
            //localStorage.setItem("token", data.token);
            //setStore({ isAuthenticated: true });
          //})
          //.catch((error) => console.log("Error during login:", error));
      //},

      //sign_in: (email, password) => {
        //const store = getStore();

        //fetch(`${store.api}/api/login`, {
          //method: "POST",
          //body: JSON.stringify({
           //firstname: firstname,
           // lastname: lastname,
           // username: username,
           // password: password,
            //validationcode: validationcode,
            //email: email,
            //comments: comments,
           // datejoined: datejoined,
            //lastlogin: lastlogin,
            //active: active,
          //}),
          //headers: {
            //"Content-type": "application/json",
            //"Access-Control-Allow-Origin": "*",
          //},
        //})
          //.then((resp) => {
            //if (resp.ok) {
              //return resp.json();
            //}
          //})
          //.then((data) => {
            //localStorage.setItem("token", data.token);
            //setStore({ isAuthenticated: true });
          //})
          //.catch((error) =>
            //console.log("There was an error signing in", error)
          //);
      //},

      //loadData: () => {
        //const store = getStore();

        //fetch(`${store.api}/api/vehicles/`, {
          //headers: {
            //"Content-type": "application/json",
            //"Access-Control-Allow-Origin": "*",
           // Authorization: `Bearer ${localStorage.getItem("token")}`,
          //},
        //})
          //.then((response) => response.json())
          //.then((data) => setStore({ vehicles: data }))
          //.catch((error) => console.log(error));
      //},
    //},
//  };
//};

//export default getState;
