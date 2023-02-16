const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      jobs: [],
      favorites: [],
      api: `https://3001-therhetttho-group1miami-8zuciurcbbs.ws-us86.gitpod.io`,
       
    },

    actions: {
      signup: (firstname, lastname, email, password) => {
        const store = getStore();

        fetch(`${store.api}/api/signup/`, {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
          }),
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
          })
          .then((data) => {
            localStorage.setItem("token", data.token);
            setStore({ isAuthenticated: true });
          })
          .catch((error) => console.log("Error during login:", error));
      },

      getJobs: async () => {
        const store = getStore();
        const response = await fetch(
          "https://glassdoor.p.rapidapi.com/jobs/search?keyword=software%20engineer&location_id=1154170&location_type=C&page_id=1&page_cursor=AB4AAYEAHgAAAAAAAAAAAAAAAcAnhckAUgEBAQcEGhsQ16pNSro70dxiUjUW7SeKfZZSrStk5I51mXxHzCrtp1Zt1Gox6xKANcdSbluwPnLv0Lxu3SFKh8C33qAPvr9HZT%2BBpC%2FK8wtBPaUAAA%3D%3D",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "e71229cf4fmshffe50a807258690p13fe80jsn763b1caac750",
              "X-RapidAPI-Host": "glassdoor.p.rapidapi.com",
              "Content-type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        const data = await response.json();
        return data.hits;
      },

      
			// //FUNCTION TO ADD HEART CLICKS TO FAVORITES LIST
			// addToFavorites: (name) => {
			// 	const newFav = { name: name}
			// 	setStore({favorites: getStore().favorites.concat(newFav)})
			// },

			//DELETE ITEM FROM FAVORITES
			deleteFromFavorites: (name) => {
				const delFav = getStore().favorites.filter((fav) => fav.name !== name)
				setStore({favorites: delFav})
			}


    }
  };
};

export default getState;
